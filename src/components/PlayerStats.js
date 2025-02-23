import React from "react";
import "../styles/playerStats.css";

function PlayerStats() {
	return (
		<div id="playerStats">
			<h1>LY THANH TU ANH</h1>
			<div id="playerStats__lines">
				<span id="playerStats__lines__thick"></span>
				<span id="playerStats__lines__thin"></span>
			</div>
			<h2>
				LEVEL 19
				<br />
				Front-end Developer
			</h2>
		</div>
	);
}

export default PlayerStats;
