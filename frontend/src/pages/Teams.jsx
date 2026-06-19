import Search from "../components/Search"
import { useState } from "react";
import teamData from "../data/teams.json"

function Teams() {
    const [query, setQuery] = useState("");

    const filteredTeams = teamData.teams.filter(t => 
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
                    <div className="flex justify-center items-center bg-white border hover:border-red-500 text-black px-2 py-2 rounded-2xl" key={team.name}>
                        <img src={`https://cdn.ssref.net/req/202606180/tlogo/bbr/${team.abbr}-2026.png`} alt={team.abbr}/>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Teams