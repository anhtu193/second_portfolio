import PropTypes from "prop-types";
import avatarImage from "../assets/avatar-image.png";
import "../styles/avatar.css";

function Avatar({ page }) {
	const avatarClass = `avatar ${page}`;
	const spanClass = `shadow-overlay-${page}`;
	return (
		<>
			<span className={spanClass}></span>
			<img
				src={avatarImage}
				alt="playerImage"
				className={avatarClass}
			/>
		</>
	);
}

Avatar.propTypes = {
	page: PropTypes.string.isRequired,
};

export default Avatar;
