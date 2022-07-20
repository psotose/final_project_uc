import { React, useEffect, useState } from "react";
import { getCharacters, getQuotes } from "../../../services/breakingBadApi";
import "./Card.css";
const Card = () => {
	const [characters, setCharacters] = useState(null);
	const [quotes, setQuotes] = useState(null);

	useEffect(() => {
		getCharacters(setCharacters);
	}, []);

	useEffect(() => {
		getQuotes(setQuotes);
	}, []);

	return (
		<div className="card">
			<h1 className="card-name">Walter White</h1>
			<div className="card-content">
				<img
					className="card-content-img"
					src="https://s-i.huffpost.com/gen/1317262/images/o-ANNA-GUNN-facebook.jpg"
					alt="walter"
				/>
			</div>
		</div>
	);
};

export default Card;
