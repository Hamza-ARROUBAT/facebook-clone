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
`;

function Home() {
  return (
    <Container>
      <AddPost />
      <Post />
    </Container>
  );
}

export default Home;
