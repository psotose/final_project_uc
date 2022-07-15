import React from "react";
import "./Footer.css";
import { Link } from "react-router-dom";
import icon_bb from "../../media/black_icon.png";

const Footer = () => {
	return (
		<div className="footer">
			<div>
				<Link to="/">
					<img className="logo-footer" src={icon_bb} alt="logo" />
				</Link>
			</div>
			<div className="createdBy">Creado por Patricia Soto y Fabián Morales</div>
		</div>
	);
};

export default Footer;
