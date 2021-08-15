import SvgFacebook from "assets/images/svg/components/Facebook";
import React from "react";
import styled from "styled-components";

const Nav = styled.nav`
  display: grid;
  grid-template-columns: min-content 0fr;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  svg {
    width: 45px;
    height: 45px;
    background: crimson;
  }

  h1 {
    margin: 0;
  }
  background: red;
`;

function Navbar() {
  return (
    <Nav>
      <SvgFacebook />
      <h1>kek;</h1>
    </Nav>
  );
}

export default Navbar;
