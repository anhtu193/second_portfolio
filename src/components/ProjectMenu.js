import classnames from "classnames";
import React, { Component } from "react";
import projects from "../data/projectsData";
import "../styles/projectMenu.css";

export default class ProjectMenu extends Component {
	constructor(props) {
		super(props);
		this.state = {
			activeProject: 1,
		};
	}

	handleProjectClick = (project) => {
		this.setState({
			activeProject: project,
		});
	};

	renderContent = (projects) => {
		return projects.map((project, index) => (
			<div
				key={index}
				className={`project-sub-container-${index + 1}`}
			>
				<h3>{project.title}</h3>
				<img
					src={project.image}
					alt={project.title}
				/>
				<p>{project.description}</p>
				<div className="link-container">
					<a
						href={project.github}
						target="_blank"
						rel="noopener noreferrer"
					>
						GITHUB
					</a>
					{project.demo !== "" ? (
						<a
							href={project.demo}
							target="_blank"
							rel="noopener noreferrer"
						>
							DEMO
						</a>
					) : (
						<></>
					)}
				</div>
			</div>
		));
	};

	render() {
		const { activeProject } = this.state;
		const projectItems = [
			"PORTFOLIO",
			"TRUEDRIVE",
			"INSTALITE",
			"BEATWAVE",
		];
		return (
			<div className="project-menu">
				<div className="project-items-container">
					{projectItems.map((item, index) => (
						<div
							key={index}
							className={classnames("project-item", {
								activeProject: activeProject === index + 1,
							})}
							onClick={() => this.handleProjectClick(index + 1)}
						>
							<h2 className="title">{item}</h2>
						</div>
					))}
				</div>
				<div className="project-sub-container">
					{this.renderContent([projects[activeProject]])}
				</div>
			</div>
		);
	}
}
