import React from 'react'
import Carousel from 'react-bootstrap/Carousel'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap'
import CarouselCaption from 'react-bootstrap/CarouselCaption'
import { text } from '@fortawesome/fontawesome-svg-core'

export function Media() {
  return(
    <>
      <div className='media'></div>
{/*NavBar*/}
      <container>
        <Navbar bg="light" variant="light">
          <Navbar.Brand href="#home">Astronomy</Navbar.Brand>
          <Nav className="mr-auto">
            <Nav.Link href="#media">Media</Nav.Link>
            <Nav.Link href="#glossary">Glossary</Nav.Link>
            <Nav.Link href="#news">News</Nav.Link>
          </Nav>
        </Navbar>
      </container>

{/*Header*/}

            <div className="card-body">
              <h1 className="text-center">Media</h1>
            </div>


{/*Photo Title Section*/}
      <div className="photo">
          <div className="card-body">
            <h2 className="text-center">Photo's</h2>
        </div>
      </div>


{/*Planet Photo Section*/}
      <div className="card-columns">
        <div className="card bg-light">
          <div className="card-body text-center">
            <img src="https://images.pexels.com/photos/87651/earth-blue-planet-globe-planet-87651.jpeg?cs=srgb&dl=planet-earth-87651.jpg&fm=jpg" className="rounded-circle mx-auto d-block" alt="" width="110" height="110">
            </img>
            <p className="card-text">Sun</p>
          </div>
        </div>

        <div className="card bg-light">
          <div className="card-body text-center">
            <img src="https://images.pexels.com/photos/87651/earth-blue-planet-globe-planet-87651.jpeg?cs=srgb&dl=planet-earth-87651.jpg&fm=jpg" className="rounded-circle mx-auto d-block" alt="" width="110" height="110">
            </img>
            <p className="card-text">Mercury</p>
          </div>
        </div>

        <div className="card bg-light">
          <div className="card-body text-center">
            <img src="https://images.pexels.com/photos/87651/earth-blue-planet-globe-planet-87651.jpeg?cs=srgb&dl=planet-earth-87651.jpg&fm=jpg" className="rounded-circle mx-auto d-block" alt="" width="110" height="110">
            </img>
            <p className="card-text">Venus</p>
          </div>
        </div>

        <div className="card bg-light">
          <div className="card-body text-center">
            <img src="https://images.pexels.com/photos/87651/earth-blue-planet-globe-planet-87651.jpeg?cs=srgb&dl=planet-earth-87651.jpg&fm=jpg" className="rounded-circle mx-auto d-block" alt="" width="110" height="110">
            </img>
            <p className="card-text">Earth</p>
          </div>
        </div>

        <div className="card bg-light">
          <div className="card-body text-center">
            <img src="https://images.pexels.com/photos/87651/earth-blue-planet-globe-planet-87651.jpeg?cs=srgb&dl=planet-earth-87651.jpg&fm=jpg" className="rounded-circle mx-auto d-block" alt="" width="110" height="110">
            </img>
            <p className="card-text">Mars</p>
          </div>
        </div>

        <div className="card bg-light">
          <div className="card-body text-center">
            <img src="https://images.pexels.com/photos/87651/earth-blue-planet-globe-planet-87651.jpeg?cs=srgb&dl=planet-earth-87651.jpg&fm=jpg" className="rounded-circle mx-auto d-block" alt="" width="110" height="110">
            </img>
            <p className="card-text">Jupiter</p>
          </div>
        </div>

        <div className="card bg-light">
          <div className="card-body text-center">
            <img src="https://images.pexels.com/photos/87651/earth-blue-planet-globe-planet-87651.jpeg?cs=srgb&dl=planet-earth-87651.jpg&fm=jpg" className="rounded-circle mx-auto d-block" alt="" width="110" height="110">
            </img>
            <p className="card-text">Saturn</p>
          </div>
        </div>

        <div className="card bg-light">
          <div className="card-body text-center">
            <img src="https://images.pexels.com/photos/87651/earth-blue-planet-globe-planet-87651.jpeg?cs=srgb&dl=planet-earth-87651.jpg&fm=jpg" className="rounded-circle mx-auto d-block" alt="" width="110" height="110">
            </img>
            <p className="card-text">Uranus</p>
          </div>
        </div>

        <div className="card bg-light">
          <div className="card-body text-center">
            <img src="https://images.pexels.com/photos/87651/earth-blue-planet-globe-planet-87651.jpeg?cs=srgb&dl=planet-earth-87651.jpg&fm=jpg" className="rounded-circle mx-auto d-block" alt="" width="110" height="110">
            </img>
            <p className="card-text">Neptune</p>
          </div>
        </div>

      </div>



{/*Video Title Section*/}
        <div className="photo">
          <div className="card-body">
            <h2 className="text-center">Video's</h2>
          </div>
        </div>


{/*Video carousel*/}

      <Carousel>

        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://thesigndude.com/wp-content/uploads/2017/09/video-placeholder.jpg"
            alt="Third slide"
          />
        </Carousel.Item>

        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://thesigndude.com/wp-content/uploads/2017/09/video-placeholder.jpg"
            alt="Third slide"
          />
        </Carousel.Item>

        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://thesigndude.com/wp-content/uploads/2017/09/video-placeholder.jpg"
            alt="Third slide"
          />
        </Carousel.Item>

      </Carousel>


{/*Footer*/}
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

    </>
  )
}