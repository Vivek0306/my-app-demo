import React from 'react';
import { List, ListItem, ListItemIcon, ListItemText } from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';
import PersonIcon from '@mui/icons-material/Person';
import SettingsIcon from '@mui/icons-material/Settings';
import { Link } from 'react-router-dom'; // Assuming you are using React Router
import BookIcon from '@mui/icons-material/Book';

function Sidebar() {
  return (
    <div className="hidden md:block flex flex-col h-screen ">
      <List component="nav" className="flex flex-col flex-grow">
        <ListItem component={Link} to="/">
          <ListItemIcon>
            <HomeIcon />
          </ListItemIcon>
          <ListItemText primary="Home" />
        </ListItem>
        <ListItem component={Link} to="/course">
          <ListItemIcon>
            <BookIcon />
          </ListItemIcon>
          <ListItemText primary="Registration" />
        </ListItem>
        <ListItem button component={Link} to="/">
          <ListItemIcon>
            <PersonIcon />
          </ListItemIcon>
          <ListItemText primary="Profile" />
        </ListItem>
        <ListItem button component={Link} to="/">
          <ListItemIcon>
            <SettingsIcon />
          </ListItemIcon>
          <ListItemText primary="Settings" />
        </ListItem>
      </List>
    </div>
  );
}

export default Sidebar;
