# 🏀 HoopStats

A full-stack NBA stats website that lets you explore player and team stats for the 2025-2026 NBA season. Search by player, browse by team, or filter by position.


Link to hosting: https://nba-stats-website-wine.vercel.app/

Note: There may be issues with backend due to hosting limit rates.

Screenshot:<p><img src="" alt="HoopStats screenshot"></p>

## 📋 Table of Contents 
- [Introduction / Overview](#-introductionoverview)
- [Features (MVP)](#-features-mvp)
- [Tech Stack / Tools](#️-tech-stack--tools)
- [Installation / Running the Project](#️-installationrunning-the-project)
- [Usage](#-usage)
- [Dataset](#-dataset)
- [Authors](#-authors)
- [Contributing](#-contributing)
- [License](#-license)


## 📌 Introduction / Overview
HoopStats is a stats-browsing app for NBA fans who want a clean, visual way to check out player and team performance for the current season. It shows per-game averages for every player, combined team averages, and lets you explore by team, player, or position.

## 🚀 Features (MVP)
- 🔍 Search players by name
- 📊 Per-game average stats for every player, 2025-2026 season
- 🏀 Team pages showing combined team averages and link to roster
- 🧍 Position filter. View all players at a given position
- 📱 Responsive UI built with Tailwind CSS

## 🛠️ Tech Stack / Tools
**Frontend:**
- React (Vite)
- Tailwind CSS
- Hosted on Vercel

**Backend:**
- Spring Boot (Java)
- Docker
- Hosted on Render

**Database:**
- PostgreSQL via Supabase

**Data Pipeline**
- Python
- BeautifulSoup (scraping)
- Pandas (data cleaning / CSV export)

## ⚙️ Installation/Running the Project
### Prerequisites
- Node.js (v18+)
- Java 17+ and Maven
- Docker (optional, for running the backend containerized)
- Python 3.10+ (for the scraper)
- A Supabase/PostgreSQL instance

### 1. Clone the repo
```bash
git clone https://github.com/William-Abrokwah/NBA-Stats-Website.git
cd NBA-Stats-Website
```
 
### 2. Backend (Spring Boot)
Configure `application.properties` / `.env` with your Supabase DB credentials
```bash
cd backend
./mvnw spring-boot:run
```
 
Or with Docker:
```bash
docker image build -t hoopstats-backend .
docker container run -p 8080:8080 hoopstats-backend
```
 
### 3. Frontend (React + Vite)
```bash
cd frontend
npm install
npm run dev
```
 
### 4. Data Scraper (optional — to repopulate the DB)
```bash
cd data scraping
pip install -r requirements.txt
python scrape.py
```
This scrapes current season stats, cleans them with pandas, exports to CSV, and loads them into the Supabase database.

## 📖 Usage
Once running, open the frontend in your browser to:
- Search for a player by name to see their season averages
- Select a team to view combined team stats or browse its roster
- Click into a player from a team to see their individual stats
- Filter by position to compare players across the league

## 📂 Dataset

Player and team stats are collected via a custom Python scraper (BeautifulSoup + Pandas) that pulls 2025-2026 season per-game averages, cleans and structures the data, and exports it to CSV before loading it into the PostgreSQL database on Supabase.

> https://www.basketball-reference.com/leagues/NBA_2026_ratings.html

## 🖊️ Authors
- **William Abrokwah**

## 💡 Contributing

Contributions, issues, and feature requests are welcome!
1. Fork the repo
2. Create a branch (`git checkout -b feature/your-feature`)
3. Commit your changes
4. Push and open a Pull Request

## 📝 License

This project is licensed under the MIT License. See the [License](LICENSE.txt) file for more details.