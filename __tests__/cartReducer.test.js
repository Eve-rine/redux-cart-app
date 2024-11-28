import cartReducer from '../src/redux/reducers/cartReducer';
import { ADD_TO_CART, REMOVE_FROM_CART, UPDATE_QUANTITY } from '../src/redux/actions/types';


describe('cartReducer', () => {
  const initialState = {
    items: [],
    total: 0
  };

  it('should return the initial state when no action is provided', () => {
    const result = cartReducer(undefined, {});
    expect(result).toEqual(initialState);
  });

  describe('ADD_TO_CART', () => {
    it('should add a new item to the cart', () => {
      const action = {
        type: ADD_TO_CART,
        payload: { id: 1, name: 'Item 1', price: 100 }
      };

      const result = cartReducer(initialState, action);

      expect(result.items).toHaveLength(1);
      expect(result.items[0]).toEqual({ id: 1, name: 'Item 1', price: 100, quantity: 1 });
      expect(result.total).toBe(100);
    });

    it('should increase the quantity of an existing item', () => {
      const state = {
        items: [{ id: 1, name: 'Item 1', price: 100, quantity: 1 }],
        total: 100
      };
      const action = {
        type: ADD_TO_CART,
        payload: { id: 1, name: 'Item 1', price: 100 }
      };

      const result = cartReducer(state, action);

      expect(result.items).toHaveLength(1);
      expect(result.items[0].quantity).toBe(2);
      expect(result.total).toBe(200);
    });

    it('should return the same state if payload is invalid', () => {
      const action = { type: ADD_TO_CART, payload: { id: null, price: undefined } };
      const result = cartReducer(initialState, action);
      expect(result).toEqual(initialState);
    });
  });

  describe('REMOVE_FROM_CART', () => {
    it('should remove an item from the cart', () => {
      const state = {
        items: [{ id: 1, name: 'Item 1', price: 100, quantity: 1 }],
        total: 100
      };
      const action = {
        type: REMOVE_FROM_CART,
        payload: 1
      };

      const result = cartReducer(state, action);

      expect(result.items).toHaveLength(0);
      expect(result.total).toBe(0);
    });

    it('should return the same state if the item to remove is not found', () => {
      const state = {
        items: [{ id: 1, name: 'Item 1', price: 100, quantity: 1 }],
        total: 100
      };
      const action = {
        type: REMOVE_FROM_CART,
        payload: 2
      };

      const result = cartReducer(state, action);

      expect(result).toEqual(state);
    });
  });

  describe('UPDATE_QUANTITY', () => {
    it('should update the quantity of an item', () => {
      const state = {
        items: [{ id: 1, name: 'Item 1', price: 100, quantity: 1 }],
        total: 100
      };
      const action = {
        type: UPDATE_QUANTITY,
        payload: { productId: 1, quantity: 3 }
      };

      const result = cartReducer(state, action);

      expect(result.items[0].quantity).toBe(3);
      expect(result.total).toBe(300);
    });

    it('should not update the quantity to a negative value', () => {
      const state = {
        items: [{ id: 1, name: 'Item 1', price: 100, quantity: 1 }],
        total: 100
      };
      const action = {
        type: UPDATE_QUANTITY,
        payload: { productId: 1, quantity: -1 }
      };

      const result = cartReducer(state, action);

      expect(result).toEqual(state);
    });

    it('should recalculate the total after updating quantities', () => {
      const state = {
        items: [
          { id: 1, name: 'Item 1', price: 100, quantity: 1 },
          { id: 2, name: 'Item 2', price: 50, quantity: 2 }
        ],
        total: 200
      };
      const action = {
        type: UPDATE_QUANTITY,
        payload: { productId: 2, quantity: 1 }
      };

      const result = cartReducer(state, action);

      expect(result.total).toBe(150);
    });
  });
});