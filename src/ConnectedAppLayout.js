import RightBar from "components/RightBar";
import Sidebar from "components/Sidebar";
import Navbar from "features/authentication/Navbar";
import React from "react";
import styled from "styled-components";

const Container = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;

  display: grid;
  grid-template-rows: min-content auto;
  grid-template-columns: 23% auto 23%;
  overflow-y: scroll;
  gap: 0 20px;

`;

function ConnectedAppLayout({ children }) {
  return (
    <Container>
      <Navbar />
      <Sidebar />
      {children}
      <RightBar />
    </Container>
  );
}

export default ConnectedAppLayout;
