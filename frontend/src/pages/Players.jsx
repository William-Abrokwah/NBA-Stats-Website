import Search from "../components/Search"

function Players() {
    return (
        <div className="mt-8">
            <h1 className="text-3xl font-bold mb-2">Select a Player</h1>
            <Search 
                placeholder={"Search for Players"}
            />
        </div>
    );
}

export default Players