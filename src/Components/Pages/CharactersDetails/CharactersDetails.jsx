import React from "react";
import "./CharactersDetails.css";
import fondo_Bb from "../../../media/fondo_Bb.mp4";
const CharactersDetails = () => {
	return (
		<div className="container">
			<video className="background-video" src={fondo_Bb} autoPlay loop muted />
			<h1 className="opacity-75">Home</h1>
		</div>
	);
};

export default CharactersDetails;
