import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { 
  List, 
  ListItem, 
  ListItemText, 
  ListItemAvatar, 
  Avatar, 
  IconButton, 
  Typography, 
  Box, 
  TextField 
} from '@mui/material';
import { 
  Add as AddIcon, 
  Remove as RemoveIcon, 
  Delete as DeleteIcon 
} from '@mui/icons-material';
import { 
  removeFromCart, 
  updateQuantity 
} from '../redux/actions/cartActions'

function Cart() {
  const { items, total } = useSelector(state => state.cart);
  const dispatch = useDispatch();

  const handleQuantityChange = (product, newQuantity) => {
    if (newQuantity >= 1) {
      dispatch(updateQuantity(product.id, newQuantity));
    }
  };

  const handleRemove = (productId) => {
    dispatch(removeFromCart(productId));
  };

  return (
    <Box style={{ width: '400px', padding: '20px', border: '1px solid #ddd' }}>
      <Typography variant="h5" gutterBottom>
        Shopping Cart
      </Typography>
      {items.length === 0 ? (
        <Typography variant="body2">Your cart is empty</Typography>
      ) : (
        <>
          <List>
            {items.map(product => (
              <ListItem 
                key={product.id} 
                secondaryAction={
                  <IconButton 
                    edge="end" 
                    onClick={() => handleRemove(product.id)}
                  >
                    <DeleteIcon />
                  </IconButton>
                }
              >
                <ListItemAvatar>
                  <Avatar src={product.image} alt={product.name} />
                </ListItemAvatar>
                <ListItemText
                  primary={product.name}
                  secondary={`$${product.price.toFixed(2)}`}
                />
                <Box display="flex" alignItems="center">
                  <IconButton 
                    onClick={() => handleQuantityChange(product, product.quantity - 1)}
                    disabled={product.quantity <= 1}
                  >
                    <RemoveIcon />
                  </IconButton>
                  <TextField
                    value={product.quantity}
                    type="number"
                    InputProps={{ 
                      readOnly: true,
                      style: { width: '50px', textAlign: 'center' } 
                    }}
                  />
                  <IconButton 
                    onClick={() => handleQuantityChange(product, product.quantity + 1)}
                  >
                    <AddIcon />
                  </IconButton>
                </Box>
              </ListItem>
            ))}
          </List>
          <Typography variant="h6" style={{ marginTop: '20px' }}>
            Total: ${total.toFixed(2)}
          </Typography>
        </>
      )}
    </Box>
  );
}

export default Cart;