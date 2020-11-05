import React from "react";

const PokemonInfo = ({ pokemonData, match }) => {
	const pokemonId = match.params.id;
	return (
		<div className="PokemonInfo">
			{pokemonData &&
				pokemonData
					.filter((pokemon) => parseInt(pokemonId) === pokemon.id)
					.map((pokemon) => {
						return pokemon.base;
					})}
		</div>
	);
};

export default PokemonInfo;
