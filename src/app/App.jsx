// react
import React, { useState, useEffect } from "react";
import { Switch, Route } from "react-router-dom";

// styles
import "../styles/app.css";

// pages
import Homepage from "../pages/Homepage";

// components
import Navbar from "../components/Navbar/Navbar";
import Pokedex from "../pages/Pokedex";
import Pokemon from "../pages/Pokemon";
import PokemonInfo from "../pages/PokemonInfo";

// app
const App = () => {
	const [pokemonData, setPokemonData] = useState([]);

	useEffect(() => {
		fetch("/pokemons")
			.then((res) => res.json())
			.then((data) => setPokemonData(data));
	}, []);

	return (
		<div className="App">
			<Navbar />
			<Switch>
				<Route
					path="/pokemons/:id/:type/:base?"
					render={(props) => (
						<PokemonInfo pokemonData={pokemonData} {...props} />
					)}
				/>
				<Route
					path="/pokemons/:id"
					render={(props) => (
						<Pokemon pokemonData={pokemonData} {...props} />
					)}
				/>
				<Route
					path="/pokemons"
					render={(props) => (
						<Pokedex pokemonData={pokemonData} {...props} />
					)}
				/>
				<Route
					path="/"
					render={(props) => (
						<Homepage pokemonData={pokemonData} {...props} />
					)}
				/>
			</Switch>
		</div>
	);
};

// export
export default App;
