import React from 'react'
import './custom-button.styles.scss';

//in the line below we add different props that will allow the button variation depending on what is passed to it
export default function CustomButton({children, isGoogleSignIn, inverted, ...otherProps }) {
  return (
    //here I set a dinamic className using a logical conjunction
    //if the button recieves isGoogleSignIn then 'google-sign-in' is added to the classNames
    <button
      className={`${inverted ? 'inverted': ''}
      ${isGoogleSignIn ? 'google-sign-in' : ''} custom-button`}
      {...otherProps}
    >
      {
        /*the children props below will display any text written in the CustomButton tag*/
        children
      }
    </button>
  )
}
