import productsReducer from '../src/redux/reducers/productReducer';

describe('productReducer', () => {
  const initialState = {
    items: [
      { id: 1, name: 'Laptop', price: 999.99, image: '/laptop.jpg' },
      { id: 2, name: 'Smartphone', price: 599.99, image: '/phone.jpg' },
      { id: 3, name: 'Headphones', price: 199.99, image: '/headphones.jpg' },
    ],
  };

  it('should return the initial state when called with undefined state', () => {
    const state = productsReducer(undefined, {});
    expect(state).toEqual(initialState);
  });

  it('should return the current state for an unknown action', () => {
    const currentState = {
      items: [
        { id: 1, name: 'Laptop', price: 999.99, image: '/laptop.jpg' },
        { id: 2, name: 'Smartphone', price: 599.99, image: '/phone.jpg' },
        { id: 3, name: 'Headphones', price: 199.99, image: '/headphones.jpg' },
      ],
    };

    const unknownAction = { type: 'UNKNOWN_ACTION' };
    const state = productsReducer(currentState, unknownAction);
    expect(state).toEqual(currentState);
  });
});
