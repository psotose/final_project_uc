import React from "react";
import { Link } from "react-router-dom";
import "font-awesome/css/font-awesome.min.css";
import "./Navbar.css";

const Navbar = () => {
	return (
		<nav className="navbar">
			<div className="nabvar-links">
				<Link to="/final_project_usach">Home</Link>
				<Link to="/Character">Character</Link>
			</div>
		</nav>
	);
};

export default Navbar;
