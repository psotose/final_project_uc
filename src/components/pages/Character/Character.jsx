import React from "react";
import CharacterDetails from "../../CharacterDetails/CharacterDetails";
import fondo_Bb from "../../../media/fondo_Bb.mp4";
import "./Character.css";
const Character = () => {
	return (
		<div className="characterDetails-container">
			<video className="background-video" src={fondo_Bb} autoPlay loop muted />
			<div>
				<CharacterDetails />
			</div>
		</div>
	);
};

export default Character;
