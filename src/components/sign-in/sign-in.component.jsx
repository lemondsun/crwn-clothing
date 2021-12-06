import React, { Component } from 'react'
import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';

import { auth, signInWithGoogle } from '../../firebase/firebase.utils';

import './sign-in.styles.scss';

export default class SignIn extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      password: ''
    }
  }

  handleSubmit = async (e) => {
    e.preventDefault();

    //this destructors off the email and password from this.state
    const { email, password } = this.state;

    try {
      await auth.signInWithEmailAndPassword(email, password);
      this.setState({
        email: '',
        password: ''
      });
    } catch (error) {
      console.log(error);
    };

    this.setState({email:'',  password:''})
  };

  handleChange = (e) => {
    //this collects the name of the input as the user types and it collects the value and saves them
    const { value, name } = e.target;
    //here I set those values in state, taking the name and from the form and the inputed value 
    // saving them to state with each keystroke
    this.setState({[name]:value})
  };

  render() {
    return (
      <div className='sign-in'>
        <h2>I already have an account</h2>
        <span>Sign in with your email and password</span>

        <form onSubmit={this.handleSubmit}>
          <FormInput name='email' type='email' value={this.state.email} handleChange={this.handleChange} label='email' required />
         
          <FormInput name='password' type='password' value={this.state.password} handleChange={this.handleChange} label='password' required />
         
<div className='buttons'>
          <CustomButton type='submit'>
            Sign In
          </CustomButton>
       { /* below I add the property isGoogleSignIn so that the custom button can 
      use the prop to add to it's className, adjusting it's style
      It automatically passes a value of true
      */}
          <CustomButton onClick={signInWithGoogle}  isGoogleSignIn>
          Sign In With Google
        </CustomButton>
        </div>
        </form>
      </div>
    )
  }
}
