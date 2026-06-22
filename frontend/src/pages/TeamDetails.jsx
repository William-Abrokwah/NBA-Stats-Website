import { Link, useParams } from "react-router"
import TeamData from "../data/teams.json"

function TeamDetails() {
    const { abbr } = useParams();

    const team = TeamData.teams.find( 
        t => t.abbr.toLowerCase() === abbr );
    
    if (!team) { 
        return <h1>Team not found</h1>; 
    }

    return ( 
        <div className="flex">
            <div className="flex flex-col items-center">

                <div className="bg-white px-4 py-4 rounded-2xl">
                    <img src={`https://cdn.ssref.net/req/202606180/tlogo/bbr/${team.abbr}-2026.png`} alt={team.abbr}/>
                </div>

                <p className="font-bold mt-2">{team.name} ({team.abbr})</p>

                <Link 
                    to="/players" 
                    className="flex justify-center items-center font-bold text-xl bg-orange-500  w-52 h-15 rounded-4xl mt-6 hover:bg-orange-400 active:bg-orange-700 transition-colors"
                >
                    See Players
                </Link>
            </div> 
        </div>
    );
}

export default TeamDetails