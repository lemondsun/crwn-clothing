import React from 'react';
import { withRouter } from 'react-router-dom';

import './menu-item.styles.scss';

const  MenuItem = ({title, imageUrl, size, history, linkUrl, match}) =>{
  return (
    <div
      //below we use the match from our history to ensure that the first part of the url matches the url currently
      //and the linkUrl follows to send us to the appropriate page
      onClick={()=> history.push(`${match.url}${linkUrl}`)}
      // Here I give it two different class names
      // if there is a size prop it will change its styling
      className={`${size} menu-item`}>
      <div
            // below I add style to the component so that I can give it dynamic styling properties
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
//Using withRouter gives use access to the history prop so that we wont have to pass history down through components that wont use them.
export default withRouter(MenuItem);