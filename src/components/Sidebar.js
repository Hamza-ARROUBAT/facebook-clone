import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { Group } from "@styled-icons/material/Group";
import { Group2 } from "@styled-icons/remix-line/Group2";

const NavList = styled.nav`
  display: grid;
  padding: 1em 0 0 0.5em;
  overflow-y: scroll;
  grid-template-rows: repeat(auto-fit, minmax(20px, min-content));
  height: 100%;

  align-items: center;

  a {
    text-decoration: none;
    color: black;
    display: grid;
    align-items: center;
    height: min-content;
    border-radius: 10px 0 0 10px;

    :hover {
      background: #f0f2f5;
    }
  }
`;

const ListItem = styled.div`
  display: grid;
  grid-template-columns: min-content auto;
  gap: 0 15px;
  align-items: center;
  padding: 0 0 0 0.5em;

  p {
    font-weight: 500;
  }

  svg {
    width: 30px;
    color: hsl(0, 0%, 60%);
  }
`;

const Avatar = styled.div`
  background-image: ${(props) =>
    props.imgUrl !== "" ? `url(${props.imgUrl})` : `gray`};
  background: gray;
  width: 30px;
  height: 30px;
  border-radius: 50%;
`;

function Sidebar() {
  return (
    <NavList>
      <Link>
        <ListItem>
          <Avatar imgUrl="" />
          <p>Hamza ARROUBAT</p>
        </ListItem>
      </Link>
      <Link>
        <ListItem>
          <Group />
          <p>Find Friends</p>
        </ListItem>
      </Link>
      <Link>
        <ListItem>
          <Group2 />
          <p>Groups</p>
        </ListItem>
      </Link>
    </NavList>
  );
}

export default Sidebar;
