import React from 'react'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'

export function News() {
  return(
    <>
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
            <h1>NEWS</h1>
          </div>
        </div>
      </div>
      <div class="p-2"></div>
      <div className="container-fluid">
        <div className="row">
          <div className="col">
            <img src="https://icatcare.org/app/uploads/2018/07/Thinking-of-getting-a-cat.png" class="img-fluid" alt="cat" />
          </div>
          <div className="col text-center">
            <h5>Title</h5>
            <p>Scamper meow to be let out, kitty ipsum dolor sit amet, shed everywhere shed everywhere stretching attack
            your ankles chase the red dot, hairball run catnip eat the grass sniff cat mojo so purrrrrr but steal mom's
            crouton while she is in the bathroom chase the pig around the house. Eat a plant, kill a hand cats are the
            world chew master's slippers, or grass smells good but woops poop hanging from butt must get rid run run
            around house drag poop on floor maybe it comes off woops left brown marks on floor human slave clean lick
            butt now. Sleep on keyboard tickle my belly at your own peril i will pester for food when you're in the
            kitchen even if it's salad or pee in human's bed until he cleans the litter box so put toy mouse in food
              bowl run out of litter box at full speed.</p>
          </div>
        </div>
      </div>
      <div class="p-2"></div>
      <div className="container-fluid">
        <div className="row">
          <div className="col">
            <img src="https://icatcare.org/app/uploads/2018/07/Thinking-of-getting-a-cat.png" className="img-fluid"
                 alt="cat 2"/>
          </div>
          <div className="col text-center">
            <h5>Title</h5>
            <p>Scamper meow to be let out, kitty ipsum dolor sit amet, shed everywhere shed everywhere stretching attack
              your ankles chase the red dot, hairball run catnip eat the grass sniff cat mojo so purrrrrr but steal
              mom's
              crouton while she is in the bathroom chase the pig around the house. Eat a plant, kill a hand cats are the
              world chew master's slippers, or grass smells good but woops poop hanging from butt must get rid run run
              around house drag poop on floor maybe it comes off woops left brown marks on floor human slave clean lick
              butt now. Sleep on keyboard tickle my belly at your own peril i will pester for food when you're in the
              kitchen even if it's salad or pee in human's bed until he cleans the litter box so put toy mouse in food
              bowl run out of litter box at full speed.</p>
          </div>
        </div>
      </div>
    </>
  )
}