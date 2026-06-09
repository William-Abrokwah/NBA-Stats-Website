import { NavLink } from "react-router";

function NavBar() {
    return (
        <div>
            <h1>Navbar</h1>
            <nav>
                <NavLink to="/">Home</NavLink>
                <span> | </span>
                <NavLink to="/teams">Teams</NavLink>
                <span> | </span>
                <NavLink to="/positions">Positions</NavLink>
                <span> | </span>
                <NavLink to="/search">Search</NavLink>
                <span> | </span>
            </nav>
        </div>
    );
}

export default NavBar