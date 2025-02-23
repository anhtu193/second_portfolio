import { useRoutes } from "react-router-dom";
import About from "./page/About";
import Contact from "./page/Contact";
import Projects from "./page/Projects";
import Skills from "./page/Skills";
import "./styles/app.css";

const ProjectRoutes = () => {
	const routes = [
		{ path: "/", element: <About /> },
		{ path: "/skills", element: <Skills /> },
		{ path: "/projects", element: <Projects /> },
		{ path: "/contact", element: <Contact /> },
	];
	const element = useRoutes(routes);

	return element;
};

export default ProjectRoutes;
