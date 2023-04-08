import { getShoppingCart } from "../utilities/fakedb";

const cartProductsLoader = async () => {
  const loadedProducts = await fetch("products.json");
  const products = await loadedProducts.json();

  // if cart data is in database, you have to use async await
  const storedCart = getShoppingCart();
  // console.log(storedCart);
  const savedCart = [];

  //   console.log(products);
  for (const id in storedCart) {
    // console.log(id);
    const addedProduct = products.find((pd) => pd.id === id);
    // console.log(addedProduct);
    if (addedProduct) {
      const quantity = storedCart[id];
      addedProduct.quantity = quantity;
      savedCart.push(addedProduct);
    }
  }
  // if you need to send two things..
  //   return [products, savedCart];

  // another option is:
  // return {products, cart = savedCart}

  return savedCart;
};

export default cartProductsLoader;
