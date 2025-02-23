import classnames from "classnames";

function AboutSubHeading({ title, content, active, onClick, menuItem }) {
	const subContainerClass = `sub-container-${menuItem}`;

	return (
		<div
			className={classnames(subContainerClass, {
				"active-subheading": active,
			})}
		>
			<h3 onClick={onClick}>{title}</h3>
			<div className="p-container">{content}</div>
		</div>
	);
}

export default AboutSubHeading;
