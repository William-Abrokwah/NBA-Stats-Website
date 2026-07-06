import { useState, useEffect } from "react";
import { useParams } from "react-router"
import Stat from "../components/Stat.jsx"
import TeamData from "../data/teams.json"
import PositionData from "../data/positions.json"
import { getPlayer } from "../services/api.js";

function PlayerDetails() {
    const [player, setPlayer] = useState();
    const { id } = useParams();

    useEffect(() => {
        const loadPlayer = async () => {
            try {
                const data = await getPlayer(id);
                setPlayer(data);
            } catch (error) {
                console.error(error);
            }
        };

        loadPlayer();
    }, [id])

    if (!player) { 
        return <h1>Player not found</h1>; 
    }

    function getRefId(name) {
        const [first, ...lastParts] = name.toLowerCase().split(" ");
        const firstName = first;
        const lastName = lastParts.join("");

        const cleanLast = lastName.replace(/[^a-z]/g, "");

        return cleanLast.slice(0, 5) + firstName.slice(0, 2) + "01";
    }

    return (
        <div className="flex flex-col mt-8">
          <div className="flex items-center justify-between font-bold">
                <div className="flex items-center">
                    <div className="bg-white px-2 py-2 rounded-2xl w-20 mr-4">
                        <img src={`https://www.basketball-reference.com/req/202605210/images/headshots/${getRefId(player.name)}.jpg`} alt={player.name}/>
                    </div>

                    <div className="flex flex-col">
                        <p>{player.name}</p>
                    </div>
                </div>

                <div className="text-orange-400">
                    2025-2026 NBA Season
                </div>
            </div>

            <div className="text-black p-8">
                <div className="mx-auto max-w-6xl">
                    <div className="bg-white rounded-xl p-4 mb-8 text-center">
                        <h2 className="text-xl sm:text-2xl font-bold">Per Game Averages</h2>
                    </div>

                    <div className="bg-white rounded-xl p-6 mb-8">
                            <Stat label="Age" value={player.age} />
                            <Stat label="Team" value={TeamData.teams.find(t => t.abbr === player.team).name} />
                            <Stat label="Position" value={PositionData.positions.find(p => p.abbr === player.pos).name} />
                            <Stat label="Games" value={player.g} />
                            <Stat label="Games Started" value={player.gs} />
                            <Stat label="Minutes Played" value={player.mp} />
                            <Stat label="Points / Game" value={player.pts} />
                    </div>

                    <div className="grid gap-6 md:grid-cols-2">
                        <div className="rounded-xl bg-white p-6">
                            <h2 className="mb-4 text-xl font-bold">Shooting</h2>

                            <Stat label="Field Goals" value={player.fg} />
                            <Stat label="Field Goals Attempts" value={player.fg_avg} />
                            <Stat label="Field Goal Percentage" value={`${(player.fg_pct * 100).toFixed(1)}%`} />

                            <Stat label="3-Point Field Goals" value={player.threep} />
                            <Stat label="3-Point Field Goals Attempts" value={player.threep_avg} />
                            <Stat label="3-Point Field Goal Percentage" value={`${(player.threep_pct * 100).toFixed(1)}%`} />

                            <Stat label="2-Point Field Goals" value={player.twop} />
                            <Stat label="2-Point Field Goals Attempts" value={player.twop_avg} />
                            <Stat label="2-Point Field Goal Percentage" value={`${(player.twop_pct * 100).toFixed(1)}%`} />

                            <Stat label="Effective Field Goal Percentage" value={`${(player.efg_pct * 100).toFixed(1)}%`} />

                            <Stat label="Free Throws" value={player.ft} />
                            <Stat label="Free Throw Attempts" value={player.ft_avg} />
                            <Stat label="Free Throw Percentage" value={`${(player.ft_pct * 100).toFixed(1)}%`} />
                        </div>
                        
                        <div>
                            <div className="rounded-xl mb-6 bg-white p-6">
                                <h2 className="mb-4 text-xl font-bold">Rebounding</h2>

                                <Stat label="Offensive" value={player.orb} />
                                <Stat label="Defensive" value={player.drb} />
                                <Stat label="Total" value={player.trb} />
                            </div>

                            <div className="rounded-xl bg-white p-6">
                                <h2 className="mb-4 text-xl font-bold">Other</h2>

                                <Stat label="Assists" value={player.ast} />
                                <Stat label="Steals" value={player.stl} />
                                <Stat label="Blocks" value={player.blk} />
                                <Stat label="Turnovers" value={player.tov} />
                                <Stat label="Personal Fouls" value={player.pf} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default PlayerDetails