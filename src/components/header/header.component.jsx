import React from 'react';
import { Link } from 'react-router-dom';
//ReactComponent  tells the react app that we want a React component that renders a SVG, rather than its file name.
import { ReactComponent as Logo } from '../../assets/crown.svg';
import { auth } from '../../firebase/firebase.utils';
//higher order component that lets us modify our components with redux
import { connect } from 'react-redux';

import './header.styles.scss';


 const Header = ({currentUser}) =>  (
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
          currentUser.userAuth !== null ?
            <div className='option' onClick={()=> auth.signOut()}> SIGN OUT</div>
            :
            <Link className="option" to='/signin'>SIGN IN</Link>
        }
      </div>
    </div>
  );

//this function gets the state from our redux
const mapStateToProps = (state) => ({
  currentUser: state.user.currentUser
});

  
//this  connect(mapStateToProps)(Header) coneects the props we recieved and the component
export default connect(mapStateToProps)(Header);
