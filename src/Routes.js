import { useRoutes } from "react-router-dom";
import About from "./page/About";
import Contact from "./page/Contacts";
import Projects from "./page/Projects";
import Skills from "./page/Skills";
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
