import React from "react";
import { Link } from "react-router-dom";
import "font-awesome/css/font-awesome.min.css";
import "./Navbar.css";

const Navbar = () => {
	return (
		<nav className="navbar">
			<div className="nabvar-links">
				<Link to="/">Home</Link>
				<Link to="/Characters">Characters</Link>
			</div>
		</nav>
	);
};

export default Navbar;
