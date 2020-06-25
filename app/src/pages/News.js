import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchAllNews } from '../store/news'
import { NewsCard } from './NewsCard'
import './news.css'

export function News () {
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
  return (
    <>
      <div id="news">
        <div className="container text-center">
          <div className="row mx-md-3">
            <div className="col p-2 mx-auto">
              <h1>NEWS</h1>
            </div>
          </div>
        </div>
        <div className='container-lg'>
          <div className="row-col-lg-1">
            {news.map(newsItem => <NewsCard newsItem={newsItem} key={newsItem.newsId}/>)}
          </div>
        </div>
      </div>
    </>
  )
}