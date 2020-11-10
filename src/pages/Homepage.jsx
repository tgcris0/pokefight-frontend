import React from "react";
import Background from '../image/bgtwo.jpg';
import { Button } from '@material-ui/core';


/// Goeran Background

const sectionStyle = {
	width: "100%",
	height: "900px",
	backgroundImage: `url(${Background})`
  };

const Homepage = () => {
	return (
		<div>
		<Button variant="outlined">Change the ARENA</Button>
         <section style={ sectionStyle }>
      </section>
      </div>
	);
};

export default Homepage;
