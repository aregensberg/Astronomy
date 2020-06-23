import React from 'react'
import Carousel from 'react-bootstrap/Carousel'
import Nav from 'react-bootstrap/Nav'
import Container from 'react-bootstrap'
import { text } from '@fortawesome/fontawesome-svg-core'
import { useDispatch, useSelector } from 'react-redux'
import { MediaCard } from './MediaCard'
import { fetchAllMedia } from '../store/media'
import ReactPlayer from 'react-player'

export function Media() {
  const media = useSelector(store => {
    // console.log("Redux Store", store)
    return store.media ? store.media : []
    console.log(store)
  })
      const dispatch = useDispatch()

      const sideEffects = () => {
      dispatch(fetchAllMedia())
    }
      React.useEffect(sideEffects, [])
      console.log(media)
      return(
      <>
        <div id="media">
          <div className="container text-center">
            <div className="row">
              <div className="col">
                <h1>Media</h1>
              </div>
            </div>
            <div className="row">
              {media.slice(0,8).map(mediaItem => <MediaCard mediaItem = {mediaItem} key = {mediaItem.mediaId} />)}
            </div>
            <div className="row">
              <div className="col-md-6 offset-md-3">
                <ReactPlayer url="https://www.youtube.com/watch?v=Rq5SEhs9lws"/>

              </div>
            </div>
          </div>
        </div>











{/*      <div className='media'></div>*/}
{/*/!*Header*!/*/}
{/*            <div className="card-body">*/}
{/*              <h1 className="text-center">Media</h1>*/}
{/*            </div>*/}


{/*/!*Photo Title Section*!/*/}
{/*      <div className="photo">*/}
{/*          <div className="card-body">*/}
{/*            <h2 className="text-center">Photo's</h2>*/}
{/*        </div>*/}
{/*      </div>*/}


{/*/!*Planet Photo Section*!/*/}
{/*      <div className="card-columns">*/}
{/*        <div className="card bg-light">*/}
{/*          <div className="card-body text-center">*/}
{/*            <img src="https://images.pexels.com/photos/87651/earth-blue-planet-globe-planet-87651.jpeg?cs=srgb&dl=planet-earth-87651.jpg&fm=jpg" className="rounded-circle mx-auto d-block" alt="" width="110" height="110">*/}
{/*            </img>*/}
{/*            <p className="card-text">Sun</p>*/}
{/*          </div>*/}
{/*        </div>*/}

{/*        <div className="card bg-light">*/}
{/*          <div className="card-body text-center">*/}
{/*            <img src="https://images.pexels.com/photos/87651/earth-blue-planet-globe-planet-87651.jpeg?cs=srgb&dl=planet-earth-87651.jpg&fm=jpg" className="rounded-circle mx-auto d-block" alt="" width="110" height="110">*/}
{/*            </img>*/}
{/*            <p className="card-text">Mercury</p>*/}
{/*          </div>*/}
{/*        </div>*/}

{/*        <div className="card bg-light">*/}
{/*          <div className="card-body text-center">*/}
{/*            <img src="https://images.pexels.com/photos/87651/earth-blue-planet-globe-planet-87651.jpeg?cs=srgb&dl=planet-earth-87651.jpg&fm=jpg" className="rounded-circle mx-auto d-block" alt="" width="110" height="110">*/}
{/*            </img>*/}
{/*            <p className="card-text">Venus</p>*/}
{/*          </div>*/}
{/*        </div>*/}

{/*        <div className="card bg-light">*/}
{/*          <div className="card-body text-center">*/}
{/*            <img src="https://images.pexels.com/photos/87651/earth-blue-planet-globe-planet-87651.jpeg?cs=srgb&dl=planet-earth-87651.jpg&fm=jpg" className="rounded-circle mx-auto d-block" alt="" width="110" height="110">*/}
{/*            </img>*/}
{/*            <p className="card-text">Earth</p>*/}
{/*          </div>*/}
{/*        </div>*/}

{/*        <div className="card bg-light">*/}
{/*          <div className="card-body text-center">*/}
{/*            <img src="https://images.pexels.com/photos/87651/earth-blue-planet-globe-planet-87651.jpeg?cs=srgb&dl=planet-earth-87651.jpg&fm=jpg" className="rounded-circle mx-auto d-block" alt="" width="110" height="110">*/}
{/*            </img>*/}
{/*            <p className="card-text">Mars</p>*/}
{/*          </div>*/}
{/*        </div>*/}

{/*        <div className="card bg-light">*/}
{/*          <div className="card-body text-center">*/}
{/*            <img src="https://images.pexels.com/photos/87651/earth-blue-planet-globe-planet-87651.jpeg?cs=srgb&dl=planet-earth-87651.jpg&fm=jpg" className="rounded-circle mx-auto d-block" alt="" width="110" height="110">*/}
{/*            </img>*/}
{/*            <p className="card-text">Jupiter</p>*/}
{/*          </div>*/}
{/*        </div>*/}

{/*        <div className="card bg-light">*/}
{/*          <div className="card-body text-center">*/}
{/*            <img src="https://images.pexels.com/photos/87651/earth-blue-planet-globe-planet-87651.jpeg?cs=srgb&dl=planet-earth-87651.jpg&fm=jpg" className="rounded-circle mx-auto d-block" alt="" width="110" height="110">*/}
{/*            </img>*/}
{/*            <p className="card-text">Saturn</p>*/}
{/*          </div>*/}
{/*        </div>*/}

{/*        <div className="card bg-light">*/}
{/*          <div className="card-body text-center">*/}
{/*            <img src="https://images.pexels.com/photos/87651/earth-blue-planet-globe-planet-87651.jpeg?cs=srgb&dl=planet-earth-87651.jpg&fm=jpg" className="rounded-circle mx-auto d-block" alt="" width="110" height="110">*/}
{/*            </img>*/}
{/*            <p className="card-text">Uranus</p>*/}
{/*          </div>*/}
{/*        </div>*/}

{/*        <div className="card bg-light">*/}
{/*          <div className="card-body text-center">*/}
{/*            <img src="https://images.pexels.com/photos/87651/earth-blue-planet-globe-planet-87651.jpeg?cs=srgb&dl=planet-earth-87651.jpg&fm=jpg" className="rounded-circle mx-auto d-block" alt="" width="110" height="110">*/}
{/*            </img>*/}
{/*            <p className="card-text">Neptune</p>*/}
{/*          </div>*/}
{/*        </div>*/}

{/*      </div>*/}



{/*/!*Video Title Section*!/*/}
{/*        <div className="photo">*/}
{/*          <div className="card-body">*/}
{/*            <h2 className="text-center">Video's</h2>*/}
{/*          </div>*/}
{/*        </div>*/}


{/*/!*Video carousel*!/*/}

{/*      <Carousel>*/}
{/*        <Carousel.Item>*/}
{/*          <img*/}
{/*            className="d-block w-100"*/}
{/*            src="https://thesigndude.com/wp-content/uploads/2017/09/video-placeholder.jpg"*/}
{/*            alt="Third slide"*/}
{/*          />*/}
{/*        </Carousel.Item>*/}
{/*      </Carousel>*/}
    </>
  )
}

