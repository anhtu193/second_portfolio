import { Link, useLocation } from "react-router-dom";
import astronautHelmet from "../assets/astronaut-helmet.png";
import deadEye from "../assets/dead-eye.png";
import envelope from "../assets/envelope.png";
import stack from "../assets/stack.png";
import "../styles/nav.css";
function Nav() {
	const location = useLocation();

	const getNavPositionClass = () => {
		switch (location.pathname) {
			case "/":
				return "nav-about";
			case "/skills":
				return "nav-skills";
			case "/projects":
				return "nav-projects";
			case "/contact":
				return "nav-contact";
			default:
				return "nav-about";
		}
	};

	const getPageTitle = () => {
		switch (location.pathname) {
			case "/":
				return "ABOUT";
			case "/skills":
				return "SKILLS";
			case "/projects":
				return "PROJECTS";
			case "/contact":
				return "CONTACT";
			default:
				return "ABOUT";
		}
	};

	const navPositionClass = getNavPositionClass();
	const pageTitle = getPageTitle();

	const isCurrentPage = (navClass) => {
		return navClass === navPositionClass;
	};

	const renderNavLink = (to, imgSrc, altText, navClass) => {
		const isCurrent = isCurrentPage(navClass);
		const linkClass = isCurrent ? "nav-link current" : "nav-link";

		return (
			<Link
				to={to}
				className={linkClass}
			>
				<img
					src={imgSrc}
					alt={altText}
				/>
				{isCurrent && <h1 className="page-title">{pageTitle}</h1>}
			</Link>
		);
	};

	return (
		<nav className={`nav ${navPositionClass}`}>
			{renderNavLink("/", astronautHelmet, "about", "nav-about")}
			{renderNavLink("/skills", deadEye, "skills", "nav-skills")}
			{renderNavLink("/projects", stack, "projects", "nav-projects")}
			{renderNavLink("/contact", envelope, "contact", "nav-contact")}
		</nav>
	);
}

export default Nav;
