import React from "react";
import fondo_Walter from "../../media/fondo_Walter.mp4";

const Home = () => {
	return (
		<div className="container-video">
			<video
				className="container-video__bg-video"
				src={fondo_Walter}
				autoPlay
				loop
				muted
			/>
			<h1 className="container-video__title">Breaking Bad Info</h1>
			<p className="container-video__description">
				Serie de televisión estadounidense que narra la historia de Walter
				White, un profesor de química con problemas económicos a quien le
				diagnostican un cáncer de pulmón inoperable. Para pagar su tratamiento y
				asegurar el futuro económico de su familia, comienza a cocinar y vender
				metanfetamina, junto a Jesse Pinkman, un ex alumno suyo.
			</p>
		</div>
	);
};

export default Home;
