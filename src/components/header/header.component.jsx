import React from 'react';
import { Link } from 'react-router-dom';
//ReactComponent  tells the react app that we want a React component that renders a SVG, rather than its file name.
import { ReactComponent as Logo } from '../../assets/crown.svg';
import { auth } from '../../firebase/firebase.utils';
//higher order component that lets us modify our components with redux
import { connect } from 'react-redux';
import CartIcon from '../cart-icon/cart-icon.component';
import CartDropdown from '../cart-dropdown/cart-dropdown.component';


import './header.styles.scss';


const Header = ({ currentUser, hidden }) => (
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
        currentUser && currentUser.userAuth !== null ?
          <div className='option' onClick={() => auth.signOut()}> SIGN OUT</div>
          :
          <Link className="option" to='/signin'>SIGN IN</Link>
      }
      <CartIcon/>
    </div>
    {
      hidden ?
        null
        :
      <CartDropdown />
    }
    </div>
  );

//this function gets the state from our redux
//below I destruct the nested props, getting the currentUser value and hidden value directly
const mapStateToProps = ({user: {currentUser}, cart: {hidden}}) => ({
  currentUser,
  hidden
});

  
//this  connect(mapStateToProps)(Header) coneects the props we recieved and the component
export default connect(mapStateToProps)(Header);
