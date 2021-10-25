import AddPost from "features/posts/AddPost";
import Post from "features/posts/Post";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";

const Container = styled.div`
  display: grid;
  grid-template-rows: repeat(auto-fit, minmax(min-content, 100px));
  justify-content: center;
  gap: 2em;
  padding-top: 85px;
  padding-left: 20px;
  scroll-margin: 0;
  position: absolute;
  justify-self: center;
  height: 89vh;
  overflow-y: scroll;
  width: 100%;
  z-index: -1;
`;

const PostsContainer = styled.div`
  display: grid;
  gap: 1em 0;
  padding-bottom: 1em;
`;

function Home() {
  // store selectors
  const dispatch = useDispatch();
  const isPostsLoading = useSelector((state) => state.posts.isLoading);
  const postsData = useSelector((state) => state.posts.data);

  // Loading Screen
  const [animate, setAnimate] = useState(false);
  const [disappear, setDisappear] = useState(false);

  // Fetching data
  useEffect(() => {
    // dispatch(getPosts());
  });

  return (
    <Container>
      <AddPost />
      <PostsContainer>
        {postsData.map((post, index) => (
          <Post key={index} post={post} />
        ))}
      </PostsContainer>
    </Container>
  );
}

export default Home;
