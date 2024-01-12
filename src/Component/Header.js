// Header.js
import React from 'react';
import { AppBar, Toolbar, Typography, IconButton, InputBase, Button } from '@mui/material';
import { Search, LocationOn, AccountCircle } from '@mui/icons-material';

const Header = () => {
  return (
    <AppBar position="static">
      <Toolbar>
        {/* Logo */}
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          Your Logo
        </Typography>

        {/* Location */}
        <IconButton color="inherit">
          <LocationOn />
        </IconButton>

        {/* Search */}
        <div sx={{ position: 'relative', borderRadius: 'borderRadius', backgroundColor: (theme) => theme.palette.common.white }}>
          <IconButton sx={{ p: '10px' }} color="inherit">
            <Search />
          </IconButton>
          <InputBase
            placeholder="Search…"
            sx={{ ml: 1, flex: 1 }}
            inputProps={{ 'aria-label': 'search' }}
          />
        </div>

        {/* Login/Sign Up Buttons */}
        <Button color="inherit">Login</Button>
        <Button color="inherit">Sign Up</Button>
        
        {/* Account Icon */}
        <IconButton color="inherit">
          <AccountCircle />
        </IconButton>
      </Toolbar>
    </AppBar>
  );
};



export default Header