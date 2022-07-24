import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import CharacterDetails from "../../CharacterDetails/CharacterDetails";
import fondo_Bb from "../../../media/fondo_Bb.mp4";
import { getCharacter } from "../../../services/breakingBadApi";
import "./Character.css";

const Character = () => {
  const [character, setCharacter] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    console.log("ejecta la api");
    getCharacter(setCharacter, id);
  }, [setCharacter, id]);

  return (
    <div className="characterDetails-container">
      <video className="background-video" src={fondo_Bb} autoPlay loop muted />
      <div>
        <CharacterDetails character={character} />
      </div>
    </div>
  );
};

export default Character;
