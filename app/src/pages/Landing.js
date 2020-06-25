import React from 'react'
import Button from 'react-bootstrap/Button'
import { useDispatch, useSelector } from 'react-redux'
import { fetchAllMedia } from '../store/media'
import { httpConfig } from '../utils/http-config'
import Threejs from './Threejs'
import './landing.css'

export function Landing () {
  const media = useSelector(store => {
    // console.log("Redux Store", store)
    return store.media ? store.media : []
  })
  const [nasaPhoto, setNasaPhoto] = React.useState(null)
  const [status, setStatus] = React.useState({ message: 'Photo of the day is loading', type: '' })
  console.log(nasaPhoto)
  const dispatch = useDispatch()

  const sideEffects = () => {
    httpConfig.get('/apis/potd/')
      .then((reply) => {
        if (reply.data !== null) {
          setNasaPhoto(reply.data)
        } else {
          const { type, message } = reply
          setStatus({ type, message })
        }

      })
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
              <div className="jumbotron" id="three-jswrapper">
                <Threejs/>
              </div>
            </div>
          </div>
        </div>
        <div className='row mx-md-3'>
          <div className="col-md-6 col-lg-5 offset-lg-1 m-lg-5 pt-3">
            <div className="bg-secondary p-5">
              <p>
                The Hubble Space Telescope has captured many beautiful and captivating images from our galaxy. Enjoy the
                latest astronomy news with our collection of recent events. We provide up-to-date news releases with the
                assistance from NASA and ESA.
              </p>
              <Button href="/News" className='btn-dark'>Latest News</Button>
            </div>
          </div>
          <div className="Card p-5 mx-2">
            <h4 className="card-title">Photo Of The Day</h4>
            <div className="Card.Body p-0">
              {nasaPhoto !== null ? (<img src={nasaPhoto.url} height="auto" width="500" alt="Random Hubble image"/>) : (
                <div className={status.type}>{status.message}</div>)}
            </div>
          </div>
        </div>
      </>
      )
      }
