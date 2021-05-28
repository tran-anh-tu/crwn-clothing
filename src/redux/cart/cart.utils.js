export const addItemToCart = (cartItems, cartItemToAdd) => {
  const existingCartItem = cartItems.find(i => i.id === cartItemToAdd.id)

  if (existingCartItem) {
    return cartItems.map(i => c.id === cartItemToAdd.id) ?
      {...i, quantity: i.quantity + 1} : i
  }

  return [...cartItems, {...cartItemToAdd, quantity: 1}]
}

export const removeItemFromCart = (cartItems, cartItemToRemove) => {
  const existingCartItem = cartItems.find(cartItem => cartItem.id === cartItemToRemove.id)
  if (existingCartItem && existingCartItem.quantity === 1) {
    return cartItems.filter(cartItem => cartItem.id !== cartItemToRemove.id)
  }

  return cartItems.map(
    cartItem => cartItem.id === cartItemToRemove.id ?
      {...cartItem, quantity: cartItem.quantity - 1} :
      cartItem
  )
}
