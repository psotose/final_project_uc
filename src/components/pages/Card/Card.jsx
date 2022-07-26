import { React } from "react";
import { Link } from "react-router-dom";

const Card = ({ character }) => {
  return (
    <Link to={"/Character/" + character.char_id}>
      <div className="card">
        <h1 className="card__name">{character.name}</h1>
        <div className="card__content">
          <img className="card__img" src={character.img} alt="walter" />
        </div>
      </div>
    </Link>
  );
};

export default Card;
