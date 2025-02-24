import projectOne from "../assets/project-1.png";
import projectTwo from "../assets/project-2.png";
import projectThree from "../assets/project-3.png";

const projects = {
	1: {
		title: "Project 1",
		image: projectOne,
		description: (
			<>
				{" "}
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere
				magni dicta dolorum optio ad et nesciunt error ratione voluptate
				amet?
			</>
		),
		github: "https://github.com",
		demo: "https://netlify.com",
	},
	2: {
		title: "Project 2",
		image: projectTwo,
		description: (
			<>
				{" "}
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere
				magni dicta dolorum optio ad et nesciunt error ratione voluptate
				amet?
			</>
		),
		github: "https://github.com",
		demo: "https://netlify.com",
	},
	3: {
		title: "Project 3",
		image: projectThree,
		description: (
			<>
				{" "}
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere
				magni dicta dolorum optio ad et nesciunt error ratione voluptate
				amet?
			</>
		),
		github: "https://github.com",
		demo: "https://netlify.com",
	},
};

export default projects;
