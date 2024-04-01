import React, { useContext, useState } from 'react';
import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js';
import { Button, Typography, Box, TextField } from '@mui/material';
import { styled } from '@mui/system';
import { CartContext } from '../context/CartContext';
import successImg from '../assets/success.png';
import { toast } from 'react-toastify';
import stripeImg from '../assets/stripe.png';
const CheckoutFormContainer = styled('form')({
  maxWidth: '480px', // Adjust the width as needed
  margin: 'auto',
});

const StyledCardElement = styled(CardElement)({
  border: '1px solid #ccc',
  padding: '10px',
  borderRadius: '4px',
  marginBottom: '20px',
});

const CheckoutForm = ({ totalAmount }) => {
  const stripe = useStripe();
  const elements = useElements();
  const { paymentStatus, setPaymentStatus, clearCart } = useContext(CartContext);

  const [paymentDone, setPaymentDone] = useState(false);
  const [billingDetails, setBillingDetails] = useState({
    name: '',
    email: '',
    phone: '',
  });

  const handleChange = (e) => {
    setBillingDetails({ ...billingDetails, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!stripe || !elements) {
      return;
    }

    const cardElement = elements.getElement(CardElement);

    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: 'card',
      card: cardElement,
      billing_details: billingDetails, // Include billing details in payment method creation
    });

    if (error) {
      console.log('[error]', error);
      toast.error('Payment failed! Please try again.');
    } else {
      console.log('[PaymentMethod]', paymentMethod);
      setPaymentDone(true);
      setPaymentStatus(paymentMethod);
      toast.success('Payment successful!');
      // clearCart()
      // Handle payment success, e.g., send payment details to backend for processing
    }
  };

  return (
    <div>
      {paymentDone ? (
        <>
          <CheckoutFormContainer onSubmit={handleSubmit}>
            <img src={stripeImg} style={{ width: '90px', margin: 'auto', display: 'block' }} alt="" />
            <div className='text-center'>
              <Typography variant="h6" gutterBottom>
                Payment Gateway
              </Typography>
            </div>
            <img src={successImg} alt="success" style={{ width: '100px', margin: 'auto', display: 'block' }} />
            <Typography variant="h6" gutterBottom>Payment successful! </Typography>
            <Typography variant='body'>Payment ID: {paymentStatus.id}</Typography>
          </CheckoutFormContainer>

        </>
      ) : (
        <CheckoutFormContainer onSubmit={handleSubmit}>
          <img src={stripeImg} style={{ width: '90px', margin: 'auto', display: 'block' }} alt="" />
          <div className='text-center'>
            <Typography variant="h6" gutterBottom>
              Payment Gateway
            </Typography>
          </div>
          <TextField
            label="Name"
            variant="outlined"
            name="name"
            value={billingDetails.name}
            onChange={handleChange}
            fullWidth
            margin="normal"
          />
          <TextField
            label="Email"
            variant="outlined"
            type="email"
            name="email"
            value={billingDetails.email}
            onChange={handleChange}
            fullWidth
            margin="normal"
          />
          <TextField
            label="Phone Number"
            variant="outlined"
            type="tel"
            name="phone"
            value={billingDetails.phone}
            onChange={handleChange}
            fullWidth
            margin="normal"
          />
          <StyledCardElement />
          <Box textAlign="center">
            <Button type="submit" variant="contained" color="primary">
              Pay £{totalAmount + 0.3}
            </Button>
          </Box>
        </CheckoutFormContainer>
      )}
    </div>
  );
};

export default CheckoutForm;
