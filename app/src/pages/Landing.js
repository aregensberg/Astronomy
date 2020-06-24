import React from 'react'
import Card from 'react-bootstrap/Card'
import CardColumns from 'react-bootstrap/CardColumns'
import Button from 'react-bootstrap/Button'
import { useDispatch, useSelector } from 'react-redux'
import { fetchAllMedia } from '../store/media'
import Nav from 'react-bootstrap/Nav'
import { httpConfig } from '../utils/http-config'
import Threejs from './Threejs'


export function Landing() {
  const media = useSelector(store => {
    // console.log("Redux Store", store)
    return store.media ? store.media : []
  })
const [nasaPhoto, setNasaPhoto] = React.useState(null)
  const [status, setStatus] = React.useState({message: "Photo of the day is loading", type: ""})
  console.log(nasaPhoto)
  const dispatch = useDispatch()

  const sideEffects = () => {
    httpConfig.get("/apis/potd/")
      .then((reply) => {
        if (reply.data !== null) {
          setNasaPhoto(reply.data)
        } else{
          const{type, message} = reply
          setStatus({type, message})
        }

      })
    dispatch(fetchAllMedia())
  }

  React.useEffect(sideEffects, [])
  return (
  <>

    <div className="jumbotron">
      <Threejs />

    </div>
    <div className="m-5 p-2 ">

      <div className="p-2 mx-5">

        {/*activeKey="/News">*/}
        {/*<Nav.Item>*/}
        {/*  <Nav.Link href="/News">News</Nav.Link>*/}
        {/*</Nav.Item>*/}

        <Button href="/News">News</Button>{' '}

      {/*<Button variant="primary" size="lg">NEWS</Button>{' '}*/}
      {/*</div>*/}

    <CardColumns>
      <div className="card p-2">
        <Card.Body>
          <Card.Text>
            Lucas ipsum dolor sit amet gordin nadon fel bando skakoan koon moff ord darth kaleesh. Zam darth tusken raider ailyn tapani aayla muun sabé fett. Wirutid wat nautolan yuvernian zekk. Jettster wroonian firmus chagrian kast.
            Padmé cathar ansion coruscant hutt nagai. Beru bibble b4-d4 jerjerrod durron. Jettster bib boba panaka. Maximilian yoda ponda woostoid togorian vebb ismaren luminara firrerreo. Senex plo kiffar wharl kiffar kit gricho croke yuzzem.
            Ig-88 thul wirutid isolder desann greeata drach'nam subterrel. test
          </Card.Text>
        </Card.Body>
      </div>
      <div className="Card p-5 mx-2">
        <h5 className="card-title">Photo Of The Day</h5>
        <div className="Card.Body p-0">
          {nasaPhoto !== null ? (<img src={nasaPhoto.url} height="auto" width="500"  alt="Random Hubble image" /> ) :(<div className={status.type}>{status.message}</div>)}
        </div>
      </div>
    </CardColumns>
    </div>
    </div>
  </>
    )
    }
