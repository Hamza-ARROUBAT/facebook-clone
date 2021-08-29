import React from "react";
import { MoreHorizontal } from "@styled-icons/evaicons-solid/MoreHorizontal";
import styled from "styled-components";

const Container = styled.div`
  display: grid;
`;

const Header = styled.div`
  display: grid;
  grid-template-columns: min-content auto min-content;
  grid-template-rows: min-content min-content;
  grid-template-areas:
    "Avatar NameText MoreHorizontal"
    "Avatar DateText MoreHorizontal";
  align-items: end;
  gap: 2.5px 10px;

  svg {
    grid-area: MoreHorizontal;
    width: 20px;
    color: hsl(0, 0%, 30%);
  }
`;

const Avatar = styled.div`
  grid-area: Avatar;
  background-image: ${(props) =>
    props.imgUrl !== "" ? `url(${props.imgUrl})` : `gray`};
  background: gray;
  width: 30px;
  height: 30px;
  border-radius: 50%;
`;

const NameText = styled.p`
  grid-area: NameText;
  font-size: 0.8rem;
  font-weight: 500;
  margin: 0;
`;

const DateText = styled.p`
  grid-area: DateText;
  font-size: 0.7rem;
  margin: 0;
  color: hsl(0, 0%, 50%);
`;

function Post() {
  return (
    <Container>
      <Header>
        <Avatar />
        <NameText>Hamza ARROUBAT</NameText>
        <DateText>August 29 at 11:45 AM</DateText>
        <MoreHorizontal />
      </Header>
    </Container>
  );
}

export default Post;
