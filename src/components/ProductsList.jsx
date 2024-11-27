import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { 
  Grid, 
  Card, 
  CardMedia, 
  CardContent, 
  Typography, 
  Button, 
  CardActions 
} from '@mui/material';
import { addToCart } from '../redux/actions/cartActions'

function ProductList() {
  const products = useSelector(state => state.products.items);
  const dispatch = useDispatch();

  const handleAddToCart = (product) => {
    dispatch(addToCart(product));
  };

  return (
    <Grid container spacing={3} style={{ flex: 1, marginRight: '20px' }}>
      {products.map(product => (
        <Grid item xs={12} sm={6} md={4} key={product.id}>
          <Card>
            <CardMedia
              component="img"
              height="200"
              image={product.image}
              alt={product.name}
            />
            <CardContent>
              <Typography variant="h6">{product.name}</Typography>
              <Typography variant="body2" color="text.secondary">
                ${product.price.toFixed(2)}
              </Typography>
            </CardContent>
            <CardActions>
              <Button 
                size="small" 
                color="primary" 
                onClick={() => handleAddToCart(product)}
              >
                Add to Cart
              </Button>
            </CardActions>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
}

export default ProductList;