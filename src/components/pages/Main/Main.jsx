import React from "react";
import bg_Walter from "../../../media/fondo_Walter.mp4";
import "./Main.css";

const Home = () => {
	return (
		<div className="cover-container">
			<video
				className="background-video"
				src={bg_Walter}
				autoPlay
				loop
				muted
			/>
		</div>
	);
};

export default Home;
