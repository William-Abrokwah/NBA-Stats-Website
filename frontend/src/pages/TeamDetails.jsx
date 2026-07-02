import { useState, useEffect } from "react";
import { Link, useParams } from "react-router"
import TeamData from "../data/teams.json"
import Stat from "../components/Stat.jsx"

function TeamDetails() {
    const [team, setTeam] = useState()
    const { abbr } = useParams();

    useEffect(() => {
        const fetchTeam = async () => {
            try {
                const response = await fetch(
                    `http://localhost:8080/api/v1/team/tabb/${abbr.toUpperCase()}`
                );

                if (!response.ok) {
                    throw new Error("Failed to fetch team.");
                }

                const data = await response.json();
                setTeam(data);
            } catch (error) {
                console.error(error);
            }
        };

        fetchTeam();
    }, [abbr])

    if (!team) { 
        return <h1>Team not found</h1>; 
    }

    const name = TeamData.teams.find( 
        t => t.abbr.toLowerCase() === abbr).name;

    return ( 
        <div className="flex flex-col mt-8">
            <div className="flex items-center justify-between font-bold">
                <div className="flex items-center">
                    <div className="bg-white px-2 py-2 rounded-2xl w-20 mr-4">
                        <img src={`https://cdn.ssref.net/req/202606180/tlogo/bbr/${team.tabb}-2026.png`} alt={team.abbr}/>
                    </div>

                    <div className="flex flex-col">
                        <p>{name}</p>
                        <p>{team.tabb}</p>
                    </div>
                </div>

                <div className="text-orange-400">
                    2025-2026 NBA Season
                </div>
            </div>

            <div className="text-black p-8">
                <div className="mx-auto max-w-6xl">
                    <div className="bg-white rounded-xl p-4 mb-8 text-center">
                        <h2 className="text-xl sm:text-2xl font-bold">Combined Player Averages</h2>
                    </div>

                    <div className="bg-white rounded-xl p-6 mb-8">
                            <Stat label="Games" value={team.g} />
                            <Stat label="Games Started" value={team.gs} />
                            <Stat label="Minutes Played" value={team.mp} />
                            <Stat label="Points / Game" value={team.pts} />
                    </div>

                    <div className="grid gap-6 md:grid-cols-2">
                        <div className="rounded-xl bg-white p-6">
                            <h2 className="mb-4 text-xl font-bold">Shooting</h2>

                            <Stat label="Field Goals" value={team.fg} />
                            <Stat label="Field Goals Attempts" value={team.fg_avg} />
                            <Stat label="Field Goal Percentage" value={`${(team.fg_pct * 100).toFixed(1)}%`} />

                            <Stat label="3-Point Field Goals" value={team.threep} />
                            <Stat label="3-Point Field Goals Attempts" value={team.threep_avg} />
                            <Stat label="3-Point Field Goal Percentage" value={`${(team.threep_pct * 100).toFixed(1)}%`} />

                            <Stat label="2-Point Field Goals" value={team.twop} />
                            <Stat label="2-Point Field Goals Attempts" value={team.twop_avg} />
                            <Stat label="2-Point Field Goal Percentage" value={`${(team.twop_pct * 100).toFixed(1)}%`} />

                            <Stat label="Effective Field Goal Percentage" value={`${(team.efg_pct * 100).toFixed(1)}%`} />

                            <Stat label="Free Throws" value={team.ft} />
                            <Stat label="Free Throw Attempts" value={team.ft_avg} />
                            <Stat label="Free Throw Percentage" value={`${(team.ft_pct * 100).toFixed(1)}%`} />
                        </div>
                        
                        <div>
                            <div className="rounded-xl mb-6 bg-white p-6">
                                <h2 className="mb-4 text-xl font-bold">Rebounding</h2>

                                <Stat label="Offensive" value={team.orb} />
                                <Stat label="Defensive" value={team.drb} />
                                <Stat label="Total" value={team.trb} />
                            </div>

                            <div className="rounded-xl bg-white p-6">
                                <h2 className="mb-4 text-xl font-bold">Other</h2>

                                <Stat label="Assists" value={team.ast} />
                                <Stat label="Steals" value={team.stl} />
                                <Stat label="Blocks" value={team.blk} />
                                <Stat label="Turnovers" value={team.tov} />
                                <Stat label="Personal Fouls" value={team.pf} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <Link 
                to={`/players?team=${abbr}`} 
                className="flex justify-center items-center font-bold text-xl bg-orange-500 h-16 mx-7 rounded-4xl hover:bg-orange-400 active:bg-orange-700 transition-colors"
            >
                See Players
            </Link>
        </div>
    );
}

export default TeamDetails