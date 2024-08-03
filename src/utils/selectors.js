

export const selectCartItems = (state) => state.cart.items;

export const selectTotalBill = (state) => {
  const items = state.cart.items || []; // Ensure items is initialized
  let total = 0;
  items.forEach(item => {
    const price = parseFloat(item.price);
    const quantity = parseInt(item.quantity, 10);
    if (!isNaN(price) && !isNaN(quantity)) {
      total += price * quantity;
    }
  });
  const gst = 39; // Fixed GST
  const serviceCharge = 20; // Fixed Service Charge
  return total + gst + serviceCharge;
};
