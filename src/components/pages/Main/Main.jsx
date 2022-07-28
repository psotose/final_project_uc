import { React, useEffect, useState } from "react";
import { getCharacters, getQuotes } from "../../../services/breakingBadApi";
import Card from "../Card/Card";

const INITIAL_PAGE = 0;

const Home = () => {
	const [characters, setCharacters] = useState(null);
	const [page, setPage] = useState(INITIAL_PAGE);
	const [quotes, setQuotes] = useState(null);
	const handleNextPage = () => setPage((currentPage) => currentPage + 1);
	const handlePrevPage = () => setPage((currentPage) => currentPage - 1);

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
			<h1 className="container__title">Elije un personaje</h1>
			<div className="container__card">
				{characters?.map((character) => (
					<Card character={character} />
				))}
			</div>
			<div className="buttons">
				<button className="container__button" onClick={handlePrevPage}>
					{" "}
					&nbsp; ◀Anterior &nbsp;
				</button>
				<button className="container__button" onClick={handleNextPage}>
					{" "}
					&nbsp; Siguiente▶ &nbsp;
				</button>
			</div>
		</div>
	);
};

export default Home;
