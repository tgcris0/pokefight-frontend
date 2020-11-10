import React from "react";
import Card from "../components/Card/Card";


const Pokemon = ({ pokemonData, match }) => {
	const pokemonId = match.params.id;

	return (
		<div className="Pokemon">
			{pokemonData &&
				pokemonData
					.filter((pokemon) => parseInt(pokemonId) === pokemon.id)
					.map((pokemon) => {
						return <Card pokemon={pokemon} key={pokemon.id} />;
					})}
		</div>
	);
};

export default Pokemon;
