import React from "react";
import Background from '../image/bgtwo.jpg';
import { Button } from '@material-ui/core';


/// Goeran Background

const sectionStyle = {
	width: "100%",
	height: "900px",
	backgroundImage: `url(${Background})`
  };

import Card from "../components/Card/Card";
import { Box } from "@material-ui/core";
import { Grid } from "@material-ui/core";

const Homepage = ({ pokemonData }) => {
	const shuffled = pokemonData.sort(() => 0.5 - Math.random());
	const selected = shuffled.slice(0, 3);

	return (
		<div>
		<Button variant="outlined">Change the ARENA</Button>
         <section style={ sectionStyle }>
      </section>
      
      
      </div>
	);
};

export default Homepage;
