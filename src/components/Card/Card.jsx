import React from "react";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import { Box } from "@material-ui/core";
import Typography from "@material-ui/core/Typography";

import "./Card.css";

const useStyles = makeStyles({
	root: {
		minWidth: 275,
		maxWidth: 350,
		margin: 10,
	},
	bullet: {
		display: "inline-block",
		margin: "0 2px",
		transform: "scale(0.8)",
	},
	title: {
		fontSize: 14,
	},
	pos: {
		marginBottom: 12,
	},
});

const PokemonCard = ({ pokemon }) => {
	const classes = useStyles();

	return (
		<div>
			<Box>
				<Card className={classes.root}>
					<CardActionArea>
						<Link
							to={`/pokemons/${pokemon.id}`}
							className="CardLink"
						>
							<CardContent>
								<Typography
									className={classes.title}
									color="textSecondary"
									gutterBottom
								>
									{pokemon.name.chinese}
								</Typography>
								<Typography variant="h5" component="h2">
									{pokemon.name.english}
								</Typography>
								<Typography
									className={classes.pos}
									color="textSecondary"
								>
									{pokemon.type}{" "}
								</Typography>
								<Typography variant="body2" component="p">
									{Object.keys(pokemon.base)}
									{Object.values(pokemon.base)}{" "}
								</Typography>
							</CardContent>
						</Link>
					</CardActionArea>
				</Card>
			</Box>
		</div>
	);
};

export default PokemonCard;
