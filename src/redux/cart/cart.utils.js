import CartItem from "../../components/cart-item/cart-item.component";

export const addItemToCart = (cartItems, cartItemToAdd) => {
  //if there is a cartItem.id that matches the ID of the item we are adding
  // it will save that item as an existingCartItem if not it will save existingCartItem as undefined 
  const existingCartItem = cartItems.find(
    cartItem => cartItem.id === cartItemToAdd.id
  );
  //if there is an existingCartItem loop through all the items 
  // and increase the quantity count for any items that match id
  if (existingCartItem) {
    return cartItems.map(cartItem =>
      cartItem.id === cartItemToAdd.id
        ? { ...cartItem, quantity: cartItem.quantity + 1 }
        : cartItem
    );
  };
  //this return will add quantity to any new item since the if block will not run
  return [...cartItems, {...cartItemToAdd, quantity: 1}]
};

export const removeItemFromCart = (cartItems, cartItemToRemove) => {
  const existingCartItem = cartItems.find(
    cartItem => cartItem.id === cartItemToRemove.id
  )

  if (existingCartItem.quantity === 1) {
    return cartItems.filter(cartItem => cartItem.id !== cartItemToRemove.id)
  };

  return cartItems.map(
    cartItem =>
      cartItem.id === cartItemToRemove.id ?
        { ...cartItem, quantity: cartItem.quantity - 1 }
        : cartItem
  );
};