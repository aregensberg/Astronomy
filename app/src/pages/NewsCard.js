import React from 'react'
import Media from 'react-bootstrap/Media'

export function NewsCard({newsItem}) {

  return(
    <>
      <Media>
        <img
          width={400}
          height={400}
          className="mr-3"
          src={newsItem.newsImg}
          alt="news image"
        />
        <Media.Body>
          <h5 className="news-title">{newsItem.newsTitle}</h5>
          <p className="news-text">
            {newsItem.newsDescription}
          </p>
          <p name="news-date">{newsItem.newsDate}</p>
        </Media.Body>
      </Media>
        {/*<div className="card mb-3" style={{maxWidth: "540px"}}>*/}
        {/*  <div className="row no-gutters">*/}
        {/*    <div className="col-md-4">*/}
        {/*      <img src={newsItem.newsImg} width="150rem" alt="news image" />*/}
        {/*    </div>*/}
        {/*    <div className="col-md-8">*/}
        {/*      <div className="card-body">*/}
        {/*        <h5 className="card-title">{newsItem.newsTitle}</h5>*/}
        {/*        <p className="card-text">{newsItem.newsDescription}</p>*/}
        {/*        <p className="card-text"><small className="text-muted">{newsItem.newsDate}</small></p>*/}
        {/*      </div>*/}
        {/*    </div>*/}
        {/*  </div>*/}
        {/*</div>*/}
    </>
  )
}