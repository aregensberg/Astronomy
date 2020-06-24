import React from 'react'
import Card from 'react-bootstrap/Card'


export function GlossaryCard({glossaries}) {
  // bg='light' border='0'
  return(
    <>
      <section className="container-md p-2">
        <Card.Title>{glossaries.glossaryName}</Card.Title>
        <Card.Body>{glossaries.glossaryDefinition}</Card.Body>
      </section>
    </>
  )
}