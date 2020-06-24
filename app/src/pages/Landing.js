import React from 'react'
import ResponsiveEmbed from 'react-bootstrap/ResponsiveEmbed'
import Button from 'react-bootstrap/Button'
import { useDispatch, useSelector } from 'react-redux'
import { fetchAllMedia } from '../store/media'
import Nav from 'react-bootstrap/Nav'
import './landing.css'

export function Landing () {
  const media = useSelector(store => {
    // console.log("Redux Store", store)
    return store.media ? store.media : []
  })

  const dispatch = useDispatch()

  const sideEffects = () => {
    dispatch(fetchAllMedia())
  }
  React.useEffect(sideEffects, [])
  return (
    <>
      <div className='container text-center'>
        <div className="row mx-md-3">
          <div className="col p-2 mx-auto">
            <h1>ASTRONISHED</h1>
          </div>
        </div>
        <div className="row mx-md-3">
          <div className="col">
            <div className="jumbotron">
              <img className="img-fluid" src="https://www.sciencealert.com/images/2020-05/processed/frb_topic_cover_nasa_1024.jpg"
                   alt="Galaxy of stars"/>
            </div>
          </div>
        </div>
        <div className='row mx-md-3'>
          <div className="col-md-6 col-lg-5 offset-lg-1 m-lg-5">
           <div className="bg-secondary p-3">
             <p>
               The Hubble Space Telescope has captured many beautiful and captivating images from our galaxy. Enjoy the
               latest astronomy news with our collection of recent events. We Provide up to date news releases with the
               assistance from NASA and ESA.
             </p>
             <Button href="/News" className='btn-dark'>Latest News</Button>
           </div>
          </div>
          <div className="col-md-6 col-lg-5">
            <h4 className="card-title">Photo Of The Day</h4>
            <div className="Card.Body p-0">
              {media.length ? <img src={media[Math.round(Math.random() * (media.length - 1))].mediaUrl}
                                   className="img-fluid" alt="Random Hubble image"/> : ''}
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
