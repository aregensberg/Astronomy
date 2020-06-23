import React from 'react'
import ResponsiveEmbed from 'react-bootstrap/ResponsiveEmbed'
import Card from 'react-bootstrap/Card'
import CardColumns from 'react-bootstrap/CardColumns'
import Button from 'react-bootstrap/Button'
import { useDispatch, useSelector } from 'react-redux'
import { fetchAllMedia } from '../store/media'
import Nav from 'react-bootstrap/Nav'
import './landing.module.css'

export function Landing() {
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

    <div className="jumbotron ">
        <img src="https://www.sciencealert.com/images/2020-05/processed/frb_topic_cover_nasa_1024.jpg" alt="Galaxy of stars"/>
    </div>

<div className='container-fluid d-block mx-auto'>
<div className='container-fluid'>
  <div className= 'row justify-content-around'>
    <div className= 'col-lg-9 mx-auto my-lg-4'>
    <CardColumns>
      <div className="card">
        <Card.Body>
          <Card.Text>
            The Hubble Space Telescope has captured many beautiful and captivating images from our galaxy. Enjoy the latest astronomy news with our collection of recent events. We Provide up to date news releases with the assistance from NASA and ESA.
          </Card.Text>
        </Card.Body>
      </div>

      <section id='button'>
      <Button href="/News" className='btn-light'>Latest News</Button>{' '}
      </section>

      <div className="Card p-5 mx-2">
        <h5 className="card-title">Photo Of The Day</h5>
        <div className="Card.Body p-0">
          {media.length ? <img src={media[Math.round(Math.random() * (media.length - 1))].mediaUrl} height="auto" width="500"  alt="Random Hubble image" /> : ""}
        </div>
      </div>
    </CardColumns>
  </div>
</div>
  </div>
  </div>
  </>
    )
    }
