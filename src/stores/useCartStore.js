import { create } from "zustand";

const useCartStore = create((set) => ({
  cart: [],
  productQuantity: 0,
  totalPrice: 0,
  updateProductQuantity: (id, isAdding) =>
    set((state) => {
      const product = state.cart.find((item) => item.id === id);
      if (!product) {
        handleQuantityError();
      }
      const newCart = state.cart.map((item) =>
        item.id === id
          ? {
              ...item,
              quantity: isAdding
                ? item.quantity + 1
                : Math.max(item.quantity - 1, 0),
            }
          : item
      );
      return {
        cart: newCart,
        productQuantity: calculateTotalQuantity(newCart),
        totalPrice: calculateTotalPrice(newCart),
      };
    }),

  addToCart: (product, quantity = 1) =>
    set((state) => {
      // est-ce que le produit existe déjà
      const existingProduct = state.cart.find((item) => item.id === product.id);
      const newCart = existingProduct
        ? // soui
          // pour chaque produit du panier
          state.cart.map((item) =>
            // si le produit est dans le panier
            item.id === product.id
              ? // on fait + 1 à sa quantité
                { ...item, quantity: item.quantity + quantity }
              : // sinon on retourne l'item
                item
          )
        : // si non, on retourne le panier actuel + le produit avec sa quantité à un
          [...state.cart, { ...product, quantity: quantity }];
      return {
        cart: newCart,
        productQuantity: calculateTotalQuantity(newCart),
        totalPrice: calculateTotalPrice(newCart),
      };
    }),

  removeFromCart: (productId) =>
    set((state) => {
      const newCart = state.cart.filter((item) => item.id !== productId);
      return {
        cart: newCart,
        productQuantity: calculateTotalQuantity(newCart),
        totalPrice: calculateTotalPrice(newCart),
      };
    }),

  clearCart: () =>
    set(() => {
      return {
        cart: [],
        productQuantity: 0,
      };
    }),
}));

function handleQuantityError() {
  throw new Error("Can't change the quantity product of an undefined product");
}

const calculateTotalQuantity = (cart) => {
  return cart.reduce((total, item) => total + item.quantity, 0);
};

const calculateTotalPrice = (cart) => {
  return cart.reduce((total, item) => total + item.price * item.quantity, 0);
};

export default useCartStore;
