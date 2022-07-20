import React from "react";
import fondo_Walter from "../../../media/fondo_Walter.mp4";
import "./Main.css";
import Card from "../Card/Card";

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
			<h1 className="container-title">Elije un personaje</h1>
			<div className="container-card">
				<Card />
				<Card />
				<Card />
				<Card />
				<Card />
				<Card />
				<Card />
				<Card />
				<Card />
				<Card />
				<Card />
				<Card />
			</div>
		</div>
	);
};

export default Home;
