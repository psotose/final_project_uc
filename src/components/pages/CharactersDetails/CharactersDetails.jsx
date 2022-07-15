import { React, useEffect, useState } from "react";
import { getCharacters, getQuotes } from "../../../services/breakingBadApi";

const CharactersDetails = () => {
  const [characters, setCharacters] = useState(null);
  const [quotes, setQuotes] = useState(null);
  
  useEffect(() => {
    getCharacters(setCharacters)
  }, []);

  useEffect(() => {
    getQuotes(setQuotes)
  }, []);
  
	return <div></div>;
};

export default CharactersDetails;
