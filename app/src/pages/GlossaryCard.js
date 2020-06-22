import React from 'react'

export function GlossaryCard({glossaries}) {

  return(
    <>
      <div className="card mb-3" style={{maxWidth: "540px"}}>
        <div className="row no-gutters">
          <div className="col-md-8">
            <div className="card-body">
              <h5 className="card-title">{glossaries.glossaryName}</h5>
              <p className="card-text">{glossaries.glossaryDefinition}</p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}