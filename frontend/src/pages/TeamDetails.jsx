import { useState, useEffect } from "react";
import { Link, useParams } from "react-router"
import { teamData } from "../data/teams"
import Stat from "../components/Stat.jsx"
import { getTeam } from "../services/api.js";

function TeamDetails() {
    const [team, setTeam] = useState()
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);
    const { abbr } = useParams();

    useEffect(() => {
        const loadTeam = async () => {
            try {
                const data = await getTeam(abbr);

                if(!data) {
                    setError(true);
                } else {
                    setTeam(data);
                }
            } catch (error) {
                console.error(error);
                setError(true);
            } finally {
                setLoading(false);
            }
        };

        loadTeam();
    }, [abbr])

    if (loading) { 
        return <h1 className="mt-3">Loading...</h1>; 
    }

    if (error) { 
        return <h1 className="mt-3">Team not found</h1>; 
    }

    const name = teamData.find( 
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
                            <Stat label="Field Goals Attempts" value={team.fga} />
                            <Stat label="Field Goal Percentage" value={`${(team.fg_pct * 100).toFixed(1)}%`} />

                            <Stat label="3-Point Field Goals" value={team.threep} />
                            <Stat label="3-Point Field Goals Attempts" value={team.threepa} />
                            <Stat label="3-Point Field Goal Percentage" value={`${(team.threep_pct * 100).toFixed(1)}%`} />

                            <Stat label="2-Point Field Goals" value={team.twop} />
                            <Stat label="2-Point Field Goals Attempts" value={team.twopa} />
                            <Stat label="2-Point Field Goal Percentage" value={`${(team.twop_pct * 100).toFixed(1)}%`} />

                            <Stat label="Effective Field Goal Percentage" value={`${(team.efg_pct * 100).toFixed(1)}%`} />

                            <Stat label="Free Throws" value={team.ft} />
                            <Stat label="Free Throw Attempts" value={team.fta} />
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