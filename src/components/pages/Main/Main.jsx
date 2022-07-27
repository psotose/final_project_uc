import { React, useEffect, useState } from "react";
import fondo_Walter from "../../../media/fondo_Walter.mp4";
import { getCharacters, getQuotes } from "../../../services/breakingBadApi";
import Card from "../Card/Card";

const INITIAL_PAGE = 0;

const Home = () => {
	const [characters, setCharacters] = useState(null);
	const [page, setPage] = useState(INITIAL_PAGE);
	const [quotes, setQuotes] = useState(null);
	const handleNextPage = () => setPage((prevPage) => prevPage + 1);

	useEffect(() => {
		getCharacters(setCharacters, page);
	}, [page]);

	useEffect(() => {
		getQuotes(setQuotes);
	}, []);

	useEffect(() => {
		console.log(characters, characters?.length);
		if (characters?.length === 0) {
			setPage(INITIAL_PAGE);
		}
	}, [characters]);

	return (
		<div className="container">
			<video
				className="container__bg-video"
				src={fondo_Walter}
				autoPlay
				loop
				muted
			/>
			<h1 className="container__title">Elije un personaje</h1>
			<div className="container__card">
				{characters?.map((character) => (
					<Card character={character} />
				))}
			</div>
			<button className="container__button" onClick={handleNextPage}>
				{" "}
				Siguiente página{" "}
			</button>
		</div>
	);
};

export default Home;
