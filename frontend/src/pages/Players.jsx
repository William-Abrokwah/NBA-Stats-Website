import { useState, useEffect } from "react";
import { Link, useSearchParams } from "react-router";
import Search from "../components/Search"
import { getPlayers } from "../services/api.js";

function Players() {
    const [query, setQuery] = useState("");
    const [players, setPlayers] = useState([]);
    const [searchParams] = useSearchParams();

    const team = searchParams.get("team");
    const position = searchParams.get("pos");

    useEffect(() => {
        const loadPlayers = async () => {
            try {
                const params = new URLSearchParams();

                if (team) params.append("team", team);
                if (position) params.append("pos", position);
                if (query) params.append("name", query);

                const data = await getPlayers(params);
                setPlayers(data);
            } catch (error) {
                console.error(error);
            }
        };

        loadPlayers();
    }, [team, position, query])

    function getRefId(name) {
        const [first, ...lastParts] = name.toLowerCase().split(" ");
        const firstName = first;
        const lastName = lastParts.join("");

        const cleanLast = lastName.replace(/[^a-z]/g, "");

        return cleanLast.slice(0, 5) + firstName.slice(0, 2) + "01";
    }

    return (
        <div className="mt-8">
            <h1 className="text-3xl font-bold mb-2">Select a Player</h1>

            <Search
                value={query} 
                onChange={setQuery} 
                placeholder={"Search for Players"}
            />

            <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 gap-4 mt-6">
                {players.map(player => (
                    <Link
                        to={`/players/${player.id}`}
                        key={player.id} 
                        className="flex flex-col justify-center items-center text-center bg-white border-2 hover:border-amber-500 hover:cursor-pointer hover:opacity-95 active:opacity-95 active:border-red-500 text-black px-2 py-2 rounded-2xl"
                    >
                        <img src={`https://www.basketball-reference.com/req/202605210/images/headshots/${getRefId(player.name)}.jpg`} alt={player.name}/>
                        <p className="font-bold">{player.name}</p>
                    </Link>
                ))}
            </div>
        </div>
    );
}

export default Players