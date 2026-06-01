import { useEffect, useState } from "react"


function PlayerData() {
    const [playerData, setPlayerData] = useState([]);

    useEffect(() => {
        fetch("http://localhost:8080/api/v1/player")
            .then(res => res.json())
            .then(data => setPlayerData(data))
            .catch(error => console.error(error));
    }, []);

    return (
        <div>
            <h1>NBA Players</h1>

            <table>
                <thead>
                    <tr>
                    <th>Name</th>
                    <th>Team</th>
                    <th>POS</th>
                    <th>PPG</th>
                    <th>RPG</th>
                    <th>APG</th>
                    <th>FG%</th>
                    </tr>
                </thead>

                <tbody>
                    {playerData.map(player => (
                    <tr key={player.id}>
                        <td>{player.name}</td>
                        <td>{player.team}</td>
                        <td>{player.pos}</td>
                        <td>{player.pts}</td>
                        <td>{player.trb}</td>
                        <td>{player.ast}</td>
                        <td>{player.fg_pct}</td>
                    </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default PlayerData