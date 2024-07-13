import { create } from "zustand";
import clothes from "../../public/fakeCatsImages/clothes.jpg";

const useCartStore = create((set) => ({
  //cart: [],
  cart: [
    {
      name: "Chaussure Capoeira - Rainha VL2500 -Blanc-rouge",
      image: clothes,
      alt: "",
      price: 55,
      rate: 3,
      rateNbr: 5,
      availability: "command",
      id: "333333333",
      date: new Date(),
      isBestSeller: false,
      quantity: 2,
      comments: [
        {
          author: "Laïa",
          date: new Date(),
          rating: 4,
          comment: "Bien bien",
        },
        {
          author: "Pixote",
          date: new Date(),
          rating: 2.5,
          comment: "Au top !",
        },
        {
          author: "Tanjiro",
          date: new Date(),
          rating: 3,
          comment: "Elles sont moins chères au Brésil nan ?",
        },
      ],
    },
    {
      name: "Chaussure Capoeira - Rainha VL2500 - Bleu-gris",
      image: clothes,
      alt: "",
      price: 57.79,
      rate: 2,
      rateNbr: 19,
      availability: "now",
      id: "12345456789",
      date: new Date(),
      isBestSeller: true,
      quantity: 1,
      comments: [
        {
          author: "goku",
          date: new Date(),
          rating: 4.5,
          comment: "Il sonne trop bien",
        },
        {
          author: "Pernalonga",
          date: new Date(),
          rating: 5,
          comment: "Top à l'aise",
        },
        {
          author: "Tanjiro",
          date: new Date(),
          rating: 3.5,
          comment: "Ca a l'air solide on verra avec le temps",
        },
      ],
    },
  ],
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

  addToCart: (product) =>
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
                { ...item, quantity: item.quantity + 1 }
              : // sinon on retourne l'item
                item
          )
        : // si non, on retourne le panier actuel + le produit avec sa quantité à un
          [...state.cart, { ...product, quantity: 1 }];
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
