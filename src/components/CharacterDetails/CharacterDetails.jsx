import React from "react";
import img404 from "../../media/error404.png";

const CharacterDetails = ({ character}) => {
	return (
		<div className="character">
			<img src={character?.img ? character.img : img404} alt="" className="character__img" />
			<div className="character__details">
				<h1 className="character__name">{character?.name}</h1>
				<p className="character__desc character__p">
					Nació el {character?.birthday} su apodo es {character?.nickname} y
					esta interpretado por el actor/actriz {character?.portrayed}. Su
					ocupación es {character?.occupation[0]}. Al final de la serie el
					personaje está {character?.status}
				</p>
				<p className="character__appearance character__p">
					{character?.appearance
						? `Este personaje apareció en ${character?.appearance.length} temporadas.`
						: ""}
				</p>
			</div>
		</div>
	);
};

export default CharacterDetails;
