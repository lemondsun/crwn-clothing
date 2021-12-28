import { createSelector } from 'reselect';
//imput selector, saves state as variable
//drilled down for the cart state
const selectCart = state => state.cart;
//here we use that state to return the cartItems
export const selectCartItems = createSelector(
  [selectCart],
  (cart) => cart.cartItems
);

export const selectCartHidden = createSelector(
  [selectCart],
  cart => cart.hidden
);

//here we reduce the quantity values saved with each cartItem to produce a quantity count
//this will be export to the component that needs to display quantity 'cart-icon.component.jsx'
export const selectCartItemsCount = createSelector(
  [selectCartItems],
  cartItems =>
    cartItems.reduce(
      (accumaltedQuantity, cartItem) =>
        accumaltedQuantity + cartItem.quantity,
      0)
);

export const selectCartTotal = createSelector(
  [selectCartItems],
  cartItems =>
  cartItems.reduce(
    (accumaltedQuantity, cartItem) =>
      accumaltedQuantity + cartItem.quantity * cartItem.price,
    0)
)