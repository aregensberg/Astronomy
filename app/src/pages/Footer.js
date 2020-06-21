import React from 'react'
import Nav from 'react-bootstrap/Nav'


export function Footer() {
  return(
    <>
      <div>
        <footer>
          <div className=" text-center p-4">
            <Nav className="mr-auto">
              <Nav.Link href="#media">Media</Nav.Link>
              <Nav.Link href="#glossary">Glossary</Nav.Link>
              <Nav.Link href="#news">News</Nav.Link>
            </Nav>
          </div>
        </footer>
      </div>
    </>
  )}

