import React from 'react'
import Container from 'react-bootstrap/Container'
import Navbar from 'react-bootstrap/Navbar'


export function NavBar() {
  return(
    <>
      <Navbar expand="lg" variant="light" bg="light">
        <Container>
          <Navbar.Brand href="#">Astronomy</Navbar.Brand>
        </Container>
      </Navbar>
    </>
  )}
