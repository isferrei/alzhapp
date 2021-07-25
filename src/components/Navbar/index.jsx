import React from "react";
import { Card } from "./styles";
import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <Card>
      <NavLink to="/" end>
        AlzhApp
      </NavLink>
    </Card>
  );
}

export default Navbar;
