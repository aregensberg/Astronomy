import React from 'react'
import Nav from 'react-bootstrap/Nav'
import { useDispatch, useSelector } from 'react-redux'
import { fetchAllNews } from '../store/news'
import { NewsCard } from './NewsCard'

export function News() {
  const news = useSelector(store => {
    // console.log("Redux Store", store)
    return store.news ? store.news : []
  })

  const dispatch = useDispatch()

  const sideEffects = () => {
    dispatch(fetchAllNews())
  }
  React.useEffect(sideEffects, [])
  console.log(news)
  return(
    <>
      <div id="news">
      <div className="container text-center">
        <div className="row">
          <div className="col">
            <h1>NEWS</h1>
          </div>
        </div>
      </div>
        <div className="row">
        {news.map(newsItem => <NewsCard newsItem = {newsItem} key = {newsItem.newsId} />)}
        </div>
      <div>
        <footer>
          <div className="bg-light p-2">
            <Nav className="mr-auto justify-content-center">
              <Nav.Link href="#media">Media</Nav.Link>
              <Nav.Link href="#glossary">Glossary</Nav.Link>
              <Nav.Link href="#news">News</Nav.Link>
            </Nav>
          </div>
        </footer>
      </div>
      </div>
    </>
  )
}