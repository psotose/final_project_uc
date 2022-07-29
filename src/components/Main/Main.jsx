import { React, useEffect, useState } from "react";
import { getCharacters } from "../../services/breakingBadApi";
import Card from "../Card/Card";

const INITIAL_PAGE = 0;

const Home = () => {
	const [characters, setCharacters] = useState(null);
	const [page, setPage] = useState(INITIAL_PAGE);

	const handleNextPage = () => setPage((currentPage) => currentPage + 1);
	const handlePrevPage = () => setPage((currentPage) => currentPage - 1);

	useEffect(() => {
		getCharacters(setCharacters, page);
	}, [page]);

	useEffect(() => {
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
			<div className="container__buttons">
				<button className="container__button" onClick={handlePrevPage}>
					&nbsp; ◀&nbsp; Anterior &nbsp;
				</button>
				<button className="container__button" onClick={handleNextPage}>
					&nbsp; Siguiente &nbsp;▶ &nbsp;
				</button>
			</div>
		</div>
	);
};

export default Home;
