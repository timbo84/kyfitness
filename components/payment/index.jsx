import React, { useEffect } from "react";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import CheckoutForm from "../checkout";

const stripePromise = loadStripe(
  "pk_test_51QnUbt4YGDBpXQeTFA5gQQPoFN20bBnHQp6OX7oMupLO0kyXSch7k1UnhQvONzqy0Dqsziz45IWdVwuk7HpAWkeF00jel9xyrf"
);

const Payment = () => {
  useEffect(() => {
    const stripe = stripePromise;
    // You can now use the stripe instance to create payment elements
  }, []);

  return (
    <div className="container mt-5">
      <h1 className="text-center">Pay with Stripe</h1>
      <Elements stripe={stripePromise}>
        <CheckoutForm />
      </Elements>
    </div>
  );
};

export default Payment;
