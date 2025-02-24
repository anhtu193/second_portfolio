import { BrowserRouter as Router } from "react-router-dom";
import Background from "./components/Background";
import Contact from "./components/Contact";
import Nav from "./components/Nav";
import PlayerStat from "./components/PlayerStats";
import Routes from "./Routes";
import "./styles/app.css";

function App() {
	return (
		<>
			<Router>
				<Nav />
				<Background />
				<Routes />
				<PlayerStat />
				<Contact />
			</Router>
		</>
	);
}

export default App;
