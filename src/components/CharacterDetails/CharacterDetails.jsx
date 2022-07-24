import React from "react";
import "./CharacterDetails.css";

const CharacterDetails = ({ character }) => {
  return (
    <div className="character-container">
      <img src={character?.img} alt="" className="character-img" />
      <div className="character-details">
        <h1 className="character-name">{character?.name}</h1>
        <p className="character-desc">
          x nacio el su apodo es x y esta interpretado por el actor/actriz x
        </p>
        <p className="character-deaths">
          este personaje asesinó a x personajes
        </p>
        <p className="character-appearance">
          Este personaje aparecio en los siguientes caps y temporadas
        </p>
      </div>
    </div>
  );
};

export default CharacterDetails;
