import { products } from "./productsProvider";

export function getMockedProductById(productId) {
  let p;
  console.log(productId);
  products.map((productList) => {
    console.log(productList);
    const item = productList.products.find((item) => item.id === productId);
    if (!p && item) p = item;
    console.log(item);
  });
  console.log(p);
  return p ?? handleError;
}

function handleError() {
  throw new Error("failed to find a product by id in productProvider");
}
