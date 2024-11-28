import {
  ADD_TO_CART,
  REMOVE_FROM_CART,
  UPDATE_QUANTITY
} from '../actions/types';

const initialState = {
  items: [],
  total: 0
};

const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_CART: {
      if (!action.payload || !action.payload.id || typeof action.payload.price !== 'number') {
        return state;
      }
      const existingItemIndex = state.items.findIndex(
        item => item.id === action.payload.id
      );

      if (existingItemIndex > -1) {
        const updatedItems = [...state.items];
        updatedItems[existingItemIndex] = {
          ...updatedItems[existingItemIndex],
          quantity: updatedItems[existingItemIndex].quantity + 1
        };

        return {
          ...state,
          items: updatedItems,
          total: state.total + action.payload.price
        };
      }

      return {
        ...state,
        items: [
          ...state.items,
          { ...action.payload, quantity: 1 }
        ],
        total: state.total + action.payload.price
      };
    }

    case REMOVE_FROM_CART: {
      const itemToRemove = state.items.find(
        item => item.id === action.payload
      );

      if (!itemToRemove) {
        return state;
      }

      return {
        ...state,
        items: state.items.filter(item => item.id !== action.payload),
        total: state.total - (itemToRemove.price * itemToRemove.quantity)
      };
    }

    case UPDATE_QUANTITY: {

      const itemToUpdateIndex = state.items.findIndex(item => item.id === action.payload.id);
      if (itemToUpdateIndex === -1) {
        return state;
      }
      const updatedItem = {
        ...state.items[itemToUpdateIndex],
        quantity: Math.max(0, action.payload.quantity),
      };
      const updatedItems = [...state.items];
      updatedItems[itemToUpdateIndex] = updatedItem;
      return {
        ...state,
        items: updatedItems,
        total: updatedItems.reduce((sum, item) => sum + item.price * item.quantity, 0),
      };
    }

    default:
      return state;
  }
};

export default cartReducer;