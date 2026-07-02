import { BrowserRouter, Route, Routes} from "react-router"
import Layout from "./components/Layout"
import Home from "./pages/Home"
import Teams from "./pages/Teams"
import TeamDetails from "./pages/TeamDetails"
import Positions from "./pages/Positions"
import Players from "./pages/Players"
import PlayerDetails from "./pages/PlayerDetails"

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="teams" element={<Teams />} />
          <Route path="teams/:abbr" element={<TeamDetails />} />
          <Route path="positions" element={<Positions />} />
          <Route path="players" element={<Players />} />
          <Route path="players/:id" element={<PlayerDetails />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App
