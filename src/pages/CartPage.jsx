import React, { useContext, useState } from 'react';
import Layout from '../components/Layout';
import { Container, Box, Grid, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Typography, Button } from '@mui/material';
import { CartContext } from '../context/CartContext';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import StripeContainer from '../components/StripeContainer';
import CustomModal from '../components/ModalComponent';
import ReceiptIcon from '@mui/icons-material/Receipt';
import jsPDF from 'jspdf';
import html2pdf from 'html2pdf.js';
import { toast } from 'react-toastify';
function CartPage() {
    const { cartItems, cartSize, totalAmount, paymentStatus } = useContext(CartContext);
    // const totalAmount = cartItems.reduce((total, item) => total + item.price * 1, 0);
    const [openModal, setOpenModal] = useState(false);

    const handleOpenModal = () => {
        setOpenModal(true);
    };

    const handleCloseModal = () => {
        setOpenModal(false);
    };

    const currentDate = new Date();
    const handleDownloadInvoice = () => {
        const invoiceContent = document.getElementById('invoice-content');

        // Generate PDF from HTML content using html2pdf
        html2pdf()
            .from(invoiceContent)
            .save('invoice.pdf');
        toast.success('Invoice downloaded successfully!');
    };



    return (
        <Layout>
            <Container>
                <div>
                    <div className='bg-[#6facf5] rounded-lg p-5 color-white my-3'>
                        <Typography variant="h5" gutterBottom>
                            <ShoppingCartIcon /> Your Cart
                        </Typography>

                    </div>
                    {cartSize > 0 ? (
                        <TableContainer component={Paper}>
                            <Table sx={{ minWidth: 650 }} aria-label="cart items table">
                                <TableHead>
                                    <TableRow>
                                        <TableCell><p style={{ fontWeight: '700' }}>Subject Code</p></TableCell>
                                        <TableCell><p style={{ fontWeight: '700' }}>Subject Name</p></TableCell>
                                        <TableCell align="right"><p style={{ fontWeight: '700' }}>Credit</p></TableCell>
                                        <TableCell align="right"><p style={{ fontWeight: '700' }}>Price</p></TableCell>
                                        <TableCell align="right"><p style={{ fontWeight: '700' }}>Quantity</p></TableCell>
                                        <TableCell align="right"><p style={{ fontWeight: '700' }}>Total</p></TableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    {cartItems.map((item) => (
                                        <TableRow key={item.id}>
                                            <TableCell component="th" scope="row">
                                                {item.code}
                                            </TableCell>
                                            <TableCell >{item.name}</TableCell>
                                            <TableCell align="right">{item.credit}</TableCell>
                                            <TableCell align="right">{item.price}</TableCell>
                                            <TableCell align="right">1</TableCell>
                                            <TableCell align="right">{item.price * 1}</TableCell>
                                        </TableRow>
                                    ))}
                                </TableBody>
                            </Table>
                        </TableContainer>
                    ) : (<Typography variant="h6" gutterBottom>No Courses Added</Typography>)}
                    {cartSize > 0 && (
                        <div className="my-3">
                            <Grid container justifyContent="flex-end">
                                <Grid item xs={6} md={4}>
                                    <Typography variant="h4" gutterBottom align="right">
                                        Order Summary
                                    </Typography>
                                    <Typography variant="body1" gutterBottom align="right" >
                                        Total Amount: £{totalAmount}
                                    </Typography>
                                    <Box align="right">
                                        {typeof paymentStatus.id !== 'undefined' ? (
                                            <>
                                                <Button variant="contained" color="primary" onClick={handleDownloadInvoice}>
                                                    Download Invoice <ReceiptIcon />
                                                </Button>
                                            </>
                                        ) : (
                                            <>
                                                <Button variant="contained" color="success" onClick={handleOpenModal}>
                                                    Proceed to Checkout <ArrowForwardIcon />
                                                </Button>
                                                <CustomModal open={openModal} onClose={handleCloseModal}>
                                                    <StripeContainer totalAmount={totalAmount} />
                                                </CustomModal>
                                            </>
                                        )}
                                    </Box>


                                </Grid>
                            </Grid>

                        </div>
                    )}
                </div>
                {typeof paymentStatus.id !== 'undefined' ? (
                    <div id="invoice-content" className='p-8'>
                    <div className='text-center align-items-center'>
                        <Typography variant="h5" gutterBottom>
                            INVOICE
                        </Typography>
                        <Typography variant="h6" gutterBottom>
                            <u>
                            Exam Registration

                            </u>
                        </Typography>
                    </div>
                    <div className="flex justify-between flex-row">
                    <div className='flex flex-start flex-col'>
                        <Typography variant="body2" gutterBottom>
                            Name: {paymentStatus.billing_details.name}
                        </Typography>
                        <Typography variant="body2" gutterBottom>
                            Email: {paymentStatus.billing_details.email}
                        </Typography>
                        <Typography variant="body2" gutterBottom>
                            Phone: {paymentStatus.billing_details.phone}
                        </Typography>
                    </div>
                    <div className='flex flex-start flex-col'>
                        <Typography variant="body2" gutterBottom>
                            Date: {currentDate.toLocaleDateString()}
                        </Typography>
                        <Typography variant="body2" gutterBottom>
                            Time: {currentDate.toLocaleTimeString()}
                        </Typography>
                    </div>
                    </div>
                    {/* Render your table here */}
                    <TableContainer component={Paper}>
                        <Table sx={{ minWidth: 650 }} aria-label="cart items table">
                            <TableHead>
                                <TableRow>
                                    <TableCell><p style={{ fontWeight: '700' }}>Subject Code</p></TableCell>
                                    <TableCell><p style={{ fontWeight: '700' }}>Subject Name</p></TableCell>
                                    <TableCell align="right"><p style={{ fontWeight: '700' }}>Credit</p></TableCell>
                                    <TableCell align="right"><p style={{ fontWeight: '700' }}>Price</p></TableCell>
                                    <TableCell align="right"><p style={{ fontWeight: '700' }}>Quantity</p></TableCell>
                                    <TableCell align="right"><p style={{ fontWeight: '700' }}>Total</p></TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {cartItems.map((item) => (
                                    <TableRow key={item.id}>
                                        <TableCell component="th" scope="row">
                                            {item.code}
                                        </TableCell>
                                        <TableCell >{item.name}</TableCell>
                                        <TableCell align="right">{item.credit}</TableCell>
                                        <TableCell align="right">{item.price}</TableCell>
                                        <TableCell align="right">1</TableCell>
                                        <TableCell align="right">{item.price * 1}</TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </TableContainer>
                    <div className='mt-3'>
                        <Typography variant="body1" align='right' gutterBottom>
                            Paid Amount: £{totalAmount}
                        </Typography>
                        <Typography variant="body1" align='right' gutterBottom>
                            Taxes: £ 0.0
                        </Typography>
                        <Typography variant="body1" align='right' gutterBottom>
                            Platform Charges: £ 0.3
                        </Typography>
                        <Typography variant="h6" align='right' gutterBottom>
                            Total Amount: £{totalAmount + 0.3}
                        </Typography>
                    </div>

                </div>
                ) : null}
                
            </Container>
        </Layout>
    );
}

export default CartPage;
