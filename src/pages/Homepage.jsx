import React from "react";

import Card from "../components/Card/Card";
import { Box } from "@material-ui/core";
import { Grid } from "@material-ui/core";

const Homepage = ({ pokemonData }) => {
	const shuffled = pokemonData.sort(() => 0.5 - Math.random());
	const selected = shuffled.slice(0, 3);

	return (
		<div className="Homepage">
			<Grid container spacing={3}>
				<Grid item xl={6}>
					<Box className="PlayerBox PlayerOneCards">
						{selected.length >= 1 &&
							selected.map((pokemon, index) => (
								<Card pokemon={pokemon} key={pokemon.id} />
							))}
					</Box>
				</Grid>
				<Grid item xl={6}>
					<Box className="PlayerBox PlayerTwoCards">
						{selected.length >= 1 &&
							selected.map((pokemon, index) => (
								<Card pokemon={pokemon} key={pokemon.id} />
							))}
					</Box>
				</Grid>
			</Grid>
		</div>
	);
};

export default Homepage;
