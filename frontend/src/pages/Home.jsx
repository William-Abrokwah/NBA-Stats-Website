import { Link } from "react-router";

function Home() {
    return (
        <div>
            {/* Mobile Home */}
            <div className="flex sm:hidden flex-col justify-center items-center min-h-120 my-auto">
                <h1 className="font-bold text-4xl text-center w-3/4 leading-none">Tracking The GOAT </h1>

                <p className="text-orange-300 text-xs text-center w-3/4 mt-2">
                    (And the 450+ Other Guys Out There Just Running Cardio)
                </p>

                <p className="font-bold text-sm text-center mt-10 w-3/4">
                    Find out who is breaking the metrics and who is holding their team back
                </p>

                <Link to="/search" className="flex justify-center items-center text-xl font-bold bg-red-500 w-2/3 h-15 rounded-4xl mt-8 hover:bg-red-400 active:bg-red-700">
                    See the Real Stats
                </Link>
            </div>

            {/* Desktop Home */}
            <div className="hidden sm:flex flex-col justify-center min-h-150 my-auto">
                <h1 className="font-bold text-6xl leading-none">Tracking The GOAT <span className="hidden md:inline">🐐</span></h1>

                <p className="text-orange-300 mt-2">
                    (And the 450+ Other Guys Out There Just Running Cardio)
                </p>

                <p className="font-bold text-2xl mt-10 w-120">
                    Find out who is breaking the metrics and who is holding their team back
                </p>

                <Link to="/search" className="flex justify-center items-center font-bold bg-red-500 w-60 h-15 rounded-4xl mt-8 hover:bg-red-400 active:bg-red-700">
                    See the Real Stats
                </Link>
            </div>
        </div>
    );
}

export default Home