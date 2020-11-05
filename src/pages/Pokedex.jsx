import React from "react";
import Card from "../components/Card/Card";

const Pokedex = ({ pokemonData, match }) => {
	const pokemonList = pokemonData
		.filter((pokemon) =>
			match.params.id
				? parseInt(match.params.id, 10) === pokemon.id
				: pokemon
		)
		.map((pokemon) => {
			return <Card pokemon={pokemon} key={pokemon.id} />;
		});

	return <div className="Pokedex">{pokemonList}</div>;
};

export default Pokedex;
