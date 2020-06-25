import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { MediaCard } from './MediaCard'
import { fetchAllMedia } from '../store/media'
import ReactPlayer from 'react-player'
import { fetchRandomVideo } from '../store/video'
import './media.css'

export function Media () {
  const media = useSelector(store => {
    // console.log("Redux Store", store)
    return store.media ? store.media : []
    console.log(store)
  })

  const videos = useSelector(store => {
    return store.videos ? store.videos.find(media => media.mediaIsVideo === 1) : []
  })

  const dispatch = useDispatch()

  const sideEffects = () => {

    dispatch(fetchAllMedia())
    dispatch(fetchRandomVideo())
  }
  React.useEffect(sideEffects, [])

  // console.log(videos[0].mediaUrl)
  return (
    <>
      <div id="media">
        <div className="container text-center">
          <div className="row">
            <div className="col">
              <h1>MEDIA</h1>
            </div>
          </div>

          {/*video player*/}

          <div className="card-deck row">
            {videos && (
              <div className="col-md-6 offset-md-3 pb-4">
                <ReactPlayer
                  width="100%"
                  height="100%"
                  url={videos.mediaUrl}
                  controls={true}
                />
              </div>
            )}
          </div>

               {/*Images*/}

          <div className="row images">
            {media.slice(3, 35).map(mediaItem => <MediaCard mediaItem={mediaItem} key={mediaItem.mediaId}/>)}
          </div>
        </div>
      </div>
    </>
  )
}

