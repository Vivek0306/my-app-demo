import React from 'react';
import Layout from '../components/Layout';
import Profile from '../components/Profile';
import { Container } from '@mui/material';

const ProfilePage = () => {
  return (
    <Layout>
      <Container>
        <Profile />
      </Container>
    </Layout>
  );
};

export default ProfilePage;
