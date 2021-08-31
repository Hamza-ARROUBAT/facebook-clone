import { FacebookCircle } from "@styled-icons/boxicons-logos/FacebookCircle";
import { Store } from "@styled-icons/boxicons-regular/Store";
import { DownArrow } from "@styled-icons/boxicons-solid/DownArrow";
import { FacebookMessenger } from "@styled-icons/fa-brands/FacebookMessenger";
import { SmartDisplay } from "@styled-icons/material-outlined/SmartDisplay";
import { Group } from "@styled-icons/material/Group";
import { Home } from "@styled-icons/material/Home";
import { Search } from "@styled-icons/material/Search";
import { Group2 } from "@styled-icons/remix-line/Group2";
import React from "react";
import { Link, NavLink } from "react-router-dom";
import styled from "styled-components";

const Nav = styled.nav`
  grid-column: 1/4;
  display: grid;
  grid-template-columns: 23% auto 23%;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 1px 3px;
  padding: 0 0.75em;
  h1 {
    margin: 0;
  }
  background: hsl(0, 0%, 100%);
`;

const LeftContainer = styled.div`
  display: grid;
  grid-template-columns: min-content min-content;
  align-items: center;
  gap: 0 5px;

  a {
    svg {
      width: 49px;
      color: #1877f2;
      cursor: pointer;
    }
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
      div {
        border-color: #1877f2;
        svg {
          color: #1877f2;

          :hover {
            background: none;
          }
        }
      }
    }
  }
`;

const IconContainer = styled.div`
  :hover {
    svg {
      background: #f0f2f5;
    }
  }
`;

const IconWrapper = styled.div`
  height: 100%;
  padding: 0.1em 0;
  border-bottom: 2.5px solid transparent;
  transition: border 0.2s;

  svg {
    width: 30px;
    padding: 0.6em 2.5em;
    cursor: pointer;
    border-radius: 10px;
    color: #909194;
    transition: background 0.15s;
  }
`;

const RightContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, min-content);
  gap: 10px;
  justify-content: end;
  align-items: center;

  div:last-of-type {
    svg {
      width: 15px;
      padding: 0.75em;
    }
  }

  a {
    text-decoration: none;
    color: black;
    font-weight: 500;
  }
`;

const AvatarContainer = styled.div`
  display: grid;
  grid-template-columns: min-content auto;
  align-items: center;
  gap: 0 5px;

  p {
    white-space: nowrap;
    margin: 0;
  }
  margin-right: 15px;
  padding: 0.2em 0;
  padding: 0.2em 0.8em 0.2em 0.2em;

  border-radius: 20px;

  :hover {
    background: rgba(0, 0, 0, 0.1);
  }
`;

const Avatar = styled.div`
  background-image: ${(props) =>
    props.imgUrl !== "" ? `url(${props.imgUrl})` : `gray`};
  background: gray;
  width: 28px;
  height: 28px;
  border-radius: 50%;
`;

const IconButton = styled.div`
  border-radius: 50%;

  svg {
    cursor: pointer;
    width: 20px;
    background: #e4e6eb;
    border-radius: 50%;
    padding: 0.6em;

    transition: background 0.2s;
  }

  :hover {
    svg {
      background: rgba(0, 0, 0, 0.15);
    }
  }
`;
function Navbar() {
  return (
    <Nav>
      <LeftContainer>
        <Link to="/home">
          <FacebookCircle />
        </Link>
        <SearchBar>
          <Search />
          <input type="text" placeholder="Search Facebook" />
        </SearchBar>
      </LeftContainer>

      <MiddleContainer>
        <StyledNavLink exact to="/" activeClassName="selected">
          <IconContainer>
            <IconWrapper>
              <Home />
            </IconWrapper>
          </IconContainer>
        </StyledNavLink>
        <StyledNavLink to="/friends" activeClassName="selected">
          <IconContainer>
            <IconWrapper>
              <Group />
            </IconWrapper>
          </IconContainer>
        </StyledNavLink>
        <StyledNavLink to="/watch" activeClassName="selected">
          <IconContainer>
            <IconWrapper>
              <SmartDisplay />
            </IconWrapper>
          </IconContainer>
        </StyledNavLink>
        <StyledNavLink to="/marketplace" activeClassName="selected">
          <IconContainer>
            <IconWrapper>
              <Store />
            </IconWrapper>
          </IconContainer>
        </StyledNavLink>
        <StyledNavLink to="/groups" activeClassName="selected">
          <IconContainer>
            <IconWrapper>
              <Group2 />
            </IconWrapper>
          </IconContainer>
        </StyledNavLink>
      </MiddleContainer>

      <RightContainer>
        <Link>
          <AvatarContainer>
            <Avatar />
            <p>Hamza</p>
          </AvatarContainer>
        </Link>
        <IconButton>
          <FacebookMessenger />
        </IconButton>
        <IconButton>
          <DownArrow />
        </IconButton>
      </RightContainer>
    </Nav>
  );
}

export default Navbar;
