import React from 'react';
import Layout from '../components/Layout';
import Home from '../components/Home';
import { Container } from '@mui/material';

const HomePage = () => {
  return (
    <Layout>
      <Container>
        <Home />
      </Container>
    </Layout>
  );
};

export default HomePage;
