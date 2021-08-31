import AddPost from "features/posts/AddPost";
import Post from "features/posts/Post";
import React from "react";
import styled from "styled-components";

const Container = styled.div`
  display: grid;
  grid-template-rows: repeat(auto-fit, minmax(min-content, 100px));
  justify-content: center;
  gap: 20px;
  margin-top: 20px;
  scroll-margin: 0;
  position: absolute;
  top: 35px;
  justify-self: center;
  height: 100vh;
  overflow-y: scroll;
  width: 100%;
  padding-top: 30px;
  z-index: -1
`;

function Home() {
  return (
    <Container>
      <AddPost />
      <Post />
      <Post />
      <Post />
      <Post />
      <Post />
      <Post />
      <Post />
      <Post />
      <Post />
      <Post />
      <Post />
      <Post />
      <Post />
      <Post />
      <Post />
      <Post />
    </Container>
  );
}

export default Home;
