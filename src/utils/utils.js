export const calculateTotalPrice = (cartItems) => {
    if (!Array.isArray(cartItems)) {
      return 0;
    }
    return cartItems.reduce((acc, item) => {
      const price = parseFloat(item.price);
      const quantity = parseInt(item.quantity, 10);
      console.log(`Item: ${item.name}, Price: ${item.price}, Quantity: ${item.quantity}`);
      if (!isNaN(price) && !isNaN(quantity)) {
        return acc + price * quantity;
      }
      return acc;
    }, 0);
  };
  