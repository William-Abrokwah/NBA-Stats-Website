import { NavLink } from "react-router";
import basketballNet from "../assets/basketball-net.svg"
import { useEffect, useState } from "react";

function NavBar() {
    const [showMobileNav, setShowMobileNav] = useState(false);

    const links = [
        { to: "/", label: "Home" },
        { to: "/teams", label: "Teams" },
        { to: "/positions", label: "Positions" },
        { to: "/players", label: "Players" }
    ];

    return (
        <header className="flex justify-between items-center px-3 py-0.5" >
            {/* Logo */}
            <div className="flex gap-2 font-bold text-2xl">
                <div className="flex justify-center items-center bg-white w-9 h-9 rounded border border-orange-400">
                    <img src={basketballNet} alt="basketball-net" width={25}/>
                </div>
                HoopStats
            </div>

            {/* Desktop Nav Menu */}
            <nav className="hidden md:flex gap-12 no-underline [&_a]:px-1.5 [&_a]:py-1.5 pr-12">
                {links.map((link) => 
                    (<NavLink key={link.to} to={link.to} className={({ isActive }) => isActive ? "text-orange-400 font-bold" : "hover:text-orange-300"}> 
                        {link.label} 
                    </NavLink>))}
            </nav>

            {/* Mobile Hamburger */}
            <div
                onClick={() => setShowMobileNav(prev => (!prev))} 
                className="md:hidden"
                aria-label="Toggle navigation menu">
                {!showMobileNav && (
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-10">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                    </svg>)}
            </div>

            {/* Mobile Nav Menu */}
            {showMobileNav && (
                <div className={"fixed top-0 right-0 flex flex-col items-center md:hidden bg-red-500 rounded-bl-2xl"}>
                    <div onClick={() => setShowMobileNav(prev => (!prev))} 
                        className="px-11"
                        aria-label="Toggle navigation menu">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-10">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
                        </svg>
                    </div>

                    <nav className={"flex flex-col"}>
                        {links.map((link) => (
                            <NavLink key={link.to} to={link.to} onClick={() => setShowMobileNav(false)} 
                            className="px-8 py-2 text-center font-bold"> 
                                {link.label}
                            </NavLink>))}
                    </nav>
                </div>
            )}
        </header>
    );
}

export default NavBar