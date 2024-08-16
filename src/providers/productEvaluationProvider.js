export const updateEval = (user, productId, title = "", comment = "", note) => {
  let existingEval;
  let productsEvals = JSON.parse(localStorage.getItem("productsEvals")) || [];

  // TODO: USE eval ID too reinforce
  existingEval = productsEvals.find((pEval) => pEval.productId === productId);

  if (!existingEval) {
    console.log("create");
    existingEval = createEval(user, productId, title, comment, note);
    productsEvals.push(existingEval);
  } else {
    console.log(existingEval);
    console.log("found");

    existingEval = updateEvalRates(existingEval, user, note);
    existingEval = updateEvalComments(existingEval, user, title, comment, note);

    productsEvals = productsEvals.map((pEval) =>
      pEval.productId === productId ? existingEval : pEval
    );

    console.log(productsEvals);
  }

  localStorage.setItem("productsEvals", JSON.stringify(productsEvals));
};

const updateEvalRates = (currentEval, user, note) => {
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
};

const updateEvalComments = (currentEval, user, title, comment, note) => {
  console.log(note);
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

  console.log(existingCommentIndex);

  if (existingCommentIndex > -1) {
    currentEval.comments[existingCommentIndex] = newComment;
    console.log(currentEval);
  } else {
    currentEval.comments.push(newComment);
  }

  return currentEval;
};

const createEval = (user, productId, title, comment, note) => {
  console.log(note);
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
};

///////// FUNCTIONS TO EASILY GET PRODUCTS IN PRODUCT PROVIDER

export const getRates = (productId) => {
  const productEval = defaultProductEvals.find(
    (productEval) => productEval.productId === productId
  );

  return productEval.rates ?? [];
};
export const getComments = (productId) => {
  const productEval = defaultProductEvals.find(
    (productEval) => productEval.productId === productId
  );

  return productEval.comments ?? [];
};

