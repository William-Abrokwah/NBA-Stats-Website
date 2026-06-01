import { Outlet } from "react-router";
import Navbar from "./Navbar.jsx"

function Layout() {
    return(
        <div>
            <Navbar />
            <div>
                <Outlet />
            </div>
        </div>
    );
}

export default Layout