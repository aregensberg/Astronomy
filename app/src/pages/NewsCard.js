import React from 'react'

export function NewsCard({newsItem}) {

  return(
    <>
        <div className="card mb-3" style={{maxWidth: "540px"}}>
          <div className="row no-gutters">
            <div className="col-md-4">
              <img src={newsItem.newsImg} width="150rem" alt="news image" />
            </div>
            <div className="col-md-8">
              <div className="card-body">
                <h5 className="card-title">{newsItem.newsTitle}</h5>
                <p className="card-text">{newsItem.newsDescription}</p>
                <p className="card-text"><small className="text-muted">{newsItem.newsDate}</small></p>
              </div>
            </div>
          </div>
        </div>
    </>
  )
}