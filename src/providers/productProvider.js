import { products } from "./productsProvider";

export async function getMockedProductById(productId) {
  try {
    let p;

    products.map((productList) => {
      const item = productList.products.find((item) => item.id === productId);
      if (!p && item) p = item;
    });
    return Promise.resolve(p);
  } catch (e) {
    return Promise.reject(e);
  }
}
