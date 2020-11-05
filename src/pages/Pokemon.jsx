import React from "react";
import Card from "../components/Card/Card";

const Pokemon = ({ pokemonData, match }) => {
	const pokemonId = match.params.id;

	return (
		<div claaName="Pokemon">
			{pokemonData &&
				pokemonData
					.filter((pokemon) => parseInt(pokemonId) === pokemon.id)
					.map((pokemon) => {
						return <Card pokemon={pokemon} />;
					})}
		</div>
	);
};

export default Pokemon;
