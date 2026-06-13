import { NavLink } from "react-router";
import basketballNet from "../assets/basketball-net.svg"
import { useState } from "react";

function NavBar() {
    const [showNav, setShowNav] = useState(false);

    return (
        <header className="flex justify-between items-center px-3 py-0.5" >
            <div className="flex gap-2 font-bold text-2xl">
                <div className="flex justify-center items-center bg-white w-9 h-9 rounded border border-orange-400">
                    <img src={basketballNet} alt="basketball-net" width={25}/>
                </div>
                HoopStats
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex gap-12 no-underline [&_a]:px-1.5 [&_a]:py-1.5 pr-12">
                <NavLink to="/">Home</NavLink>
                <NavLink to="/teams">Teams</NavLink>
                <NavLink to="/positions">Positions</NavLink>
                <NavLink to="/search">Search</NavLink>
            </nav>

            <div className="flex items-start justify-center gap-4 absolute top-0 right-0 mt-4 mr-4 bg-red-500">
                {/* Mobile Navigation */}
                <nav className={`${showNav ? "flex flex-col" : "hidden"} md:hidden pt-2`}>
                    <NavLink to="/" onClick={() => setShowNav(false)}>Home</NavLink>
                    <NavLink to="/teams" onClick={() => setShowNav(false)}>Teams</NavLink>
                    <NavLink to="/positions" onClick={() => setShowNav(false)}>Positions</NavLink>
                    <NavLink to="/search" onClick={() => setShowNav(false)}>Search</NavLink>
                </nav>

                {/*Hamburger and X svgs*/}
                <button onClick={() => setShowNav(!showNav)
                } className="relative top-0 right-0 md:hidden" aria-label="Toggle navigation menu">
                    {showNav ? (
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-8">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
                        </svg>
                    ) : (
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-10">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                        </svg>
                    )}
                </button>
            </div>
        </header>
    );
}

export default NavBar