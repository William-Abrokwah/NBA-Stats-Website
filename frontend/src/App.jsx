import { BrowserRouter, Route, Routes} from "react-router"
import Layout from "./components/Layout"
import Home from "./pages/Home"
import Teams from "./pages/Teams"
import Positions from "./pages/Positions"
import Search from "./pages/Search"
import PlayerData from "./components/PlayerData"

function App() {
  return (
    <div className="flex h-screen items-center justify-center">
      <h1 className="text-4xl font-bold text-blue-600">
        Tailwind is working!
      </h1>
    </div>
    /*
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="teams" element={<Teams />} />
          <Route path="positions" element={<Positions />} />
          <Route path="search" element={<Search />} />
        </Route>
      </Routes>
    </BrowserRouter> */
  );
}

export default App
