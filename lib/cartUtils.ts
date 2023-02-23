export const calculateSubtotal = (cartProducts) => {
	const result = cartProducts.reduce((acc, cartProduct) => {
		return acc + cartProduct.price * cartProduct.qty;
	}, 0)
  return result;	
}

export const calculateOrderSubtotal = (orderItems) => {
	const result = orderItems.reduce((acc, item) => {
		return acc + item.price;
	}, 0)

	return result;
}