import React, { useState } from "react";
import { MoreHorizontal } from "@styled-icons/evaicons-solid/MoreHorizontal";
import { Like as FilledLike } from "@styled-icons/boxicons-solid/Like";
import { Like as RegularLike } from "@styled-icons/boxicons-regular/Like";
import { Comment as RegularComment } from "@styled-icons/octicons/Comment";
import styled from "styled-components";
import facebookGif from "assets/images/facebook.gif";

const Container = styled.div`
  display: grid;
  gap: 10px 0;
  box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.2);
  border-radius: 5px;
  width: 552px;
  padding: 1em 0;
`;

const Header = styled.div`
  padding: 0 1em;
  display: grid;
  grid-template-columns: min-content auto min-content;
  grid-template-rows: min-content min-content;
  grid-template-areas:
    "Avatar NameText MoreHorizontal"
    "Avatar DateText MoreHorizontal";
  align-items: center;
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
  width: 35px;
  height: 35px;
  border-radius: 50%;
`;

const NameText = styled.p`
  grid-area: NameText;
  font-size: 0.9rem;
  font-weight: 500;
  margin: 0;
`;

const DateText = styled.p`
  grid-area: DateText;
  font-size: 0.8rem;
  margin: 0;
  color: hsl(0, 0%, 50%);
`;

const TextContainer = styled.div`
  padding: 0 1em;
  p {
    word-break: break-all;
  }
`;

const ImgContainer = styled.div`
  display: grid;
  img {
    width: 100%;
  }
`;

const Footer = styled.div`
  display: grid;
  gap: 10px 0;
  padding: 0 1em;
`;

const CommentsContainer = styled.div`
  display: grid;
  grid-template-columns: min-content max-content auto;
  align-items: center;
  gap: 0 10px;

  svg {
    width: 12.5px;
    color: white;
    border-radius: 50%;
    background: hsl(214, 89%, 52%);
    padding: 0.2em;
  }
  p {
    margin: 0;
    font-size: 1rem;
    color: hsl(0, 0%, 45%);
    cursor: pointer;

    :hover {
      text-decoration: underline;
    }
  }
  p:last-of-type {
    justify-self: end;
  }
`;

const HSeparator = styled.div`
  background: rgba(0, 0, 0, 0.1);
  width: 100%;
  height: 1px;
  margin: 0 auto;
`;

const ButtonsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  align-items: center;
`;
const Button = styled.div`
  cursor: pointer;
  display: grid;
  grid-template-columns: min-content auto;
  align-items: center;
  justify-content: center;
  gap: 0 10px;
  border-radius: 10px;
  padding: 0.5em 1em;

  svg {
    width: 25px;
    color: hsl(0, 0%, 60%);
  }

  p {
    font-weight: 500;
    color: hsl(0, 0%, 35%);
    margin: 0;
  }

  transition: background 0.2s;
  :hover {
    background: rgba(0, 0, 0, 0.05);
  }
`;

function Post() {
  // eslint-disable-next-line
  const [commentsNumber, setCommentsNumber] = useState(0);

  return (
    <Container>
      <Header>
        <Avatar />
        <NameText>Hamza ARROUBAT</NameText>
        <DateText>August 29 at 11:45 AM</DateText>
        <MoreHorizontal />
      </Header>
      <TextContainer>
        <p>Facebook test !</p>
      </TextContainer>
      <ImgContainer>
        <img src={facebookGif} alt="" />
      </ImgContainer>
      <Footer>
        <CommentsContainer>
          <FilledLike />
          <p>25</p>
          {commentsNumber !== 0 && <p> {commentsNumber} Comments</p>}
        </CommentsContainer>
        <HSeparator />
        <ButtonsContainer>
          <Button>
            <RegularLike />
            <p>Like</p>
          </Button>
          <Button>
            <RegularComment />
            <p>Comment</p>
          </Button>
        </ButtonsContainer>
      </Footer>
    </Container>
  );
}

export default Post;
