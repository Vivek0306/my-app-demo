import React from 'react';
import Layout from '../components/Layout';
import PaymentForm from '../components/PaymentForm';
import { Container } from '@mui/material';

const PaymentPage = () => {
  return (
    <Layout>
      <Container>
        <PaymentForm />
      </Container>
    </Layout>
  );
};

export default PaymentPage;
