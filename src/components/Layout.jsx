import React from 'react';
import Navbar from './Navbar';
import Sidebar from './Sidebar';
import { Grid } from '@mui/material';
import { ToastContainer, toast } from 'react-toastify';

const Layout = ({ children }) => {
  return (
    <div>
      <Navbar />
      <ToastContainer />
      <Grid container>
        <Grid item xs={12} md={2} >
          <Sidebar />
        </Grid>
        
        <Grid item md={10} xs={12}>
          {children}
        </Grid>
      </Grid>
    </div>
  );
};

export default Layout;
