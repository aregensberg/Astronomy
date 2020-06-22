import React from 'react'
import CardColumns from 'react-bootstrap/CardColumns'
import Card from 'react-bootstrap/Card'
import Col from 'react-bootstrap/Col'

export function MediaCard({mediaItem}) {

  return(

<div className="container">
<cardDeck>
    <div className="card-group mb-3">
      <Card border={'primary'} bg={'light'}>
        <Card.Img className="centered" variant="top" src={mediaItem.mediaUrl} alt="media image" />
        <Card.Body>
          <Card.Title>{mediaItem.mediaAlt}</Card.Title>
          <Card.Text>{mediaItem.mediaDescription}</Card.Text>
        </Card.Body>
      </Card>
</div>
</cardDeck>
</div>
  )
}
