import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

export default function StripeCheckoutButton({ price }) {
  const priceForStripe = price * 100;
  const publishableKey = 'pk_test_51KEbROAojO3CrG1y3krfjkI99FAOG1Gwa6GHMEYrfEdTgQGi57woyBHLhpJaBKm8awv8V8PUaDjQbzYthswPD2Am00A97Z4NF2'

  const onToken = token => {
    console.log(token);
    alert('Payment Successful')
  }
  return (
    <StripeCheckout
      label='Pay Now'
      name='CRWN Clothing Ltd.'
      billingAddress
      shippingAddress
      image='https://svgshare.com/i/CUz.svg'
      description={`Your total is $${price}`}
      amount={priceForStripe}
      panelLabel='Pay Now'
      token={onToken}
      stripeKey={publishableKey}
    />
  );
};
