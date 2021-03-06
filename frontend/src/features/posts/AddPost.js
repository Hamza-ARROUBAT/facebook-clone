import React, { useState, useRef } from "react";
import styled, { css } from "styled-components";
import { PhotoLibrary } from "@styled-icons/material/PhotoLibrary";
import { Add } from "@styled-icons/fluentui-system-filled/Add";
import { addPost } from "store/reducers/posts/posts.action";
import { useDispatch, useSelector } from "react-redux";

const Container = styled.div``;

const PostForm = styled.form`
  display: grid;
  box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.2);
  border-radius: 5px;
  align-items: start;
  padding: 1em;
  gap: 10px 0;
  width: 520px;
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

  input {
    display: none;
  }

  label {
    cursor: pointer;
  }
`;

const Button = styled.div`
  cursor: pointer;
  display: grid;
  grid-template-columns: min-content auto;
  align-items: center;
  gap: 0 10px;
  border-radius: 10px;
  padding: 0.5em 1em;
  background: ${(props) =>
    props.isHavingImg ? "hsla(166, 88%, 35%, 15%)" : "hsla(0,0%,0%,0%)"};

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
    width: 20px;
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
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);

  const [postMessage, setPostMessage] = useState();
  const [postImgUri, setPostImgUri] = useState("");
  const [isHavingImg, setIsHavingImg] = useState(postImgUri !== "");

  const fileToDataUri = (file) =>
    new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onload = (event) => {
        resolve(event.target.result);
      };
      reader.readAsDataURL(file);
    });
  const onChange = (file) => {
    if (!file) {
      setPostImgUri("");
      return;
    }

    fileToDataUri(file).then((profileImgDatas) => {
      setPostImgUri(profileImgDatas);
      setIsHavingImg(true);
    });
  };
  const removePostImg = () => {
    setPostImgUri("");
    setIsHavingImg(false);
  };

  const handleSubmit = (e) => {
    e?.preventDefault();
    dispatch(
      addPost({
        id: Math.floor(Math.random() * 1000000),
        text: postMessage,
        imgUri: postImgUri,
        likes: 0,
        likedBy: [],
        dislikes: 0
      })
    );
    setPostImgUri("");
    setIsHavingImg(false);
    setPostMessage("");
  };

  const postForm = useRef();
  return (
    <Container>
      <PostForm onSubmit={handleSubmit} ref={postForm}>
        <TopContainer>
          <Avatar />
          <AddBar>
            <input
              type="text"
              placeholder={`What's on your mind, ${user.data.firstName}?`}
              value={postMessage}
              onChange={(e) => {
                setPostMessage(e.target.value);
              }}
            />
          </AddBar>
        </TopContainer>
        <HSeparator />
        <ButtonsContainer>
          <label htmlFor="postImg">
            <Button isHavingImg={isHavingImg}>
              <PhotoLibrary />
              <p>Photo</p>
              <input
                type="file"
                id="postImg"
                name="postImg"
                accept=".jpg, .jpeg, .png, .gif, .svg"
                onChange={(event) => onChange(event.target.files[0] || null)}
              />
            </Button>
          </label>
          <ActionButton
            isDisabled={!postMessage && !postImgUri}
            onClick={handleSubmit}
          >
            <Add />
            <p>Post it</p>
          </ActionButton>
        </ButtonsContainer>
      </PostForm>
    </Container>
  );
}

export default AddPost;
