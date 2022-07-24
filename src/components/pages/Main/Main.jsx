import { React, useEffect, useState } from "react";
import fondo_Walter from "../../../media/fondo_Walter.mp4";
import { getCharacters, getQuotes } from "../../../services/breakingBadApi";
import Card from "../Card/Card";
import "./Main.css";

const Home = () => {
  const [characters, setCharacters] = useState(null);
  const [quotes, setQuotes] = useState(null);

  useEffect(() => {
    getCharacters(setCharacters);
  }, []);

  useEffect(() => {
    getQuotes(setQuotes);
  }, []);

  return (
    <div className="container">
      <video
        className="background-video"
        src={fondo_Walter}
        autoPlay
        loop
        muted
      />
      <h1 className="container-title">Elije un personaje</h1>
      <div className="container-card">
        {characters?.map((character) => (
          <Card character={character} />
        ))}
      </div>
    </div>
  );
};

export default Home;
