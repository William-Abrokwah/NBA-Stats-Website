# importing required libraries
import pandas as pd
import requests
import time
from bs4 import BeautifulSoup
from io import StringIO

url = 'https://www.basketball-reference.com/leagues/NBA_2026_ratings.html'
data = requests.get(url)

soup = BeautifulSoup(data.text) # parsing the html with beautiful soup
table = soup.find_all('table', id='ratings')[0] # getting the ratings table

links = table.find_all('a') # getting all the anchor tags/links in the table
links = [l.get("href") for l in links] # getting the urls of all the links

team_urls = [l for l in links if '/teams/' in l] # filtering to only get team urls
team_urls = [f"https://www.basketball-reference.com{l}" for l in team_urls] # formating to get the absolute urls for team urls

player_dfs = []
team_dfs = []

for team_url in team_urls:
    team_abb = team_url.split("/")[-2] # getting the team abbreviation
    
    data = requests.get(team_url)
    soup = BeautifulSoup(data.text)
    stats = soup.find_all('table', id='per_game_stats')
    
    team_data = pd.read_html(StringIO(str(stats)))[0] # turning the html into a pandas DataFrame
    team_data.insert(3, "Team", team_abb)

    # splitting team totals from player totals
    player_totals = team_data[team_data["Player"] != "Team Totals"]
    team_totals = team_data[team_data["Player"] == "Team Totals"]

    team_dfs.append(team_totals)
    player_dfs.append(player_totals)

    time.sleep(5) # delay each iteration to make sure we don't get blocked from scraping

# combine everything
players_df = pd.concat(player_dfs)
teams_df = pd.concat(team_dfs)

# removing columns and setting column types
players_df = players_df.drop(columns = ["Awards"])
players_df[["Rk", "Age", "G", "GS"]] = players_df[["Rk", "Age", "G", "GS"]].astype("Int64")

teams_df = teams_df.drop(columns = ["Rk", "Player", "Age", "Pos", "Awards"])
teams_df[["G", "GS"]] = teams_df[["G", "GS"]].astype("Int64")

# set columns to lowercase
players_df.columns = players_df.columns.str.lower()
teams_df.columns = teams_df.columns.str.lower()

# renaming columns
rename_map = {
    "fg%": "fg_pct",
    "3p": "threep",
    "3pa": "threepa",
    "3p%": "threep_pct",
    "2p": "twop",
    "2pa": "twopa",
    "2p%": "twop_pct",
    "efg%": "efg_pct",
    "ft%": "ft_pct"
}

players_df = players_df.rename(columns={"player": "name"})
players_df = players_df.rename(columns=rename_map)
teams_df = teams_df.rename(columns={"team": "tabb"})
teams_df = teams_df.rename(columns=rename_map)

# exporting to csv files
players_df.to_csv("player_stats.csv", index=False)
teams_df.to_csv("team_stats.csv", index=False)