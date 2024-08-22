import { create } from "zustand";
import { defaultProductEvals } from "@/providers/productEvaluationProvider";
import { fetchUserCommands } from "./useCommandsStore";

export const useEvalStore = create((set, get) => ({
  userCommandsWithEvals: [],

  getUserProductsAndEvals: async (user) => {
    try {
      const userProductList = await fetchUserCommands(user);

      const productsWithEvals = userProductList.map((product) => {
        const evals = get().getUserEvalsForProduct(user, product.id);
        return {
          ...product,
          ...evals,
        };
      });
      set({ userCommandsWithEvals: productsWithEvals });
    } catch (error) {
      throw new Error("Failed to fetch user products and evaluations", error);
    }
  },

  updateUserProductsAndEvals: (user) => {
    get().getUserProductsAndEvals(user);
  },

  getUserEvalsForProduct: (user, productId) => {
    const evals = get().getProductEvals(productId);

    const userComment = evals.comments.find(
      (comment) => comment.authorId === user.id
    );
    const userRate = evals.rates.find((rate) => rate.authorId === user.id);

    return {
      title: userComment?.title,
      comment: userComment?.comment,
      rate: userRate?.rate,
    };
  },

  getProductEvals: (productId = "") => {
    let productsEvals = JSON.parse(localStorage.getItem("productsEvals")) || [];

    // api mocked (user) evals
    let existingEval = productsEvals.find(
      (pEval) => pEval.productId === productId
    );

    // Get default mocked/constant evals
    const defaultEvals = defaultProductEvals.find(
      (pEval) => pEval.productId === productId
    );

    const evals = {
      productId: productId,
      comments: [
        ...(defaultEvals?.comments || []),
        ...(existingEval?.comments || []),
      ],
      rates: [...(defaultEvals?.rates || []), ...(existingEval?.rates || [])],
    };

    return evals;
  },

  getProductRates: (productId) => {
    let productsEvals = JSON.parse(localStorage.getItem("productsEvals")) || [];

    // api mocked (user) evals
    let existingEval = productsEvals.find(
      (pEval) => pEval.productId === productId
    );

    // Get default mocked/constant evals
    const defaultEvals = defaultProductEvals.find(
      (pEval) => pEval.productId === productId
    );

    const rates = [
      ...(defaultEvals?.rates || []),
      ...(existingEval?.rates || []),
    ];

    return rates;
  },

  updateEval: (user, productId, title = "", comment = "", note) => {
    let existingEval;
    let productsEvals = JSON.parse(localStorage.getItem("productsEvals")) || [];

    // TODO: USE eval ID too reinforce
    existingEval = productsEvals.find((pEval) => pEval.productId === productId);

    if (!existingEval) {
      existingEval = get().createEval(user, productId, title, comment, note);
      productsEvals.push(existingEval);
    } else {
      existingEval = get().updateEvalRates(existingEval, user, note);
      existingEval = get().updateEvalComments(
        existingEval,
        user,
        title,
        comment,
        note
      );

      productsEvals = productsEvals.map((pEval) =>
        pEval.productId === productId ? existingEval : pEval
      );
    }

    localStorage.setItem("productsEvals", JSON.stringify(productsEvals));
    get().updateUserProductsAndEvals(user);
  },

  updateEvalRates: (currentEval, user, note) => {
    let newRate;
    newRate = {
      authorId: user.id,
      rate: note,
    };
    const exsitingRateIndex = currentEval.rates?.findIndex(
      (rate) => rate.authorId === user.id
    );
    if (exsitingRateIndex > -1) {
      currentEval.rates[exsitingRateIndex] = newRate;
    } else {
      currentEval.rates.push(newRate);
    }
    return currentEval;
  },

  updateEvalComments: (currentEval, user, title, comment, note) => {
    const newComment = {
      title: title,
      authorName: user.firstName,
      authorId: user.id,
      date: new Date(),
      rating: note,
      comment: comment,
    };

    const existingCommentIndex = currentEval.comments?.findIndex(
      (comment) => comment.authorId === user.id
    );

    if (existingCommentIndex > -1) {
      currentEval.comments[existingCommentIndex] = newComment;
    } else {
      currentEval.comments.push(newComment);
    }

    return currentEval;
  },
  createEval: (user, productId, title, comment, note) => {
    const newEval = {
      id: crypto.randomUUID(),
      productId: productId,
      comments: [
        {
          title: title,
          authorName: user.firstName,
          authorId: user.id,
          date: new Date(),
          rating: note,
          comment: comment,
        },
      ],
      rates: [
        {
          authorId: user.id,
          rate: note,
        },
      ],
    };

    return newEval;
  },
}));
