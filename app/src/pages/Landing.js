import React from 'react'
import ResponsiveEmbed from 'react-bootstrap/ResponsiveEmbed'


export function landing() {
  return (
  <>
    <div style={{ width: 660, height: 'auto' }}>
      <ResponsiveEmbed aspectRatio="16by9">
        <embed type="image/.jpg" src="/images/sky-space-dark-galaxy-2150.jpg" />
      </ResponsiveEmbed>
    </div>
  </>
  )
}