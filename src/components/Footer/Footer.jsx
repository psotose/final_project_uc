import React from "react";
import { Link } from "react-router-dom";
import icon_bb from "../../media/black_icon.png";

const Footer = () => {
	return (
		<div className="footer">
			<div>
				<Link to="/final_project_usach">
					<img className="footer-logo" src={icon_bb} alt="logo" />
				</Link>
			</div>
			<div className="footer-createdBy">Creado por Patricia Soto y Fabián Morales</div>
		</div>
	);
};

export default Footer;
