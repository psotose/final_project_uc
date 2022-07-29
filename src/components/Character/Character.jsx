import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import CharacterDetails from "../CharacterDetails/CharacterDetails";
import { getCharacter } from "../../services/breakingBadApi";

const Character = () => {
	const [character, setCharacter] = useState(null);
	const { id } = useParams();

	useEffect(() => {
		getCharacter(setCharacter, id);
	}, [setCharacter, id]);

	return (
		<div className="characterDetails">
			<CharacterDetails character={character} />
		</div>
	);
};

export default Character;
