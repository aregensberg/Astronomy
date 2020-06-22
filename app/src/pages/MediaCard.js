import React from 'react'
import CardColumns from 'react-bootstrap/CardColumns'
import Card from 'react-bootstrap/Card'

export function MediaCard({mediaItem}) {

  return(

<div className="container">
<cardDeck>
    <div className="card mb-3">
      <Card border={'primary'}>
        <Card.Img variant="top" src={mediaItem.mediaUrl} width="150rem" alt="media image" />
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
