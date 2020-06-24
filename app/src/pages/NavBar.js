import React from 'react'
import Nav from 'react-bootstrap/Nav'
import Container from 'react-bootstrap/Container'
import Navbar from 'react-bootstrap/Navbar'



export function NavBar() {
  return(
    <>
      <Container>
        <Navbar collapseOnSelect expand="md" variant="dark">
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
        <Nav
          activeKey="/">
          <Nav.Item>
            <Nav.Link href="/">Home</Nav.Link>
          </Nav.Item>
        <Nav
          activeKey="/News">
          <Nav.Item>
            <Nav.Link href="/News">News</Nav.Link>
          </Nav.Item>
          <Nav
          activeKey="/Media">
          <Nav.Item>
          <Nav.Link href="/Media">Media</Nav.Link>
        </Nav.Item>
          <Nav
            activeKey="/Glossary">
            <Nav.Item>
              <Nav.Link href="/Glossary">Glossary</Nav.Link>
            </Nav.Item>
          </Nav>
          </Nav>
        </Nav>
        </Nav>
          </Navbar.Collapse>
        </Navbar>
      </Container>
    </>
  )}

