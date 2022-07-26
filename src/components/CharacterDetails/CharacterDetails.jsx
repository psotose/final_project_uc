import React from "react";

const CharacterDetails = ({ character }) => {
	return (
		<div className="character">
			<img src={character?.img} alt="" className="character__img" />
			<div className="character__details">
				<h1 className="character__name">{character?.name}</h1>
				<p className="character__desc character__p">
					{character?.name} nació el {character?.birthday} su apodo es{" "}
					{character?.nickname} y esta interpretado por el actor/actriz{" "}
					{character?.portrayed}
				</p>
				<p className="character__deaths character__p">
					{character?.name} asesinó a x personajes
				</p>
				<p className="character__appearance character__p">
					Este personaje aparecio en los siguientes caps y temporadas
				</p>
			</div>
		</div>
	);
};

export default CharacterDetails;
