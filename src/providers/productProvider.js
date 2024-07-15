import { products } from "./productsProvider";

export function getMockedProductById(productId) {
  let p;
  products.map((productList) => {
    const item = productList.products.find((item) => item.id === productId);
    p = item;
  });
  return p ?? handleError;
}

function handleError() {
  throw new Error("failed to find a product by id in productProvider");
}
