import React from 'react';
import { Link } from 'react-router-dom';
//ReactComponent  tells the react app that we want a React component that renders a SVG, rather than its file name.
import { ReactComponent as Logo } from '../../assets/crown.svg'
import { auth } from '../../firebase/firebase.utils';

import './header.styles.scss';

export default function Header({user}) {
  return (
    <div className='header'>
      <Link to='/' className='logo-container' >
        <Logo className='logo'/>
      </Link>
      <div className='options'>
        <Link to='/shop' className='option'>
          SHOP
        </Link>
        <Link to='/shop' className='option'>
        CONTACT
        </Link>
        {
          user ?
            <div className='option' onClick={()=> auth.signOut()}> SIGN OUT</div>
            :
            <Link className="option" to='/signin'>SIGN IN</Link>
        }
      </div>
    </div>
  )
}
