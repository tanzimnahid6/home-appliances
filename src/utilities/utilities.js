const addToDb = (id) => {
  let shoppingCart = {};
  const storedCart = localStorage.getItem("shopping-cart");
  if (storedCart) {
    shoppingCart = JSON.parse(storedCart);
  }
  let quantity = shoppingCart[id];
  if (!quantity) {
    quantity = 1;
    shoppingCart[id] = quantity;
  } else {
    const newQuantity = quantity + 1;
    shoppingCart[id] = newQuantity;
  }
  localStorage.setItem("shopping-cart", JSON.stringify(shoppingCart));
};

const getItemFromDB = () => {
  let shoppingCart = {};
  const storedCart = localStorage.getItem("shopping-cart");
  if (storedCart) {
    shoppingCart = JSON.parse(storedCart);
  }

  return shoppingCart;
};

const clearCart = () => {
  localStorage.clear();
};

export { addToDb, getItemFromDB, clearCart };
