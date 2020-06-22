import React from 'react'
import Card from 'react-bootstrap/Card'

export function GlossaryCard({glossaries}) {

  return(
    <>
      <div className="container-md">
      <Card border='0'>
        <Card.Title p-2>{glossaries.glossaryName}</Card.Title>
        <Card.Body>{glossaries.glossaryDefinition}</Card.Body>
      </Card>
        </div>
    </>
  )
}