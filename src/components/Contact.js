import facebookIcon from "../assets/facebook.png";
import githubIcon from "../assets/github.png";
import instagramIcon from "../assets/instagram.png";
import linkedinIcon from "../assets/linkedin.png";
import "../styles/contact.css";

function Contact() {
	return (
		<div id="contact">
			<a
				href="https://www.linkedin.com/in/anhtu193/"
				target="_blank"
				rel="noopener noreferrer"
			>
				<img
					src={linkedinIcon}
					alt="LinkedIn icon"
					className="social-icon"
				/>
			</a>
			<a
				href="https://github.com/anhtu193"
				target="_blank"
				rel="noopener noreferrer"
			>
				<img
					src={githubIcon}
					alt="Github icon"
					className="social-icon instagram"
				/>
			</a>
			<a
				href="https://www.facebook.com/latenight.tu"
				target="_blank"
				rel="noopener noreferrer"
			>
				<img
					src={facebookIcon}
					alt="Facebook icon"
					className="social-icon"
				/>
			</a>
			<a
				href="https://www.instagram.com/_latenight.tu/"
				target="_blank"
				rel="noopener noreferrer"
			>
				<img
					src={instagramIcon}
					alt="Instagram icon"
					className="social-icon"
				/>
			</a>
		</div>
	);
}

export default Contact;
