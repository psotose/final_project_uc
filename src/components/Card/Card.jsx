import { React } from "react";
import { Link } from "react-router-dom";
import img404 from "../../media/error404.png"; 
 
const Card = ({ character }) => {
	return (
		<Link to={"/Character/" + character.char_id}>
			<div className="card">
				<h1 className="card__name">{character.name}</h1>
				<div className="card__content">
					<img
						className="card__img"
						src={character.img ? character.img : img404 }
						alt="imagebreaking bad"
					/>
				</div>
			</div>
		</Link>
	);
};

export default Card;
