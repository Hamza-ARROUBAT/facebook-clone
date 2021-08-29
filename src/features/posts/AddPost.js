import React, { useState } from "react";
import styled from "styled-components";
import { PhotoLibrary } from "@styled-icons/material/PhotoLibrary";
import { Add } from "@styled-icons/fluentui-system-filled/Add";

const Container = styled.div`
  display: grid;
  box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.2);
  border-radius: 5px;
  align-items: start;
  padding: 1em;
  gap: 10px 0;
`;

const TopContainer = styled.div`
  display: grid;
  grid-template-columns: min-content auto;
  gap: 0 10px;
  align-items: center;
`;

const Avatar = styled.div`
  background-image: ${(props) =>
    props.imgUrl !== "" ? `url(${props.imgUrl})` : `gray`};
  background: gray;
  width: 40px;
  height: 40px;
  border-radius: 50%;
`;

const AddBar = styled.div`
  background: #f0f2f5;
  border-radius: 20px;
  display: grid;
  width: 440px;
  padding: 0.7em 1em 0.6em 1em;

  input {
    border: none;
    outline: none;
    background: none;
    font-size: 1rem;
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
  grid-template-columns: max-content max-content;
  align-items: center;
  justify-content: space-between;
`;

const Button = styled.div`
  cursor: pointer;
  display: grid;
  grid-template-columns: min-content auto;
  align-items: center;
  gap: 0 10px;
  border-radius: 10px;
  padding: 0.5em 1em;

  svg {
    width: 25px;
    color: hsl(156, 100%, 35%);
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

const ActionButton = styled.div`
  cursor: ${(props) => (props.isDisabled ? "default" : "pointer")};
  display: grid;
  grid-template-columns: min-content auto;
  align-items: center;
  gap: 0 10px;
  border-radius: 25px;

  padding: 0.5em 1em;
  background: ${(props) =>
    props.isDisabled ? "hsl(0, 0%, 30%, 20%)" : "hsl(207, 83%, 75%, 20%)"};

  svg {
    width: 25px;
    color: ${(props) =>
      props.isDisabled ? "hsl(0, 0%, 30%, 50%)" : "hsl(214, 89%, 52%)"};
  }

  p {
    font-weight: 500;
    color: ${(props) =>
      props.isDisabled ? "hsl(0, 0%, 55%)" : "hsl(0, 0%, 35%)"};
    margin: 0;
  }

  transition: background 0.3s;
  :hover {
    background: ${(props) => !props.isDisabled && "hsl(207, 83%, 75%, 50%)"};
  }
`;

function AddPost() {
  const [postMessage, setPostMessage] = useState();

  return (
    <Container>
      <TopContainer>
        <Avatar />
        <AddBar>
          <input
            type="text"
            placeholder="What's on your mind, Hamza?"
            value={postMessage}
            onChange={(e) => {
              setPostMessage(e.target.value);
              console.log(e.target.value);
            }}
          />
        </AddBar>
      </TopContainer>
      <HSeparator />
      <ButtonsContainer>
        <Button>
          <PhotoLibrary />
          <p>Photo</p>
        </Button>
        <ActionButton
          isDisabled={!postMessage}
          onClick={() => {
            console.log(postMessage);
          }}
        >
          <Add />
          <p>Post it</p>
        </ActionButton>
      </ButtonsContainer>
    </Container>
  );
}

export default AddPost;
