import React, {useContext} from 'react'
import { styled } from '@mui/material/styles';
import { Container, Box, Grid, Paper, Card, CardMedia, CardContent, List, ListItem, ListItemText, ListItemButton, ListItemIcon } from '@mui/material'
import Typography from '@mui/material/Typography'
import Sidebar from './Sidebar';
import ProfileImg from '../assets/profile.png'
import CoursesImg from '../assets/courses.png'
import FolderIcon from '@mui/icons-material/Folder';
import CampaignIcon from '@mui/icons-material/Campaign';
import { CartContext } from '../context/CartContext';
import { Link } from 'react-router-dom';
function Home() {
    const { registeredCourses } = useContext(CartContext);
    return (
        <div className='flex flex-col border-double border-4 border-sky-500 md:min-h-[90%] m-2 md:m-5 p-2 md:p-5' >
            <div>
                <Typography variant='h3'>User Dashboard</Typography>
            </div>
            <div className='grid grid-cols-2 gap-5'>
                <div className='border-solid border-2 border-sky-500 m-5 md:min-h-60 rounded-lg flex items-start justify-content-center flex-col col-span-2 md:col-span-1'>
                    <div className='border-b-2 min-w-full border-stone-950'>
                        <Typography variant='h5' p={1}>Welcome</Typography>
                    </div>
                    <div className='mt-[50px] flex p-4 items-center justify-content-center flex-row gap-[28px] '>
                        <div>
                            <img src={ProfileImg} style={{ height: '100px', borderRadius: '10px' }} alt="" />
                        </div>
                        <div>
                            <Typography variant='h5'>Profile</Typography>
                            <Typography variant='body'>Click here to view Profile</Typography>
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
                                 Add New Courses +
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
                <div className='p-4'>
                    <Typography variant='body'><CampaignIcon /> No Recent Alerts</Typography>
                </div>
            </div>
            </div>
        </div>
    )
}

export default Home