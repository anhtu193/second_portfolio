import { BrowserRouter as Router } from "react-router-dom";
import Background from "./components/Background";
import Nav from "./components/Nav";
import Routes from "./Routes";
import "./styles/app.css";

function App() {
	return (
		<>
			<Router>
				<Nav />
				<Background />
				<Routes />
			</Router>
		</>
	);
}

export default App;
