import React, { useState, useContext } from 'react';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import { Container, Typography, Button } from '@mui/material';
import { CartContext } from '../context/CartContext';
import CheckoutForm from './CheckoutForm'; // Import the modal CheckoutForm

const stripePromise = loadStripe(import.meta.env.VITE_STRIPE_PUBLISHABLE_KEY);

function PaymentForm() {
  const { cartItems, cartSize, totalAmount } = useContext(CartContext);
  const [openModal, setOpenModal] = useState(false);

  const handleOpenModal = () => {
    setOpenModal(true);
  };

  const handleCloseModal = () => {
    setOpenModal(false);
  };

  return (
    <Elements stripe={stripePromise}>
      <Container>
        <div className='my-5'>
          <Typography variant='h4'>Payment Gateway</Typography>
          <Typography variant='h6'>{ totalAmount }</Typography>
          <Button variant="contained" color="primary" onClick={handleOpenModal}>
            Open Checkout
          </Button>
          <Elements stripe={stripePromise}>
            <CheckoutForm cartTotal={totalAmount} open={openModal} onClose={handleCloseModal} />
        </Elements>
        </div>
      </Container>
    </Elements>
  );
}

export default PaymentForm;
