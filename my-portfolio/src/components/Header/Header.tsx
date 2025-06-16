import React from 'react';
import { AppBar, Toolbar, Typography, Button } from '@mui/material';
import { NavLink } from 'react-router-dom';
import './Header.scss';

const Header: React.FC = () => {
  const navLinks = [
    { title: 'Головна', path: '/' },
    { title: 'TODO', path: '/todo' },
    { title: 'SWAPI', path: '/swapi' },
  ];

  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" style={{ flexGrow: 1 }}>
          Моє Портфоліо
        </Typography>
        {navLinks.map(link => (
          <Button
            key={link.path}
            color="inherit"
            component={NavLink}
            to={link.path}
            className='nav-button'
          >
            {link.title}
          </Button>
        ))}
      </Toolbar>
    </AppBar>
  );
};

export default Header;
