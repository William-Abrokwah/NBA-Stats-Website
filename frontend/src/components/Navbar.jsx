import { NavLink, useLocation } from "react-router";
import { useEffect, useState } from "react";
import basketballNet from "../assets/basketball-net.svg"

const links = [
    { to: "/", label: "Home" },
    { to: "/teams", label: "Teams" },
    { to: "/positions", label: "Positions" },
    { to: "/players", label: "Players" }
];

function NavBar() {
    const [mobileOpen, setMobileOpen] = useState(false);
    const location = useLocation();

    // Close menu whenever navigation occurs
    useEffect(() => {
        setMobileOpen(false);
    }, [location.pathname]);

    // Prevent background scrolling
    useEffect(() => {
        document.body.style.overflow = mobileOpen ? "hidden" : "";
    }, [mobileOpen]);

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
                {links.map((link) => (
                    <NavLink key={link.to} to={link.to} 
                        className={({ isActive }) => 
                            isActive ? "text-orange-400 font-bold" : "hover:text-orange-300"}
                    > 
                        {link.label} 
                    </NavLink>))}
            </nav>

            {/* Mobile Hamburger */}
            <button
                onClick={() => setMobileOpen(prev => (!prev))} 
                className="md:hidden"
                aria-label="Toggle navigation menu"
                aria-expanded={mobileOpen}
            >
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-10">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                </svg>
            </button>

            {/* Mobile Nav Menu */}
            <div className={`fixed inset-0 z-50 md:hidden transition-opacity ${
                mobileOpen
                    ? "pointer-events-auto opacity-100" 
                    : "pointer-events-none opacity-0"
                }`}
            >
                {/* Backdrop */}
                <div className="absolute inset-0 bg-black/40"
                onClick={() => setMobileOpen(false)} />
                
                {/* Drawer */}
                <nav className={`absolute right-0 top-0 h-full w-72 bg-white shadow-xl transition-transform duration-300 
                    ${mobileOpen ? "translate-x-0" : "translate-x-full"}`}
                >   
                    {/* X */}
                    <div className="flex justify-end px-4">
                        <button
                        className="text-orange-400"
                            onClick={() => setMobileOpen(false)} 
                            aria-label="Close navigation menu"
                        >
                            <svg  xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-10">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
                            </svg>
                        </button>
                    </div>

                    <div className={"flex flex-col"}>
                        {links.map((link) => (
                            <NavLink key={link.to} to={link.to}
                            className={({ isActive }) => `text-orange-400 px-8 py-2 text-center font-bold transition-colors ${
                                isActive
                                    ? "bg-orange-100 text-orange-400 font-semibold"
                                    : "text-black hover:bg-orange-100 hover:text-orange-400"
                            }`}> 
                                {link.label}
                            </NavLink>
                        ))}
                    </div>
                </nav>
            </div>
        </header>
    );
}

export default NavBar