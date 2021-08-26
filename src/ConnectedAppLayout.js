import Navbar from 'features/authentication/Navbar'
import React from 'react'
import styled from 'styled-components'

const Container = styled.nav`
  position: fixed;
  top: 0;
  left: 0; 
  bottom: 0;
  right:0;
  
  display: grid;
  grid-template-rows: min-content auto;
`

function ConnectedAppLayout({ children }) {
  return (
    <Container>
      <Navbar />
      {/* <Sidebar /> */}
      { children }
    </Container>
  )
}

export default ConnectedAppLayout
