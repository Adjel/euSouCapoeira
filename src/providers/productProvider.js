import { products } from "./productsProvider";

export function getMockedProductById(productId) {
  let p;

  products.map((productList) => {
    const item = productList.products.find((item) => item.id === productId);
    if (!p && item) p = item;
  });
  return p ?? handleProductNotFound();
}

const handleProductNotFound = () => {
  // Todo: get a way to push the error to dev logs like firebase crashlytics
  return null;
};
