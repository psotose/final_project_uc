import React from "react";
import "./CharacterDetails.css";
const CharacterDetails = () => {
	return (
		<div className="character-container">
			<img
				src="https://vignette.wikia.nocookie.net/breakingbad/images/9/95/JesseS5.jpg"
				alt=""
				className="character-img"
			/>
			<div className="character-details">
				<h1 className="charcacter-name">name</h1>
				<p className="charcacter-desc">
					x nacio el su apodo es x y esta interpretado por el actor/actriz x
				</p>
				<p className="charcacter-deaths">
					este personaje asesinó a x personajes
				</p>
				<p className="charcacter-appearance">
					Este personaje aparecio en los siguientes caps y temporadas
				</p>
			</div>
		</div>
	);
};

export default CharacterDetails;
