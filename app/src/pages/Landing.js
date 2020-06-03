import React from 'react'
import ResponsiveEmbed from 'react-bootstrap/ResponsiveEmbed'
import Card from 'react-bootstrap/Card'
import CardColumns from 'react-bootstrap/CardColumns'
import Button from 'react-bootstrap/Button'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'


export function Landing() {
  return (
  <>
    <container>
      <Navbar bg="light" variant="light">
        <Navbar.Brand href="#home">Astronomy</Navbar.Brand>
        <Nav className="mr-auto">
          <Nav.Link href="#media">Media</Nav.Link>
          <Nav.Link href="#glossary">Glossary</Nav.Link>
          <Nav.Link href="#news">News</Nav.Link>
        </Nav>
      </Navbar>
    </container>



    <div className="jumbotron">
        <img src="https://www.sciencealert.com/images/2020-05/processed/frb_topic_cover_nasa_1024.jpg" alt="Galaxy of stars"/>
    </div>


    <div className="m-5 p-2">
      <div className="p-2 mx-5">
      <Button variant="primary" size="lg">NEWS</Button>{' '}
      </div>

    <CardColumns>
      <div className="card p-2">
        <Card.Body>
          <Card.Text>
            Lucas ipsum dolor sit amet gordin nadon fel bando skakoan koon moff ord darth kaleesh. Zam darth tusken raider ailyn tapani aayla muun sabé fett. Wirutid wat nautolan yuvernian zekk. Jettster wroonian firmus chagrian kast.
            Padmé cathar ansion coruscant hutt nagai. Beru bibble b4-d4 jerjerrod durron. Jettster bib boba panaka. Maximilian yoda ponda woostoid togorian vebb ismaren luminara firrerreo. Senex plo kiffar wharl kiffar kit gricho croke yuzzem.
            Ig-88 thul wirutid isolder desann greeata drach'nam subterrel. test
          </Card.Text>
        </Card.Body>
      </div>
      <div className="Card p-5 mx-2">
        <h5 className="card-title">Photo Of The Day</h5>
        <div className="Card.Body p-0">
          <img src="https://cdn.images.express.co.uk/img/dynamic/151/590x/NASA-news-Hubble-space-telescope-galaxy-Messier-90-Milky-Way-collide-1132007.jpg?r=1558991836477" height="250" width="500"  alt="Galaxy" />
        </div>
      </div>
    </CardColumns>
    </div>
  </>
    )
    }
