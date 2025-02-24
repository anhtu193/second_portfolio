import projectOne from "../assets/project-1.png";
import projectTwo from "../assets/project-2.png";
import projectThree from "../assets/project-3.png";
import projectFour from "../assets/project-4.png";

const projects = {
	1: {
		title: "Portfolio Website",
		image: projectOne,
		description: (
			<>
				A personal portfolio website built with HTML, CSS, and
				JavaScript to showcase my skills, projects, and experience. It
				features a responsive design, smooth animations, and an
				interactive UI for a seamless user experience.
			</>
		),
		github: "https://github.com/anhtu193/first_portfolio",
		demo: "https://tuanh-portfolio.netlify.app/",
	},
	2: {
		title: "TrueDrive",
		image: projectTwo,
		description: (
			<>
				A web app for car showrooms to showcase vehicles, manage
				appointments, and engage customers. Users can browse, compare
				cars, book test drives, and manage wishlists. Built with .NET 8,
				React, TypeScript, and SQL Server for a seamless user
				experience.
			</>
		),
		github: "https://github.com/anhtu193/truedrive_frontend",
		demo: "",
	},
	3: {
		title: "Instalite",
		image: projectThree,
		description: (
			<>
				A social media platform that helps users create better posts
				with AI-powered summarization and HTTP Live Streaming (HLS).
				Developed with Next.js, NestJS for a seamless user experience
				and real-time interactions.
			</>
		),
		github: "https://github.com/hungcqa23/instalite",
		demo: "",
	},
	4: {
		title: "Beatwave",
		image: projectFour,
		description: (
			<>
				A desktop music player built with C# and .NET Framework,
				featuring playlist management, song search, volume control, and
				playback customization. Designed with a user-friendly UI for a
				seamless listening experience.
			</>
		),
		github: "https://github.com/anhtu193/Beatwave",
		demo: "https://drive.google.com/file/d/1_L9p9OzTlsviZsjcq-DpEiqFFTlSCvVo/view",
	},
};

export default projects;
