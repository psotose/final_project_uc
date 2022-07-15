import React from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";
import "font-awesome/css/font-awesome.min.css";
import icon_bb from "../../media/icon_Bb.png";
const Navbar = () => {
	return (
		<nav className="navbar">
			<div className="navbar-logo">
				<Link to="/">
					<img className="logo" src={icon_bb} alt="logo" />
				</Link>
			</div>
			<div className="menu-nav">
				<Link to="/">Home</Link>
				<Link to="/Characters">Characters</Link>
			</div>
		</nav>
	);
};

export default Navbar;
