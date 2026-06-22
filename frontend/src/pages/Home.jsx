import { Link } from "react-router";

function Home() {
    return (
        <div>
            <div className="flex flex-col justify-center items-center sm:items-start min-h-[80vh]">
                <p className="text-orange-300 text-xs sm:text-base text-center sm:text-left mt" >
                    2025-2026 NBA Season
                </p>

                <h1 className="font-bold text-4xl sm:text-6xl text-center sm:text-left leading-none">
                    Tracking The GOAT 
                    <span className="hidden md:inline">🐐</span>
                </h1>

                <p className="text-orange-300 text-xs sm:text-base text-center sm:text-left mt-2">
                    (And the 450+ Other Guys Out There Just Running Cardio)
                </p>

                <p className="font-bold text-sm sm:text-2xl text-center sm:text-left mt-10 w-3/4 sm:w-120">
                    Find out who is breaking the metrics and who is holding their team back
                </p>
                <div className="flex gap-4">
                    <Link to="/players" className="flex justify-center items-center font-bold text-xl bg-orange-500  w-72 h-15 rounded-4xl mt-8 hover:bg-orange-400 active:bg-orange-700 transition-colors">
                        See the Real Stats
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default Home