const defaultProductEvals = [
  {
    productId: "12345456789",
    rates: [
      { authorId: "bcde71a8764f-36b8f84d-df4e-4d49-b662", rate: 5 },
      { authorId: "36b8f84d-df4e-4d49-b662-bcde71a8764f", rate: 4 },
      { authorId: "bcde71a8764f-36b8f84d-bcde71a8764f-36b8f84d", rate: 3 },
      { authorId: "aaaaaaaaaaaaaaaaaaaaaa", rate: 2 },
      { authorId: "bbbbbbbbbbbbbbbbbbbb", rate: 5 },
      { authorId: "ccccccccccccccccccccc", rate: 5 },
      { authorId: "ddddddddddddddddddddd", rate: 4 },
    ],
    comments: [
      {
        title: "YEah",
        authorName: "goku",
        authorId: "36b8f84d-df4e-4d49-b662-bcde71a8764f",
        date: new Date(),
        rating: 4,
        comment: "Il sonne trop bien",
      },
      {
        title: "J'aime",
        authorName: "Pernalonga",
        authorId: "bcde71a8764f-36b8f84d-df4e-4d49-b662",
        date: new Date(),
        rating: 5,
        comment: "Top à l'aise",
      },
      {
        title: "Ok à première vue",
        authorName: "Tanjiro",
        authorId: "bcde71a8764f-36b8f84d-bcde71a8764f-36b8f84d",
        date: new Date(),
        rating: 3,
        comment: "Ca a l'air solide on verra avec le temps",
      },
    ],
  },
  {
    productId: "123454",
    rates: [
      { authorId: "", rate: 3 },
      { authorId: "", rate: 4 },
      { authorId: "", rate: 5 },
      { authorId: "", rate: 2 },
      { authorId: "", rate: 5 },
      { authorId: "", rate: 5 },
      { authorId: "", rate: 4 },
    ],
    comments: [
      {
        title: "YEah",
        authorName: "goku",
        authorId: "",
        date: new Date(),
        rating: 3,
        comment: "Il sonne trop bien",
      },
      {
        title: "YEah",
        authorName: "Pernalonga",
        authorId: "",
        date: new Date(),
        rating: 3,
        comment: "Je n'arrive pas à l'accorder, comment faire ?",
      },
      {
        title: "YEah",
        authorName: "Tanjiro",
        authorId: "",
        date: new Date(),
        rating: 3,
        comment: "Cool, est-ce qu'il y a aussi des medios ?",
      },
    ],
  },
  {
    productId: "321454",
    rates: [
      { authorId: "", rate: 3 },
      { authorId: "", rate: 4 },
      { authorId: "", rate: 0 },
      { authorId: "", rate: 2 },
      { authorId: "", rate: 1 },
      { authorId: "", rate: 1 },
      { authorId: "", rate: 4 },
    ],
    comments: [
      {
        title: "YEah",
        authorName: "Laïa",
        authorId: "",
        date: new Date(),
        rating: 3,
        comment: "Il sonne vraiment bien",
      },
      {
        title: "YEah",
        authorName: "Pixote",
        authorId: "",
        date: new Date(),
        rating: 3,
        comment: "E bom !",
      },
      {
        title: "YEah",
        authorName: "Tanjiro",
        authorId: "",
        date: new Date(),
        rating: 3,
        comment: "Cool, est-ce qu'il y a aussi des medios ?",
      },
    ],
  },
  {
    productId: "12344409876",
    rates: [
      { authorId: "", rate: 3 },
      { authorId: "", rate: 4 },
      { authorId: "", rate: 5 },
      { authorId: "", rate: 2 },
      { authorId: "", rate: 5 },
      { authorId: "", rate: 5 },
      { authorId: "", rate: 4 },
    ],
    comments: [
      {
        title: "YEah",
        authorName: "Chama",
        authorId: "",
        date: new Date(),
        rating: 3,
        comment: "Super rapport qualité prix",
      },
      {
        title: "YEah",
        authorName: "Babalo",
        authorId: "",
        date: new Date(),
        rating: 3,
        comment: "J'aime pas'",
      },
      {
        title: "YEah",
        authorName: "Tanjiro",
        authorId: "",
        date: new Date(),
        rating: 3,
        comment: "Cool, est-ce qu'il y a aussi des medios ?",
      },
    ],
  },
  {
    productId: "111111112",
    rates: [
      { authorId: "", rate: 2 },
      { authorId: "", rate: 2 },
      { authorId: "", rate: 2 },
      { authorId: "", rate: 2 },
      { authorId: "", rate: 5 },
      { authorId: "", rate: 5 },
      { authorId: "", rate: 4 },
    ],
    comments: [
      {
        title: "Bien",
        authorName: "Laïa",
        authorId: "",
        date: new Date(),
        rating: 4,
        comment: "Bien bien",
      },
      {
        title: "Khaja",
        authorName: "Pixote",
        authorId: "",
        date: new Date(),
        rating: 2.5,
        comment: "Le top !",
      },
      {
        title: "Top !",
        authorName: "Tanjiro",
        authorId: "",
        date: new Date(),
        rating: 3,
        comment: "Elles sont moins chères au Brésil nan ?",
      },
    ],
  },
  {
    productId: "222222223",
    rates: [
      { authorId: "", rate: 3 },
      { authorId: "", rate: 5 },
      { authorId: "", rate: 3 },
      { authorId: "", rate: 2 },
      { authorId: "", rate: 5 },
      { authorId: "", rate: 5 },
      { authorId: "", rate: 3 },
    ],
    comments: [
      {
        title: "YEah",
        authorName: "Laïa",
        authorId: "",
        date: new Date(),
        rating: 4,
        comment: "Bien bien",
      },
      {
        title: "ouds",
        authorName: "Pixote",
        authorId: "",
        date: new Date(),
        rating: 2,
        comment: "Au top !",
      },
      {
        title: "Super",
        authorName: "Tanjiro",
        authorId: "",
        date: new Date(),
        rating: 3,
        comment: "Elles sont moins chères au Brésil nan ?",
      },
    ],
  },
  {
    productId: "3440066338822993",
    rates: [
      { authorId: "", rate: 3 },
      { authorId: "", rate: 4 },
      { authorId: "", rate: 5 },
      { authorId: "", rate: 2 },
      { authorId: "", rate: 5 },
      { authorId: "", rate: 5 },
      { authorId: "", rate: 4 },
    ],
    comments: [
      {
        title: "YEah",
        authorName: "Laïa",
        authorId: "",
        date: new Date(),
        rating: 4,
        comment: "Bien bien",
      },
      {
        title: "J'adore !",
        authorName: "Pixote",
        authorId: "",
        date: new Date(),
        rating: 2,
        comment: "Au top !",
      },
      {
        title: "Cool",
        authorNameName: "Tanjiro",
        authorId: "",
        date: new Date(),
        rating: 3,
        comment: "Elles sont moins chères au Brésil nan ?",
      },
    ],
  },
  {
    productId: "325476879801",
    rates: [
      { authorId: "", rate: 3 },
      { authorId: "", rate: 4 },
      { authorId: "", rate: 5 },
      { authorId: "", rate: 2 },
      { authorId: "", rate: 5 },
      { authorId: "", rate: 5 },
      { authorId: "", rate: 4 },
    ],
    comments: [
      {
        title: "YEah",
        authorName: "Laïa",
        authorId: "",
        date: new Date(),
        rating: 4,
        comment: "Bien bien",
      },
      {
        title: "J'adore !",
        authorName: "Pixote",
        authorId: "",
        date: new Date(),
        rating: 2,
        comment: "Au top !",
      },
      {
        title: "Cool",
        authorNameName: "Tanjiro",
        authorId: "",
        date: new Date(),
        rating: 3,
        comment: "Elles sont moins chères au Brésil nan ?",
      },
    ],
  },
  {
    productId: "333333333",
    rates: [
      { authorId: "", rate: 3 },
      { authorId: "", rate: 4 },
      { authorId: "", rate: 5 },
      { authorId: "", rate: 2 },
      { authorId: "", rate: 5 },
      { authorId: "", rate: 5 },
      { authorId: "", rate: 4 },
    ],
    comments: [
      {
        title: "YEah",
        authorName: "Laïa",
        authorId: "",
        date: new Date(),
        rating: 4,
        comment: "Bien bien",
      },
      {
        title: "J'adore !",
        authorName: "Pixote",
        authorId: "",
        date: new Date(),
        rating: 2,
        comment: "Au top !",
      },
      {
        title: "Cool",
        authorNameName: "Tanjiro",
        authorId: "",
        date: new Date(),
        rating: 3,
        comment: "Elles sont moins chères au Brésil nan ?",
      },
    ],
  },
  {
    productId: "7272727272727",
    rates: [
      { authorId: "", rate: 3 },
      { authorId: "", rate: 4 },
      { authorId: "", rate: 5 },
      { authorId: "", rate: 2 },
      { authorId: "", rate: 5 },
      { authorId: "", rate: 5 },
      { authorId: "", rate: 4 },
    ],
    comments: [
      {
        title: "YEah",
        authorName: "Laïa",
        authorId: "",
        date: new Date(),
        rating: 4,
        comment: "Bien bien",
      },
      {
        title: "J'adore !",
        authorName: "Pixote",
        authorId: "",
        date: new Date(),
        rating: 2,
        comment: "Au top !",
      },
      {
        title: "Cool",
        authorNameName: "Tanjiro",
        authorId: "",
        date: new Date(),
        rating: 3,
        comment: "Elles sont moins chères au Brésil nan ?",
      },
    ],
  },
  {
    productId: "12213443455465567667877898",
    rates: [
      { authorId: "", rate: 3 },
      { authorId: "", rate: 4 },
      { authorId: "", rate: 5 },
      { authorId: "", rate: 2 },
      { authorId: "", rate: 5 },
      { authorId: "", rate: 5 },
      { authorId: "", rate: 4 },
    ],
    comments: [
      {
        title: "YEah",
        authorName: "Laïa",
        authorId: "",
        date: new Date(),
        rating: 4,
        comment: "Bien bien",
      },
      {
        title: "J'adore !",
        authorName: "Pixote",
        authorId: "",
        date: new Date(),
        rating: 2,
        comment: "Au top !",
      },
      {
        title: "Cool",
        authorNameName: "Tanjiro",
        authorId: "",
        date: new Date(),
        rating: 3,
        comment: "Elles sont moins chères au Brésil nan ?",
      },
    ],
  },
  {
    productId: "720718392",
    rates: [
      { authorId: "", rate: 3 },
      { authorId: "", rate: 4 },
      { authorId: "", rate: 5 },
      { authorId: "", rate: 2 },
      { authorId: "", rate: 5 },
      { authorId: "", rate: 5 },
      { authorId: "", rate: 4 },
    ],
    comments: [
      {
        title: "YEah",
        authorName: "Laïa",
        authorId: "",
        date: new Date(),
        rating: 4,
        comment: "Bien bien",
      },
      {
        title: "J'adore !",
        authorName: "Pixote",
        authorId: "",
        date: new Date(),
        rating: 2,
        comment: "Au top !",
      },
      {
        title: "Cool",
        authorNameName: "Tanjiro",
        authorId: "",
        date: new Date(),
        rating: 3,
        comment: "Elles sont moins chères au Brésil nan ?",
      },
    ],
  },
  {
    productId: "113355779908642",
    rates: [
      { authorId: "", rate: 3 },
      { authorId: "", rate: 4 },
      { authorId: "", rate: 5 },
      { authorId: "", rate: 2 },
      { authorId: "", rate: 5 },
      { authorId: "", rate: 5 },
      { authorId: "", rate: 4 },
    ],
    comments: [
      {
        title: "YEah",
        authorName: "Laïa",
        authorId: "",
        date: new Date(),
        rating: 4,
        comment: "Bien bien",
      },
      {
        title: "J'adore !",
        authorName: "Pixote",
        authorId: "",
        date: new Date(),
        rating: 2,
        comment: "Au top !",
      },
      {
        title: "Cool",
        authorNameName: "Tanjiro",
        authorId: "",
        date: new Date(),
        rating: 3,
        comment: "Elles sont moins chères au Brésil nan ?",
      },
    ],
  },
  {
    productId: "32244556677883",
    rates: [
      { authorId: "", rate: 3 },
      { authorId: "", rate: 4 },
      { authorId: "", rate: 5 },
      { authorId: "", rate: 2 },
      { authorId: "", rate: 5 },
      { authorId: "", rate: 5 },
      { authorId: "", rate: 4 },
    ],
    comments: [
      {
        title: "YEah",
        authorName: "Laïa",
        authorId: "",
        date: new Date(),
        rating: 4,
        comment: "Bien bien",
      },
      {
        title: "J'adore !",
        authorName: "Pixote",
        authorId: "",
        date: new Date(),
        rating: 2,
        comment: "Au top !",
      },
      {
        title: "Cool",
        authorNameName: "Tanjiro",
        authorId: "",
        date: new Date(),
        rating: 3,
        comment: "Elles sont moins chères au Brésil nan ?",
      },
    ],
  },
  {
    productId: "135798642",
    rates: [
      { authorId: "", rate: 3 },
      { authorId: "", rate: 4 },
      { authorId: "", rate: 5 },
      { authorId: "", rate: 2 },
      { authorId: "", rate: 5 },
      { authorId: "", rate: 5 },
      { authorId: "", rate: 4 },
    ],
    comments: [
      {
        title: "YEah",
        authorName: "Laïa",
        authorId: "",
        date: new Date(),
        rating: 4,
        comment: "Bien bien",
      },
      {
        title: "J'adore !",
        authorName: "Pixote",
        authorId: "",
        date: new Date(),
        rating: 2,
        comment: "Au top !",
      },
      {
        title: "Cool",
        authorNameName: "Tanjiro",
        authorId: "",
        date: new Date(),
        rating: 3,
        comment: "Elles sont moins chères au Brésil nan ?",
      },
    ],
  },
  {
    productId: "8765433",
    rates: [
      { authorId: "", rate: 3 },
      { authorId: "", rate: 4 },
      { authorId: "", rate: 5 },
      { authorId: "", rate: 2 },
      { authorId: "", rate: 5 },
      { authorId: "", rate: 5 },
      { authorId: "", rate: 4 },
    ],
    comments: [
      {
        title: "YEah",
        authorName: "Laïa",
        authorId: "",
        date: new Date(),
        rating: 4,
        comment: "Bien bien",
      },
      {
        title: "J'adore !",
        authorName: "Pixote",
        authorId: "",
        date: new Date(),
        rating: 2,
        comment: "Au top !",
      },
      {
        title: "Cool",
        authorNameName: "Tanjiro",
        authorId: "",
        date: new Date(),
        rating: 3,
        comment: "Elles sont moins chères au Brésil nan ?",
      },
    ],
  },
  {
    productId: "3456783",
    rates: [
      { authorId: "", rate: 3 },
      { authorId: "", rate: 4 },
      { authorId: "", rate: 5 },
      { authorId: "", rate: 2 },
      { authorId: "", rate: 5 },
      { authorId: "", rate: 5 },
      { authorId: "", rate: 4 },
    ],
    comments: [
      {
        title: "YEah",
        authorName: "Laïa",
        authorId: "",
        date: new Date(),
        rating: 4,
        comment: "Bien bien",
      },
      {
        title: "J'adore !",
        authorName: "Pixote",
        authorId: "",
        date: new Date(),
        rating: 2,
        comment: "Au top !",
      },
      {
        title: "Cool",
        authorNameName: "Tanjiro",
        authorId: "",
        date: new Date(),
        rating: 3,
        comment: "Elles sont moins chères au Brésil nan ?",
      },
    ],
  },
  {
    productId: "987654321",
    rates: [
      { authorId: "", rate: 5 },
      { authorId: "", rate: 5 },
      { authorId: "", rate: 4 },
      { authorId: "", rate: 5 },
      { authorId: "", rate: 5 },
      { authorId: "", rate: 5 },
      { authorId: "", rate: 4 },
      { authorId: "", rate: 4 },
      { authorId: "", rate: 4 },
      { authorId: "", rate: 4 },
      { authorId: "", rate: 4 },
      { authorId: "", rate: 4 },
    ],
    comments: [
      {
        title: "YEah",
        authorName: "goku",
        authorId: "",
        date: new Date(),
        rating: 4,
        comment: "Il sonne trop bien",
      },
      {
        title: "J'aime",
        authorName: "Pernalonga",
        authorId: "",
        date: new Date(),
        rating: 5,
        comment: "Top à l'aise",
      },
      {
        title: "Ok à première vue",
        authorName: "Tanjiro",
        authorId: "",
        date: new Date(),
        rating: 3,
        comment: "Ca a l'air solide on verra avec le temps",
      },
    ],
  },
  {
    productId: "555577778888",
    rates: [
      { authorId: "", rate: 2 },
      { authorId: "", rate: 2 },
      { authorId: "", rate: 2 },
      { authorId: "", rate: 2 },
      { authorId: "", rate: 5 },
      { authorId: "", rate: 4 },
    ],
    comments: [
      {
        title: "Bien",
        authorName: "Laïa",
        authorId: "",
        date: new Date(),
        rating: 4,
        comment: "Bien bien",
      },
      {
        title: "Khaja",
        authorName: "Pixote",
        authorId: "",
        date: new Date(),
        rating: 2.5,
        comment: "Le top !",
      },
      {
        title: "Top !",
        authorName: "Tanjiro",
        authorId: "",
        date: new Date(),
        rating: 3,
        comment: "Elles sont moins chères au Brésil nan ?",
      },
    ],
  },
  {
    productId: "444466667777",
    rates: [
      { authorId: "", rate: 2 },
      { authorId: "", rate: 2 },
      { authorId: "", rate: 2 },
      { authorId: "", rate: 2 },
      { authorId: "", rate: 5 },
      { authorId: "", rate: 4 },
    ],
    comments: [
      {
        title: "Bien",
        authorName: "Laïa",
        authorId: "",
        date: new Date(),
        rating: 4,
        comment: "Bien bien",
      },
      {
        title: "Khaja",
        authorName: "Pixote",
        authorId: "",
        date: new Date(),
        rating: 2.5,
        comment: "Le top !",
      },
      {
        title: "Top !",
        authorName: "Tanjiro",
        authorId: "",
        date: new Date(),
        rating: 3,
        comment: "Elles sont moins chères au Brésil nan ?",
      },
    ],
  },
];
