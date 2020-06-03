import React from 'react'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'

export function Glossary() {
    return(
      <>
        <div id="glossary">
        <Navbar bg="light" variant="light">
          <Navbar.Brand href="#home">Astronomy</Navbar.Brand>
          <Nav className="mr-auto">
            <Nav.Link href="#media">Media</Nav.Link>
            <Nav.Link href="#glossary">Glossary</Nav.Link>
            <Nav.Link href="#news">News</Nav.Link>
          </Nav>
        </Navbar>
        <div className="container text-center">
            <div className="row">
              <div className="col">
                <h1>GLOSSARY</h1>
                </div>
            </div>
          </div>
        <div className="container text-center">
          <div className="row">
            <div className="col">
          <h5>Definitions from space</h5>
            </div>
          </div>
        </div>
        <div className="p-2"></div>
        <div className="container-fluid px-lg-5" id="about">
          <div className="row mx-md-5 mx-3 py-5 align-items-center">
            <div className="col-md-3 py-3 px-md-4 px-5 text-center">
              <p>Placeholder term</p>
            </div>
            <div className="col">
              <p>Scamper meow to be let out, kitty ipsum dolor sit amet, shed everywhere shed everywhere stretching
                attack your ankles chase the red dot, hairball run catnip eat the grass sniff cat mojo so purrrrrr but
                steal mom's crouton while she is in the bathroom chase the pig around the house. test </p>
            </div>
          </div>
          <div className="row mx-md-5 mx-3 py-5 align-items-center">
            <div className="col-md-3 py-3 px-md-4 px-5 text-center">
              <p>Placeholder term</p>
            </div>
            <div className="col">
              <p>Scamper meow to be let out, kitty ipsum dolor sit amet, shed everywhere shed everywhere stretching
                attack your ankles chase the red dot, hairball run catnip eat the grass sniff cat mojo so purrrrrr but
                steal mom's crouton while she is in the bathroom chase the pig around the house. </p>
            </div>
          </div>
          <div className="row mx-md-5 mx-3 py-5 align-items-center">
            <div className="col-md-3 py-3 px-md-4 px-5 text-center">
              <p>Placeholder term</p>
            </div>
            <div className="col">
              <p>Scamper meow to be let out, kitty ipsum dolor sit amet, shed everywhere shed everywhere stretching
                attack your ankles chase the red dot, hairball run catnip eat the grass sniff cat mojo so purrrrrr but
                steal mom's crouton while she is in the bathroom chase the pig around the house. </p>
            </div>
          </div>
        </div>
        <div>
          <footer>
            <div className="bg-light p-2">
              <Nav className="mr-auto justify-content-center">
                <Nav.Link href="#media">Media</Nav.Link>
                <Nav.Link href="#glossary">Glossary</Nav.Link>
                <Nav.Link href="#news">News</Nav.Link>
              </Nav>
            </div>
          </footer>
        </div>
        </div>
      </>
    )
  }