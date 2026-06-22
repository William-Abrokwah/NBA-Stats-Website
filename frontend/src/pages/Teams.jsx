import { Link } from "react-router";
import { useState } from "react";
import Search from "../components/Search"
import TeamData from "../data/teams.json"

function Teams() {
    const [query, setQuery] = useState("");

    const filteredTeams = TeamData.teams.filter(t => 
        t.name.toLowerCase().includes(query.toLowerCase()) || 
        t.abbr.toLowerCase().includes(query.toLowerCase()));
        
    return (
        <div className="mt-8">
            <h1 className="text-3xl font-bold mb-2">Select a Team</h1>
            
            <Search 
                value={query} 
                onChange={setQuery} 
                placeholder="Search for NBA Teams"
            />

            <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 gap-4 mt-6">
                {filteredTeams.map(team => (
                    <Link 
                        to={`/teams/${team.abbr.toLowerCase()}`}
                        key={team.name}
                        className="flex flex-col justify-center items-center text-center bg-white border-2 hover:border-amber-500 hover:cursor-pointer hover:opacity-90 active:opacity-95 active:border-red-500 h text-black px-2 py-2 rounded-2xl"
                    >
                        <img src={`https://cdn.ssref.net/req/202606180/tlogo/bbr/${team.abbr}-2026.png`} alt={team.abbr}/>
                        <p className="font-bold">{team.name}</p>
                    </Link>
                ))}
            </div>
        </div>
    );
}

export default Teams