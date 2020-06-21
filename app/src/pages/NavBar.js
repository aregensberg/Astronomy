import React from 'react'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import Container from 'react-bootstrap/Container'
import NavLink from 'react-bootstrap/NavLink'


export function NavBar() {
  return(
    <>
      <Container>
        <Nav
          activeKey="/">
          <Nav.Item>
            <Nav.Link href="/">Astronished</Nav.Link>
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
      </Container>
    </>
  )}

