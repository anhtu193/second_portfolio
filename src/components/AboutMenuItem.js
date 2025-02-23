import classnames from "classnames";

function AboutMenuItem({ title, active, onClick }) {
	return (
		<div
			className={classnames("item", { active })}
			onClick={onClick}
		>
			<h2 className="title">{title}</h2>
		</div>
	);
}

export default AboutMenuItem;
