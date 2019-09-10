import {
  CART_ADD,
  CART_REMOVE,
  CART_SAVE
} from '../actions/actionTypes';

const initialState = {
  lastId: 0,
  cart: JSON.parse(localStorage.getItem('cart')) || [],
}

export default function cartReducer(state = initialState, action) {
  switch (action.type) {
    case CART_ADD:
      let nextId = state.lastId + 1;
      return {
        ...state,
        lastId: nextId,
        cart: [
          ...state.cart,
          {
            id: nextId,
            code: action.product
          }
        ]
      }
    case CART_REMOVE:
      return {
        ...state, 
        cart : state.cart.filter((product) => {
          if(product.id !== action.productId) {
            return product;
          }
          return false;
        })
      }
      case CART_SAVE:
        localStorage.setItem('cart', JSON.stringify(state.cart));
        return {
          ...state,
        }
    default:
      return state
  }
}
