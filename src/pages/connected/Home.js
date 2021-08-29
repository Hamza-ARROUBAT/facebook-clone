import AddPost from "features/posts/AddPost";
import React from "react";
import styled from "styled-components";

const Container = styled.div`
  margin-top: 20px;
  display: grid;
  grid-template-rows: repeat(auto-fit, minmax(min-content, 100px));
  justify-content: center;
`;

function Home() {
  return (
    <Container>
      <AddPost />
    </Container>
  );
}

export default Home;
