import React from 'react'
import './menu-item.styles.scss'

export default function MenuItem({title, imageUrl, size}) {
  return (
    // below I add style to the component so that I can give it dynamic styling properties
    <div
      // Here I give it two different class names
      // if there is a size prop it will change its styling
      className={`${size} menu-item`}>
      <div
      className='background-image'
        style={{
        backgroundImage: `url(${imageUrl})`
      }}
      ></div>
          <div className='content'>
            <h1 className='title'>{title.toUpperCase()}</h1>
            <span className='subtitle'>SHOP NOW</span>
          </div>
        </div>
  )
}
