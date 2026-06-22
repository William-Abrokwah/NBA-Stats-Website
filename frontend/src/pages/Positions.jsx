import Search from "../components/Search"
import PositionData from "../data/positions.json"
import { useState } from "react";

function Positions() {
    const [query, setQuery] = useState("");

    const filteredPositions = PositionData.positions.filter(p => 
        p.name.toLowerCase().includes(query.toLowerCase()) || 
        p.abbr.toLowerCase().includes(query.toLowerCase()));

    return (
        <div classNaprme="mt-8">
            <h1 className="text-3xl font-bold mb-2">Select a Position</h1>

            <Search
                value={query} 
                onChange={setQuery} 
                placeholder="Search for Positions"
            />

            <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 gap-4 mt-6">
                {filteredPositions.map(pos => (
                    <div 
                        key={pos.name} 
                        className="flex flex-col justify-center items-center text-center bg-white border-2 hover:border-red-500 hover:cursor-pointer hover:opacity-95 text-black px-2 py-2 rounded-2xl"
                    >
                        <img src={pos.image} alt={pos.abbr}/>
                        <p className="font-bold">{pos.name}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Positions