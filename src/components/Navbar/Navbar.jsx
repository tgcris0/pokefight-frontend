import * as React from "react";
import {
  AppBar,
  Toolbar,
  IconButton,
  List,
  ListItem,
  ListItemText,
  Container
} from "@material-ui/core";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import pokemonlogo from "./pokemonlogo.jpg";
import  "./Navbar.css"

const useStyles = makeStyles({
  navbarDisplayFlex: {
    display: `flex`,
    justifyContent: `space-between`
  },
  navDisplayFlex: {
    display: `flex`,
    justifyContent: `space-between`
  },
  linkText: {
    textDecoration: `none`,
    textTransform: `uppercase`,
    color: `white`
  }
});

const navLinks = [
  { title: `Home`, path: `/`},	
  { title: `Pokedex`, path: `/pages/Pokedex` },
  { title: `Pokemon`, path: `/pages/Pokemon` },
  
 ];

const Navbar = () => {
  const classes = useStyles();

  return (
    <AppBar className="navbar1">
      <Toolbar>
        <Container maxWidth="md" className={classes.navbarDisplayFlex}> 
		<Link id="link-home" to="/">
			<img className="pokemonlogo" src={pokemonlogo} alt="pokemon-icon" />
		</Link>	
          <List
            component="nav"
            aria-labelledby="main navigation"
            className={classes.navDisplayFlex}
          >
            {navLinks.map(({ title, path }) => (
              <a href={path} key={title} className={classes.linkText}>
                <ListItem button>
                  <ListItemText primary={title} />
                </ListItem>
              </a>
            ))}
          </List>
        </Container>
      </Toolbar>
    </AppBar>
  );
};
export default Navbar;
