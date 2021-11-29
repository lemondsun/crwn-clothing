import React from 'react'
import './custom-button.styles.scss';

export default function CustomButton({children, isGoogleSignIn, ...otherProps }) {
  return (
    //here I set a dinamic className using a logical conjunction
    //if the button recieves isGoogleSignIn then 'google-sign-in' is added to the classNames
    <button className={`${isGoogleSignIn ?'google-sign-in':''} custom-button`} {...otherProps}>
      {
        /*the children props below will display any text written in the CustomButton tag*/
        children
      }
    </button>
  )
}
