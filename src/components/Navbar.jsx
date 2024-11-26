import React from 'react';
import { useSelector } from 'react-redux';
import { 
  AppBar, 
  Toolbar, 
  Typography, 
  Badge, 
  IconButton 
} from '@mui/material';
import { ShoppingCart as CartIcon } from '@mui/icons-material';

function Navbar() {
  const cartItemCount = useSelector(state => state.cart.items.reduce((total, item) => total + item.quantity, 0));

  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" style={{ flexGrow: 1 }}>
          Shopping Cart Demo
        </Typography>
        <IconButton color="inherit">
          <Badge badgeContent={cartItemCount} color="secondary">
            <CartIcon />
          </Badge>
        </IconButton>
      </Toolbar>
    </AppBar>
  );
}

export default Navbar;