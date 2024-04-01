import React, {useContext} from 'react'
import { styled } from '@mui/material/styles';
import { Container, Box, Grid, Paper, Card, CardMedia, CardContent, List, ListItem, ListItemText, ListItemButton, ListItemIcon, Button } from '@mui/material'
import Typography from '@mui/material/Typography'
import Sidebar from './Sidebar';
import ProfileImg from '../assets/profile1.png'
import CoursesImg from '../assets/courses.png'
import FolderIcon from '@mui/icons-material/Folder';
import CampaignIcon from '@mui/icons-material/Campaign';
import { CartContext } from '../context/CartContext';
import { Link } from 'react-router-dom';

function Profile() {
    const { registeredCourses } = useContext(CartContext);
    return (
        <div className='flex flex-col border-double border-4 border-sky-500 md:min-h-[90%] m-2 md:m-5 p-2 md:p-5' >
            <div>
                <Typography variant='h3'>Welcome User!</Typography>
            </div>
            <div className='grid grid-cols-2 gap-5'>
                <div className='border-solid border-2 border-sky-500 m-5 md:min-h-60 rounded-lg flex items-start justify-content-center flex-col col-span-2 md:col-span-1'>
                    <div className='border-b-2 min-w-full border-stone-950'>
                        <Typography variant='h5' p={1}>Welcome</Typography>
                    </div>
                    <div className='mt-[18px] flex p-4 items-center justify-content-center flex-row gap-[28px] '>
                        <div>
                            <img src={ProfileImg} style={{ height: '100px', borderRadius: '10px' }} alt="" />
                        </div>
                        <div>
                            <Typography variant='h5'>John Doe</Typography>
                            <Typography variant='body'>johndoe@gmail.com</Typography>
                            <br />      
                            <Typography variant='body'>+965 1231 8989 123</Typography>
                        </div>
                    </div>

                </div>
                <div className='border-solid border-2 border-sky-500 m-5 md:min-h-60 rounded-lg flex items-start justify-content-center flex-col col-span-2 md:col-span-1'>
                <div className='border-b-2 min-w-full border-stone-950'>
                        <Typography variant='h5' p={1}>Course Details</Typography>
                    </div>
                    <div className="flex items-center justify-content-center flex-row p-4 gap-[28px]">
                        <div>
                            <img src={CoursesImg} style={{ height: '80px', borderRadius: '10px' }} alt="" />
                        </div>
                        <div>
                            <Typography variant='h5'>Registered Courses</Typography>
                            {registeredCourses.length > 0 ? ( 
                            <List>
                                {registeredCourses.map((item) => (
                                        <ListItem>
                                        <ListItemIcon>
                                            <FolderIcon />
                                        </ListItemIcon>
                                        <ListItemText
                                            primary={item.name}
                                            secondary={item.code}
                                        />
                                    </ListItem>
                                ))}
                            </List>) : <>
                                <Typography variant='body'>No Courses Registered</Typography>
                            </>}
                            
                            <div className='cursor-pointer'>
                                <Link to='/course'>
                                    <Button variant='contained' color='success' size='small'>
                                    Add New Courses +
                                    </Button>
                                 
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='grid grid-cols-1'>
            <div className='border-solid border-2 border-red-600 m-5 min-h-32 rounded-lg flex items-start justify-content-center flex-col' >
                <div className='border-b-2 min-w-full border-stone-950'>
                    <Typography variant='h5' p={1}>Alerts</Typography>
                </div>
                <div className='p-4 flex flex-col'>
                    <Typography variant='body'><CampaignIcon />New Course Published</Typography>
                    <Typography variant='body'><CampaignIcon />Reduced Prices for AFT - 101</Typography>
                    <Typography variant='body'><CampaignIcon />Final exam tentative dates announced</Typography>
                </div>
            </div>
            </div>
        </div>
    )
}

export default Profile