import React from 'react'
import Carousel from 'react-bootstrap/Carousel'
import CarouselCaption from 'react-bootstrap/CarouselCaption'
import { text } from '@fortawesome/fontawesome-svg-core'

export function Media() {
  return(
    <>
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
            <img src="https://images.pexels.com/photos/87651/earth-blue-planet-globe-planet-87651.jpeg?cs=srgb&dl=planet-earth-87651.jpg&fm=jpg" className="rounded-circle mx-auto d-block" alt="" width="150" height="115">
            </img>
            <p className="card-text">Sun</p>
          </div>
        </div>
        <div className="card bg-light">
          <div className="card-body text-center">
            <p className="card-text">Mercury</p>
          </div>
        </div>
        <div className="card bg-light">
          <div className="card-body text-center">
            <p className="card-text">Venus</p>
          </div>
        </div>
        <div className="card bg-light">
          <div className="card-body text-center">
            <p className="card-text">Earth</p>
          </div>
        </div>
        <div className="card bg-light">
          <div className="card-body text-center">
            <p className="card-text">Mars</p>
          </div>
        </div>
        <div className="card bg-light">
          <div className="card-body text-center">
            <p className="card-text">Jupiter</p>
          </div>
        </div>
        <div className="card bg-light">
          <div className="card-body text-center">
            <img src="sky-space-dark-galaxy-2150.jpg">
            </img>
            <p className="card-text">Saturn</p>
          </div>
        </div><div className="card bg-light">
        <div className="card-body text-center">
          <img src="sky-space-dark-galaxy-2150.jpg">
          </img>
          <p className="card-text">Uranus</p>
        </div>
      </div><div className="card bg-light">
        <div className="card-body text-center">
          <img src="sky-space-dark-galaxy-2150.jpg">
          </img>
          <p className="card-text">Neptune</p>
        </div>
      </div>
      </div>
{/*Video Section*/}
      <Carousel>
        <Carousel.Item>

            <h3 className={"text-center"}>First slide label</h3>
            <p className={"text-center"}>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>

        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="holder.js/800x400?text=Second slide&bg=282c34"
            alt="Third slide"
          />

          <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="holder.js/800x400?text=Third slide&bg=20232a"
            alt="Third slide"
          />

          <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </>
  )
}