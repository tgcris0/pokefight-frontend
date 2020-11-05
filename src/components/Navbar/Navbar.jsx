import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
	return (
		<div>
			<NavLink id="navmenu" to="/">
				Home
			</NavLink>
			<NavLink id="navmenu" to="/pokemons">
				Pokedex
			</NavLink>
		</div>
	);
};

export default Navbar;
