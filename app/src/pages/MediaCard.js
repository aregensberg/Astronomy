import React, { useState } from 'react'
import Card from 'react-bootstrap/Card'
import Image from 'react-bootstrap/Image'
// import Fade from 'react-bootstrap/Fade'
// import Button from 'react-bootstrap/Button'
// import {MediaDescription} from './MediaDescription'

export function MediaCard({mediaItem}) {

// function mediaDescription() {
//   const [open, setOpen] = useState(false);
//   const [MediaDescription, setMediaDescription] = React.useState(null)


  return(
        <div className="container-fluid col-md-3 mb-5">
          <Card className="h-100">
            <Image fluid className="centered" variant="top" src={mediaItem.mediaUrl} alt="media image"/>
            <Card.Body variant="bottom">
              <Card.Title>{mediaItem.mediaAlt}</Card.Title>

              {/*<Button*/}
              {/*  onClick={() => setOpen(!open)}*/}
              {/*  aria-controls="mediaDescription-fade-text"*/}
              {/*  aria-expanded={open}*/}
              {/*>*/}
              {/*  Description*/}
              {/*</Button>*/}
              {/*<Fade in={open}>*/}
              {/*  <div id="mediaDescription-fade-text">*/}
              {/*    <Card.Text>{mediaItem.mediaDescription}</Card.Text>*/}
              {/*  </div>*/}
              {/*</Fade>*/}

              <Card.Text>{mediaItem.mediaDescription}</Card.Text>
            </Card.Body>
          </Card>
        </div>
  )
}
