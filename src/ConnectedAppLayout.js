import RightBar from "components/RightBar";
import Sidebar from "components/Sidebar";
import Navbar from "features/authentication/Navbar";
import React from "react";
import styled from "styled-components";

const Container = styled.nav`
  display: grid;
  grid-template-rows: min-content auto;
  grid-template-columns: 23% auto 23%;
  gap: 0 20px;

  position: fixed;
  top: 0;
  width: 100%;
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
