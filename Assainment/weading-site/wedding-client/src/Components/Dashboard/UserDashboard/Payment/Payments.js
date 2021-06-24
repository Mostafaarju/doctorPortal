import React from 'react';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import SimpleCart from './SimpleCart';
// import SpiltForm from './SpiltForm';

// Make sure to call `loadStripe` outside of a component’s render to avoid
// recreating the `Stripe` object on every render.
const stripePromise = loadStripe(

    'pk_test_51IeOhUAh86RT3e6rUnCHpJdTzD6bKByKy0FlsaxGmmG0Ce2g0EYvkm5jjsJT0qH0EoHXLSsyxbbdPy1VhIJp98RQ00JW35lKxd'
);

const Payments = ({ handlePayment }) => {

    return (
        <Elements stripe={stripePromise}>
            <h3>Pay With</h3>

            <SimpleCart handlePayment={handlePayment}></SimpleCart>
            {/* <SpiltForm handlePayment={handlePayment}></SpiltForm> */}
        </Elements>
    );
};

export default Payments;