import React from 'react'
import Media from 'react-bootstrap/Media'

export function NewsCard ({ newsItem }) {

  return (
    <>
      <Media>
        <img
          width={300}
          className="mr-3"
          src={newsItem.newsImg}
          alt="news image"
        />
        <Media.Body>
          <h5 className="news-title">
            {newsItem.newsTitle}
          </h5>
          <p className="news-text">
            {newsItem.newsDescription}
          </p>
          <p className="news-date">{newsItem.newsDate}</p>
        </Media.Body>
      </Media>
    </>
  )
}