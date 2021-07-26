import React from "react";
import { Button } from "@material-ui/core";
import { NavLink } from "react-router-dom";
import { Footerpage, Miniature, StyledButton } from "./styles";

function Footer() {
  return (
    <Footerpage>
      <NavLink to="cognitive_test">
        <StyledButton>
          <Miniature>
            <img src="../../icons/user.svg" />
          </Miniature>
          <label>Patient Data</label>
        </StyledButton>
      </NavLink>

      <NavLink to="oct_data">
        <StyledButton>
          <Miniature>
            <img src="../../icons/user.svg" />
          </Miniature>
          <label>OCT data</label>
        </StyledButton>
      </NavLink>
      <NavLink to="results">
        <StyledButton>
          <Miniature>
            <img src="../../icons/user.svg" />
          </Miniature>
          <label>Results Summary</label>
        </StyledButton>
      </NavLink>
    </Footerpage>
  );
}

export default Footer;
