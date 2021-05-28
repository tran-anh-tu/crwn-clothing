export const addItemToCart = (cartItems, cartItemToAdd) => {
  const existingCartItem = cartItems.find(i => i.id === cartItemToAdd.id)

  if (existingCartItem) {
    return cartItems.map(i => c.id === cartItemToAdd.id) ?
      {...i, quantity: i.quantity + 1} : i
  }

  return [...cartItems, {...cartItemToAdd, quantity: 1}]
}
