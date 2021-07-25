import React from "react";
import { Button } from "@material-ui/core";
import { NavLink } from "react-router-dom";
import { Footerpage, Miniature } from "./styles";

function Footer() {
  return (
    <Footerpage>
      <NavLink to="/" end></NavLink>
      <Miniature>
        <img src="../../icons/user.svg" />
      </Miniature>
      <NavLink to="cognitive_test">Patient Data</NavLink>
      <NavLink to="oct_data">
        <Button variant="contained" color="primary" href="#contained-buttons">
          OCT data
        </Button>
      </NavLink>
      <NavLink to="results">
        <Button variant="contained" color="primary" href="#contained-buttons">
          Results Summary
        </Button>
      </NavLink>
    </Footerpage>
  );
}

export default Footer;
