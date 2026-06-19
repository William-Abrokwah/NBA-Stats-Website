import Search from "../components/Search"

function Positions() {
    return (
        <div className="mt-8">
            <h1 className="text-3xl font-bold mb-2">Select a Position</h1>
            <Search 
                placeholder={"Search for Positions"}
            />
        </div>
    );
}

export default Positions