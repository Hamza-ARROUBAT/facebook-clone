import AddPost from "features/posts/AddPost";
import Post from "features/posts/Post";
import React from "react";
import styled from "styled-components";

const Container = styled.div`
  display: grid;
  grid-template-rows: repeat(auto-fit, minmax(min-content, 100px));
  justify-content: center;
  gap: 20px;
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

function Home() {
  const posts = [
    {
      user: {
        avatar: null,
        firstName: "Hamza",
        lastName: "ARROUBAT",
        date: "August 29 at 11:45 AM"
      },
      text: "omg look at this mister !",
      img: "",
      likes: {
        users: ["Yasuo, Lee Sin, Gragas"]
      },
      comments: [{ user: "Yasuo", text: "What is this?!!" }]
    },
    {
      user: {
        avatar: null,
        firstName: "Yasuo",
        lastName: "WindMaster",
        date: "August 29 at 12:45 AM"
      },
      text: "HASAGI",
      img: "",
      likes: {
        users: ["Hamza, Lee Sin, Gragas"]
      },
      comments: [{ user: "Hamza", text: "What is this?!!" }]
    },
    {
      user: {
        avatar: null,
        firstName: "Yasuo",
        lastName: "WindMaster",
        date: "August 29 at 12:45 AM"
      },
      text: "HASAGI",
      img: "",
      likes: {
        users: ["Hamza, Lee Sin, Gragas"]
      },
      comments: [{ user: "Hamza", text: "What is this?!!" }]
    },
    {
      user: {
        avatar: null,
        firstName: "Yasuo",
        lastName: "WindMaster",
        date: "August 29 at 12:45 AM"
      },
      text: "HASAGI",
      img: "",
      likes: {
        users: ["Hamza, Lee Sin, Gragas"]
      },
      comments: [{ user: "Hamza", text: "What is this?!!" }]
    },
    {
      user: {
        avatar: null,
        firstName: "Yasuo",
        lastName: "WindMaster",
        date: "August 29 at 12:45 AM"
      },
      text: "HASAGI",
      img: "",
      likes: {
        users: ["Hamza, Lee Sin, Gragas"]
      },
      comments: [{ user: "Hamza", text: "What is this?!!" }]
    },
    {
      user: {
        avatar: null,
        firstName: "Yasuo",
        lastName: "WindMaster",
        date: "August 29 at 12:45 AM"
      },
      text: "HASAGI",
      img: "",
      likes: {
        users: ["Hamza, Lee Sin, Gragas"]
      },
      comments: [{ user: "Hamza", text: "What is this?!!" }]
    },
  ];

  return (
    <Container>
      <AddPost />
      {posts.map((post) => (
        <Post post={post} />
      ))}
    </Container>
  );
}

export default Home;
