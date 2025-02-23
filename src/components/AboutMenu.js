import React, { Component } from "react";
import personalIcon from "../assets/moebius-triangle.png";
import careerIcon from "../assets/triple-corn.png";
import educationIcon from "../assets/upgrade.png";
import AboutMenuItem from "../components/AboutMenuItem";
import AboutSubHeading from "../components/AboutSubHeading";
import subHeadingData from "../data/subHeadingData";
import "../styles/aboutMenu.css";

class AboutMenu extends Component {
	constructor(props) {
		super(props);
		this.state = {
			activeMenuItem: 1,
			activeSubheading: 1,
		};
	}

	handleMenuItemClick = (menuItem) => {
		this.setState({
			activeMenuItem: menuItem,
			activeSubheading: 1,
		});
	};

	handleSubHeadingClick = (subheading) => {
		this.setState({
			activeSubheading: subheading,
		});
	};

	render() {
		const { activeMenuItem, activeSubheading } = this.state;
		const menuItems = ["PERSONAL", "EDUCATION", "CAREER"];
		const activeMenuTitle = menuItems[activeMenuItem - 1];
		const activeMenuIcon =
			activeMenuItem === "PERSONAL"
				? personalIcon
				: activeMenuTitle === "EDUCATION"
				? educationIcon
				: careerIcon;

		const subheadings = subHeadingData[activeMenuItem];
		return (
			<>
				<div className="menu">
					{menuItems.map((item, index) => (
						<AboutMenuItem
							key={index}
							title={item}
							active={activeMenuItem === index + 1}
							onClick={() => this.handleMenuItemClick(index + 1)}
						/>
					))}
				</div>
				<div className="sub-container">
					<div className="icon-title-container">
						<img
							src={activeMenuIcon}
							alt={activeMenuTitle}
							className="icon"
						/>
						<h3>{activeMenuTitle}</h3>
					</div>
					{subheadings.map((subheading, index) => (
						<AboutSubHeading
							key={index}
							title={subheading.title}
							content={subheading.content}
							active={activeSubheading === index + 1}
							onClick={() =>
								this.handleSubHeadingClick(index + 1)
							}
							menuItem={activeMenuItem}
						/>
					))}
				</div>
			</>
		);
	}
}

export default AboutMenu;
