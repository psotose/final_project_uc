import React from "react";
import "./Main.css";
import fondo_Walter from "../../../media/fondo_Walter.mp4";
const Home = () => {
	return (
		<div className="cover-container">
			<video
				className="background-video"
				src={fondo_Walter}
				autoPlay
				loop
				muted
			/>
			<h1 className="opacity-75">Home</h1>
		</div>
	);
};

export default Home;
