import React from 'react';
import { useStripe, useElements, CardElement } from '@stripe/react-stripe-js';

const CheckoutForm = () => {
  const stripe = useStripe();
  const elements = useElements();

  const handleSubmit = async (event) => {
    event.preventDefault();

    console.log('Submitting payment');

    if (!stripe || !elements) {
      console.error('Stripe or elements not loaded');
      return;
    }

    const cardElement = elements.getElement(CardElement);

    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: 'card',
      card: cardElement,
    });

    if (error) {
      console.error('Stripe error:', error);
    } else {
      console.log('Payment method:', paymentMethod);
      // Handle the payment method here
    }
  };

  return (
    <form onSubmit={handleSubmit} className="card p-4 my-3">
      <div className="form-group mb-3">
        <label htmlFor="card-element" className="form-label">Credit or Debit Card</label>
        <CardElement id="card-element" className="form-control" />
      </div>
      <button type="submit" className="btn btn-primary">Pay</button>
    </form>
  );
};

export default CheckoutForm;
