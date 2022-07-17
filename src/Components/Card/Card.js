import React from "react";
import "./Card.css";
const Cards = () => {
	return (
		<div>
			<div className="cards">
				<img
					class="card__image"
					src="https://images.amcnetworks.com/amc.com/wp-content/uploads/2015/04/cast_bb_700x1000_walter-white-lg.jpg"
					alt=""
				/>
				<div class="card__content">
					<p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
					<p>
						Alias itaque praesentium eum, pariatur consequatur ducimus
						asperiores accusantium velit minima?
					</p>
				</div>
				<div class="card__info">
					<div>
						<i class="material-icons">thumb_up</i>310
					</div>
					<div>
						<a href="./" class="card__link">
							View Article
						</a>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Cards;
