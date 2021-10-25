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
  justify-items: space-between;
  position: fixed;
  top: 0;
  width: 100%;
  height: 100%;
  padding-bottom: 1em;
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
