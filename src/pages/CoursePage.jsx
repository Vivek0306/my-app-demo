import React, { useContext, useState, useEffect } from 'react';
import Layout from '../components/Layout';
import Course from '../components/Course';
import { Container, Typography, Paper, Box } from '@mui/material';
import igcse from '../constants/cambridge-igcse.json';
import as from '../constants/cambridge-as.json';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { CartContext } from '../context/CartContext';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { Link } from 'react-router-dom';
const CoursePage = () => {
    const [subject, setSubject] = React.useState('');
    const [rows, setRows] = React.useState(igcse.subjects);
    const [title, setTitle] = React.useState('Cambridge IGCSE Subjects');
    const [cartSize, setCartSize] = useState(0);


    const { cartItems } = useContext(CartContext);

    React.useEffect(() => {
        setCartSize(cartItems.length);
    }, [cartItems]);

    const handleChange = (event) => {
        setSubject(event.target.value);
    };
    React.useEffect(() => {
        console.log("Subject changed:", subject);
        if (subject === "IGCSE") {
            setRows(igcse.subjects);
            setTitle("Cambridge IGCSE Subjects");
        }
        else if (subject === "AS") {
            setRows(as.subjects);
            setTitle("Cambridge AS Level Subjects");
        }
        else if (subject === "A") {
            setRows(as.subjects);
            setTitle("Cambridge A Level Subjects");
        }

    }, [subject]);
    return (
        <Layout>
            <Container >
                <Box my={5} elevation={5}>
                    <div className='bg-[#6facf5] rounded-lg p-5 color-white'>
                        <Typography variant="h5" gutterBottom>
                            Student Exam Registration
                        </Typography>
                        <Box>
                            <FormControl sx={{ m: 1, minWidth: 300 }} >
                                <InputLabel id="demo-select-small-label">Select Examination Level</InputLabel>
                                <Select
                                    labelId="demo-select-small-label"
                                    id="demo-select-small"
                                    value={subject}
                                    label="Select Category"
                                    onChange={handleChange}
                                >
                                    <MenuItem value="">
                                        <em>None</em>
                                    </MenuItem>
                                    <MenuItem value={"IGCSE"}>IGCSE</MenuItem>
                                    <MenuItem value={"AS"}>AS</MenuItem>
                                    <MenuItem value={"A"}>A</MenuItem>
                                </Select>
                            </FormControl>
                        </Box>
                    </div>
                    {cartSize > 0 ? (
                        <div className='bg-[#198754] rounded-lg p-5 color-white my-2'>
                            <Link to='/cart'>
                                <Typography variant='h6'>Procced to checkout <ArrowForwardIcon /></Typography>
                            </Link>
                        </div>
                    ) : null}

                </Box>

                <Course rows={rows} title={title} />
            </Container>
        </Layout >
    );
};

export default CoursePage;
