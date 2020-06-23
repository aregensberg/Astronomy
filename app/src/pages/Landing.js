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
      <div className='container'>
        <div className="row">
          <div className="col">
            <div className="jumbotron">
              <img className="img-fluid" src="https://www.sciencealert.com/images/2020-05/processed/frb_topic_cover_nasa_1024.jpg"
                   alt="Galaxy of stars"/>
            </div>
          </div>
        </div>
        <div className='row'>
          <div className="col-md-6 col-lg-5 offset-lg-1">
           <div className="bg-light p-3">
             <p>
               The Hubble Space Telescope has captured many beautiful and captivating images from our galaxy. Enjoy the
               latest astronomy news with our collection of recent events. We Provide up to date news releases with the
               assistance from NASA and ESA.
             </p>
             <Button href="/News" className='btn-info'>Latest News</Button>
           </div>

          </div>
          <div className="col-md-6 col-lg-5">
            <h5 className="card-title">Photo Of The Day</h5>
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
