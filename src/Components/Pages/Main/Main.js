import React from "react";
import "./Main.css";
import fondo_Walter from "../../../media/fondo_Walter.mp4";
import Card from "../../Card/Card";
const Home = () => {
	return (
		<div className="container">
			<video
				className="background-video"
				src={fondo_Walter}
				autoPlay
				loop
				muted
			/>
			<h1 className="title">Elije un personaje m</h1>
			<div class="cards">
				<Card />
				<Card />
				<Card />
				<Card />
			</div>
		</div>
	);
};

export default Home;
