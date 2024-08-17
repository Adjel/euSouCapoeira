import { defaultProductEvals } from "@/providers/productEvaluationProvider";

import { create } from "zustand";

export const useEvalStore = create((set, get) => ({
  productsEvals: [],
  productRates: [],

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
