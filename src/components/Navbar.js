import React from "react";
import { Link } from "react-router-dom";
import { Toolbar, CssBaseline, AppBar } from "@material-ui/core";
import "../styles/index.scss";

const Navbar = () => {
  return (
    <>
      <CssBaseline />
      <AppBar position="relative">
        <Toolbar className="nav__toolbar">
          <Link to="/">Pokedex</Link>
        </Toolbar>
      </AppBar>
    </>
  );
};

export default Navbar;
