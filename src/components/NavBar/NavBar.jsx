import React from 'react';
import { Link } from 'react-router-dom';
import { AppBar, Button, Toolbar, Typography } from '@mui/material';
import { ROUTES } from '../../constants';

export const Navbar = () => (
  <AppBar position='static'>
    <Toolbar>
      <Typography
        variant='h6'
        style={{ flexGrow: 1 }}
      >
        Form generator
      </Typography>
      <Button
        color='inherit'
        component={Link}
        to={ROUTES.FORM_GENERATOR}
      >
        Builder
      </Button>
      <Button
        color='inherit'
        component={Link}
        to={ROUTES.FORM_RENDERER}
      >
        Renderer
      </Button>
    </Toolbar>
  </AppBar>
);

export default Navbar;
