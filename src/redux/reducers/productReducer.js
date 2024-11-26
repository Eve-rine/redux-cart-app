const initialState = {
    items: [
      { id: 1, name: 'Laptop', price: 999.99, image: '/laptop.jpg' },
      { id: 2, name: 'Smartphone', price: 599.99, image: '/phone.jpg' },
      { id: 3, name: 'Headphones', price: 199.99, image: '/headphones.jpg' },
    ]
  };
  
  const productsReducer = (state = initialState, action) => {
    return state;
  };
  
  export default productsReducer;