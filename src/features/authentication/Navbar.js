import React from "react";
import styled from "styled-components";
import { FacebookCircle } from "@styled-icons/boxicons-logos/FacebookCircle";
import { Search } from "@styled-icons/material/Search";

import { Home } from "@styled-icons/material/Home";
import { Group } from "@styled-icons/material/Group";
import { SmartDisplay } from "@styled-icons/material-outlined/SmartDisplay";
import { Store } from "@styled-icons/boxicons-regular/Store";
import { Group2 } from "@styled-icons/remix-line/Group2";
import { Link, NavLink } from "react-router-dom";

const Nav = styled.nav`
  display: grid;
  grid-template-columns: min-content auto min-content;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 1px 3px;
  padding: 0 0.75em;
  height: 50px;
  h1 {
    margin: 0;
  }
`;

const LeftContainer = styled.div`
  display: grid;
  grid-template-columns: min-content min-content;
  align-items: center;
  gap: 0 5px;

  svg {
    width: 49px;
    color: #1877f2;
  }
`;

const SearchBar = styled.div`
  background: #f0f2f5;
  border-radius: 20px;
  display: grid;
  grid-template-columns: min-content auto;
  gap: 0 5px;
  align-items: center;

  width: 220px;
  padding: 0.5em 1.25em 0.5em 0.5em;

  svg {
    width: 25px;
    color: gray;
  }
  input {
    border: none;
    outline: none;
    background: none;
    font-size: 1rem;
  }
`;

const MiddleContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(5, min-content);
  place-content: center;
`;

const StyledNavLink = styled(NavLink)`
  &.selected {
    div {
      border-bottom: 2.5px solid #1877f2;
      svg {
        color: #1877f2;
      }
    }
  }
`;

const IconContainer = styled.div`
  svg {
    width: 30px;
    padding: 0.6em 2.5em;
    cursor: pointer;
    border-radius: 10px;
    color: #909194;
    transition: background 0.15s;
  }

  :hover {
    svg {
      background: #f0f2f5;
    }
  }
`;

function Navbar() {
  return (
    <Nav>
      <LeftContainer>
        <FacebookCircle />
        <SearchBar>
          <Search />
          <input type="text" />
        </SearchBar>
      </LeftContainer>

      <MiddleContainer>
        <StyledNavLink to="/home" activeClassName="selected">
          <IconContainer>
            <Home />
          </IconContainer>
        </StyledNavLink>
        <StyledNavLink to="/friends" activeClassName="selected">
          <IconContainer>
            <Group />
          </IconContainer>
        </StyledNavLink>
        <StyledNavLink to="/watch" activeClassName="selected">
          <IconContainer>
            <SmartDisplay />
          </IconContainer>
        </StyledNavLink>
        <StyledNavLink to="/market-place" activeClassName="selected">
          <IconContainer>
            <Store />
          </IconContainer>
        </StyledNavLink>
        <StyledNavLink to="/groups" activeClassName="selected">
          <IconContainer>
            <Group2 />
          </IconContainer>
        </StyledNavLink>
      </MiddleContainer>
    </Nav>
  );
}

export default Navbar;
