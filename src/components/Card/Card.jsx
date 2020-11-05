import React from "react";
import { Link } from "react-router-dom";

const Card = ({ pokemon }) => {
	return (
		<div className="Card">
			<h2>
				<Link to={`/pokemons/${pokemon.id}`}>
					{pokemon.name.english}
				</Link>
			</h2>
			<p>{pokemon.name.chinese}</p>
			<p>
				<Link to={`/pokemons/${pokemon.id}/${pokemon.type}`}>
					See details
				</Link>{" "}
				for this pokemon
			</p>
		</div>
	);
};

export default Card;
