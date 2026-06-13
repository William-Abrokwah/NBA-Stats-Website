import { Outlet } from "react-router";
import Navbar from "./Navbar.jsx"
import basketballCourt from "../assets/basketball_court.jpg"

function Layout() {
    return(
        <div>
            <img src={basketballCourt} alt="Basketball court" className="absolute opacity-30 w-full h-screen object-cover object-top"/>

            <div className="relative z-10 pt-4 max-w-7xl mx-auto">
                <Navbar />
                <div className="px-4 sm:px-8 md:px-12">
                    <Outlet/>
                </div>
            </div>
        </div>
    );
}

export default Layout