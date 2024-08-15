export const updateEval = (user, productId, title = "", comment = "", note) => {
  console.log(user, productId, comment);

  // je cherche dans toutes les evaluations si je trouve cette eval
  // je récupère toutes mes evals
  // je regarde si une eval a mon productId
  // si non je la crée et je l'ajoute à mes evals
  // si oui je la remplace (puisque j'ai déjà toutes ses infos

  // récupérer les données en storage ou array vide
  let productsEvals = JSON.parse(localStorage.getItem("productsEvals")) || [];

  console.log(productsEvals);

  // récupérer les données du produit en question
  let existingProductEval = productsEvals.find(
    (pEval) => pEval.productId === productId
  );

  console.log(existingProductEval);

  // soit on a une liste de commentaires
  // on recherche le com existant
  // si il existe
  // on vient modifier le com
  // on met a jour la liste
  // soit on en a pas on crée et on modifie la liste

  let comments;
  let rates;
  const newRate = { authId: user.id, rate: note };
  const newComment = {
    id: crypto.randomUUID(),
    title: title,
    authorName: user.firstName,
    authorId: user.id,
    date: new Date(),
    rating: note,
    comment: comment,
  };

  if (existingProductEval && existingProductEval.comments.length > 0) {
    let exsistingComment = existingProductEval.comments.find(
      (c) => c.authorId === user.id
    );

    exsistingComment = {
      ...exsistingComment,
      title: title,
      authorName: user.firstName,
      date: new Date(),
      comment: comment,
    };

    if (exsistingComment) {
      comments = existingProductEval.comments.map((c) =>
        c.authorId === user.id ? exsistingComment : c
      );
    } else {
      comments = [...comments, newComment];
    }

    exsistingNote = existingProductEval.comments.map(
      (r) => r.authId === user.id
    );

    if (!exsistingNote) {
      rates = [...rates, newRate];
    } else {
      rates = existingProductEval.rates.map((rate) =>
        rate.authId === user.id ? newRate : rate
      );
    }
  } else {
    comments = [newComment];
    rates = [newRate];
  }

  const newProductEval = {
    id: crypto.randomUUID(),
    productId: productId,
    rates: [{ authId: user.id, rate: note }],
    comments: comments,
  };

  if (productsEvals && productsEvals.length > 0) {
    productsEvals = productsEvals.map((pE) =>
      pE.productId === productId ? newProductEval : pE
    );
  } else {
    productsEvals = [newProductEval];
  }

  console.log(productsEvals);

  localStorage.setItem("productsEvals", JSON.stringify(productsEvals));
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
    id: crypto.randomUUID(),
    productId: "12345456789",
    rates: [
      { authId: "bcde71a8764f-36b8f84d-df4e-4d49-b662", rate: 5 },
      { authId: "36b8f84d-df4e-4d49-b662-bcde71a8764f", rate: 4 },
      { authId: "bcde71a8764f-36b8f84d-bcde71a8764f-36b8f84d", rate: 3 },
      { authId: "aaaaaaaaaaaaaaaaaaaaaa", rate: 2 },
      { authId: "bbbbbbbbbbbbbbbbbbbb", rate: 5 },
      { authId: "ccccccccccccccccccccc", rate: 5 },
      { authId: "ddddddddddddddddddddd", rate: 4 },
    ],
    comments: [
      {
        id: "121212",
        title: "YEah",
        authorName: "goku",
        authorId: "36b8f84d-df4e-4d49-b662-bcde71a8764f",
        date: new Date(),
        rating: 4,
        comment: "Il sonne trop bien",
      },
      {
        id: "111111",
        title: "J'aime",
        authorName: "Pernalonga",
        authorId: "bcde71a8764f-36b8f84d-df4e-4d49-b662",
        date: new Date(),
        rating: 5,
        comment: "Top à l'aise",
      },
      {
        id: "0101010",
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
    id: crypto.randomUUID(),
    productId: "123454",
    rates: [
      { authId: "", rate: 3 },
      { authId: "", rate: 4 },
      { authId: "", rate: 5 },
      { authId: "", rate: 2 },
      { authId: "", rate: 5 },
      { authId: "", rate: 5 },
      { authId: "", rate: 4 },
    ],
    comments: [
      {
        id: "303030",
        title: "YEah",
        authorName: "goku",
        authorId: "",
        date: new Date(),
        rating: 3,
        comment: "Il sonne trop bien",
      },
      {
        id: "202020",
        title: "YEah",
        authorName: "Pernalonga",
        authorId: "",
        date: new Date(),
        rating: 3,
        comment: "Je n'arrive pas à l'accorder, comment faire ?",
      },
      {
        id: "191919",
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
    id: crypto.randomUUID(),
    productId: "321454",
    rates: [
      { authId: "", rate: 3 },
      { authId: "", rate: 4 },
      { authId: "", rate: 0 },
      { authId: "", rate: 2 },
      { authId: "", rate: 1 },
      { authId: "", rate: 1 },
      { authId: "", rate: 4 },
    ],
    comments: [
      {
        id: "181818",
        title: "YEah",
        authorName: "Laïa",
        authorId: "",
        date: new Date(),
        rating: 3,
        comment: "Il sonne vraiment bien",
      },
      {
        id: "171717",
        title: "YEah",
        authorName: "Pixote",
        authorId: "",
        date: new Date(),
        rating: 3,
        comment: "E bom !",
      },
      {
        id: "1616161",
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
    id: crypto.randomUUID(),
    productId: "12344409876",
    rates: [
      { authId: "", rate: 3 },
      { authId: "", rate: 4 },
      { authId: "", rate: 5 },
      { authId: "", rate: 2 },
      { authId: "", rate: 5 },
      { authId: "", rate: 5 },
      { authId: "", rate: 4 },
    ],
    comments: [
      {
        id: "151515",
        title: "YEah",
        authorName: "Chama",
        authorId: "",
        date: new Date(),
        rating: 3,
        comment: "Super rapport qualité prix",
      },
      {
        id: "141414",
        title: "YEah",
        authorName: "Babalo",
        authorId: "",
        date: new Date(),
        rating: 3,
        comment: "J'aime pas'",
      },
      {
        id: "131313",
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
    id: crypto.randomUUID(),
    productId: "111111112",
    rates: [
      { authId: "", rate: 2 },
      { authId: "", rate: 2 },
      { authId: "", rate: 2 },
      { authId: "", rate: 2 },
      { authId: "", rate: 5 },
      { authId: "", rate: 5 },
      { authId: "", rate: 4 },
    ],
    comments: [
      {
        id: "999",
        title: "Bien",
        authorName: "Laïa",
        authorId: "",
        date: new Date(),
        rating: 4,
        comment: "Bien bien",
      },
      {
        id: "888",
        title: "Khaja",
        authorName: "Pixote",
        authorId: "",
        date: new Date(),
        rating: 2.5,
        comment: "Le top !",
      },
      {
        id: "777",
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
    id: crypto.randomUUID(),
    productId: "222222223",
    rates: [
      { authId: "", rate: 3 },
      { authId: "", rate: 5 },
      { authId: "", rate: 3 },
      { authId: "", rate: 2 },
      { authId: "", rate: 5 },
      { authId: "", rate: 5 },
      { authId: "", rate: 3 },
    ],
    comments: [
      {
        id: "666",
        title: "YEah",
        authorName: "Laïa",
        authorId: "",
        date: new Date(),
        rating: 4,
        comment: "Bien bien",
      },
      {
        id: "555",
        title: "ouds",
        authorName: "Pixote",
        authorId: "",
        date: new Date(),
        rating: 2,
        comment: "Au top !",
      },
      {
        id: "444",
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
    id: crypto.randomUUID(),
    productId: "3440066338822993",
    rates: [
      { authId: "", rate: 3 },
      { authId: "", rate: 4 },
      { authId: "", rate: 5 },
      { authId: "", rate: 2 },
      { authId: "", rate: 5 },
      { authId: "", rate: 5 },
      { authId: "", rate: 4 },
    ],
    comments: [
      {
        id: "333",
        title: "YEah",
        authorName: "Laïa",
        authorId: "",
        date: new Date(),
        rating: 4,
        comment: "Bien bien",
      },
      {
        id: "222",
        title: "J'adore !",
        authorName: "Pixote",
        authorId: "",
        date: new Date(),
        rating: 2,
        comment: "Au top !",
      },
      {
        id: "111",
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
    id: crypto.randomUUID(),
    productId: "325476879801",
    rates: [
      { authId: "", rate: 3 },
      { authId: "", rate: 4 },
      { authId: "", rate: 5 },
      { authId: "", rate: 2 },
      { authId: "", rate: 5 },
      { authId: "", rate: 5 },
      { authId: "", rate: 4 },
    ],
    comments: [
      {
        id: "333",
        title: "YEah",
        authorName: "Laïa",
        authorId: "",
        date: new Date(),
        rating: 4,
        comment: "Bien bien",
      },
      {
        id: "222",
        title: "J'adore !",
        authorName: "Pixote",
        authorId: "",
        date: new Date(),
        rating: 2,
        comment: "Au top !",
      },
      {
        id: "111",
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
    id: crypto.randomUUID(),
    productId: "333333333",
    rates: [
      { authId: "", rate: 3 },
      { authId: "", rate: 4 },
      { authId: "", rate: 5 },
      { authId: "", rate: 2 },
      { authId: "", rate: 5 },
      { authId: "", rate: 5 },
      { authId: "", rate: 4 },
    ],
    comments: [
      {
        id: "333",
        title: "YEah",
        authorName: "Laïa",
        authorId: "",
        date: new Date(),
        rating: 4,
        comment: "Bien bien",
      },
      {
        id: "222",
        title: "J'adore !",
        authorName: "Pixote",
        authorId: "",
        date: new Date(),
        rating: 2,
        comment: "Au top !",
      },
      {
        id: "111",
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
    id: crypto.randomUUID(),
    productId: "7272727272727",
    rates: [
      { authId: "", rate: 3 },
      { authId: "", rate: 4 },
      { authId: "", rate: 5 },
      { authId: "", rate: 2 },
      { authId: "", rate: 5 },
      { authId: "", rate: 5 },
      { authId: "", rate: 4 },
    ],
    comments: [
      {
        id: "333",
        title: "YEah",
        authorName: "Laïa",
        authorId: "",
        date: new Date(),
        rating: 4,
        comment: "Bien bien",
      },
      {
        id: "222",
        title: "J'adore !",
        authorName: "Pixote",
        authorId: "",
        date: new Date(),
        rating: 2,
        comment: "Au top !",
      },
      {
        id: "111",
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
    id: crypto.randomUUID(),
    productId: "12213443455465567667877898",
    rates: [
      { authId: "", rate: 3 },
      { authId: "", rate: 4 },
      { authId: "", rate: 5 },
      { authId: "", rate: 2 },
      { authId: "", rate: 5 },
      { authId: "", rate: 5 },
      { authId: "", rate: 4 },
    ],
    comments: [
      {
        id: "333",
        title: "YEah",
        authorName: "Laïa",
        authorId: "",
        date: new Date(),
        rating: 4,
        comment: "Bien bien",
      },
      {
        id: "222",
        title: "J'adore !",
        authorName: "Pixote",
        authorId: "",
        date: new Date(),
        rating: 2,
        comment: "Au top !",
      },
      {
        id: "111",
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
    id: crypto.randomUUID(),
    productId: "720718392",
    rates: [
      { authId: "", rate: 3 },
      { authId: "", rate: 4 },
      { authId: "", rate: 5 },
      { authId: "", rate: 2 },
      { authId: "", rate: 5 },
      { authId: "", rate: 5 },
      { authId: "", rate: 4 },
    ],
    comments: [
      {
        id: "333",
        title: "YEah",
        authorName: "Laïa",
        authorId: "",
        date: new Date(),
        rating: 4,
        comment: "Bien bien",
      },
      {
        id: "222",
        title: "J'adore !",
        authorName: "Pixote",
        authorId: "",
        date: new Date(),
        rating: 2,
        comment: "Au top !",
      },
      {
        id: "111",
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
    id: crypto.randomUUID(),
    productId: "113355779908642",
    rates: [
      { authId: "", rate: 3 },
      { authId: "", rate: 4 },
      { authId: "", rate: 5 },
      { authId: "", rate: 2 },
      { authId: "", rate: 5 },
      { authId: "", rate: 5 },
      { authId: "", rate: 4 },
    ],
    comments: [
      {
        id: "333",
        title: "YEah",
        authorName: "Laïa",
        authorId: "",
        date: new Date(),
        rating: 4,
        comment: "Bien bien",
      },
      {
        id: "222",
        title: "J'adore !",
        authorName: "Pixote",
        authorId: "",
        date: new Date(),
        rating: 2,
        comment: "Au top !",
      },
      {
        id: "111",
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
    id: crypto.randomUUID(),
    productId: "32244556677883",
    rates: [
      { authId: "", rate: 3 },
      { authId: "", rate: 4 },
      { authId: "", rate: 5 },
      { authId: "", rate: 2 },
      { authId: "", rate: 5 },
      { authId: "", rate: 5 },
      { authId: "", rate: 4 },
    ],
    comments: [
      {
        id: "333",
        title: "YEah",
        authorName: "Laïa",
        authorId: "",
        date: new Date(),
        rating: 4,
        comment: "Bien bien",
      },
      {
        id: "222",
        title: "J'adore !",
        authorName: "Pixote",
        authorId: "",
        date: new Date(),
        rating: 2,
        comment: "Au top !",
      },
      {
        id: "111",
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
    id: crypto.randomUUID(),
    productId: "135798642",
    rates: [
      { authId: "", rate: 3 },
      { authId: "", rate: 4 },
      { authId: "", rate: 5 },
      { authId: "", rate: 2 },
      { authId: "", rate: 5 },
      { authId: "", rate: 5 },
      { authId: "", rate: 4 },
    ],
    comments: [
      {
        id: "333",
        title: "YEah",
        authorName: "Laïa",
        authorId: "",
        date: new Date(),
        rating: 4,
        comment: "Bien bien",
      },
      {
        id: "222",
        title: "J'adore !",
        authorName: "Pixote",
        authorId: "",
        date: new Date(),
        rating: 2,
        comment: "Au top !",
      },
      {
        id: "111",
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
    id: crypto.randomUUID(),
    productId: "8765433",
    rates: [
      { authId: "", rate: 3 },
      { authId: "", rate: 4 },
      { authId: "", rate: 5 },
      { authId: "", rate: 2 },
      { authId: "", rate: 5 },
      { authId: "", rate: 5 },
      { authId: "", rate: 4 },
    ],
    comments: [
      {
        id: "333",
        title: "YEah",
        authorName: "Laïa",
        authorId: "",
        date: new Date(),
        rating: 4,
        comment: "Bien bien",
      },
      {
        id: "222",
        title: "J'adore !",
        authorName: "Pixote",
        authorId: "",
        date: new Date(),
        rating: 2,
        comment: "Au top !",
      },
      {
        id: "111",
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
    id: crypto.randomUUID(),
    productId: "3456783",
    rates: [
      { authId: "", rate: 3 },
      { authId: "", rate: 4 },
      { authId: "", rate: 5 },
      { authId: "", rate: 2 },
      { authId: "", rate: 5 },
      { authId: "", rate: 5 },
      { authId: "", rate: 4 },
    ],
    comments: [
      {
        id: "333",
        title: "YEah",
        authorName: "Laïa",
        authorId: "",
        date: new Date(),
        rating: 4,
        comment: "Bien bien",
      },
      {
        id: "222",
        title: "J'adore !",
        authorName: "Pixote",
        authorId: "",
        date: new Date(),
        rating: 2,
        comment: "Au top !",
      },
      {
        id: "111",
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
    id: crypto.randomUUID(),
    productId: "987654321",
    rates: [
      { authId: "", rate: 5 },
      { authId: "", rate: 5 },
      { authId: "", rate: 4 },
      { authId: "", rate: 5 },
      { authId: "", rate: 5 },
      { authId: "", rate: 5 },
      { authId: "", rate: 4 },
      { authId: "", rate: 4 },
      { authId: "", rate: 4 },
      { authId: "", rate: 4 },
      { authId: "", rate: 4 },
      { authId: "", rate: 4 },
    ],
    comments: [
      {
        id: "30",
        title: "YEah",
        authorName: "goku",
        authorId: "",
        date: new Date(),
        rating: 4,
        comment: "Il sonne trop bien",
      },
      {
        id: "20",
        title: "J'aime",
        authorName: "Pernalonga",
        authorId: "",
        date: new Date(),
        rating: 5,
        comment: "Top à l'aise",
      },
      {
        id: "10",
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
    id: crypto.randomUUID(),
    productId: "555577778888",
    rates: [
      { authId: "", rate: 2 },
      { authId: "", rate: 2 },
      { authId: "", rate: 2 },
      { authId: "", rate: 2 },
      { authId: "", rate: 5 },
      { authId: "", rate: 4 },
    ],
    comments: [
      {
        id: "002",
        title: "Bien",
        authorName: "Laïa",
        authorId: "",
        date: new Date(),
        rating: 4,
        comment: "Bien bien",
      },
      {
        id: "001",
        title: "Khaja",
        authorName: "Pixote",
        authorId: "",
        date: new Date(),
        rating: 2.5,
        comment: "Le top !",
      },
      {
        id: "003",
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
    id: crypto.randomUUID(),
    productId: "444466667777",
    rates: [
      { authId: "", rate: 2 },
      { authId: "", rate: 2 },
      { authId: "", rate: 2 },
      { authId: "", rate: 2 },
      { authId: "", rate: 5 },
      { authId: "", rate: 4 },
    ],
    comments: [
      {
        id: "002",
        title: "Bien",
        authorName: "Laïa",
        authorId: "",
        date: new Date(),
        rating: 4,
        comment: "Bien bien",
      },
      {
        id: "001",
        title: "Khaja",
        authorName: "Pixote",
        authorId: "",
        date: new Date(),
        rating: 2.5,
        comment: "Le top !",
      },
      {
        id: "003",
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
