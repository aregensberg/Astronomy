import React from 'react'
import CardColumns from 'react-bootstrap/CardColumns'
import Card from 'react-bootstrap/Card'
import Image from 'react-bootstrap/Image'

import Col from 'react-bootstrap/Col'
import divWithClassName from 'react-bootstrap/cjs/divWithClassName'
import CardDeck from 'react-bootstrap/CardDeck'

export function MediaCard({mediaItem}) {

  return(

    // <div className="container">
        <div className="col-md-3 mb-3">
          <Card border={'primary'} bg={'light'} className="h-100">
            <Card.Img className="centered" variant="top" src={mediaItem.mediaUrl} alt="media image"/>
            <Card.Body>
              <Card.Title>{mediaItem.mediaAlt}</Card.Title>
              <Card.Text>{mediaItem.mediaDescription}</Card.Text>
            </Card.Body>
          </Card>
        </div>
    // </div>


  )
}