import { useSearchParams } from "react-router";
import Search from "../components/Search"

function Players() {
    const [searchParams] = useSearchParams();
    const position = searchParams.get("position");

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