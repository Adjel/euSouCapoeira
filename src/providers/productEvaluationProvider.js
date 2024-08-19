///////// FUNCTIONS TO EASILY GET PRODUCTS IN PRODUCT PROVIDER

const mockGetRatesFromApi = (productId) => {
  let existingEval;
  const productsEvals = JSON.parse(localStorage.getItem("productsEvals"));

  if (productsEvals)
    existingEval = productsEvals.find((pEval) => pEval.productId === productId);

  if (existingEval && existingEval.rates) return existingEval.rates;
};

export const getRates = (productId) => {
  const apiRates = mockGetRatesFromApi(productId);

  const productEval = defaultProductEvals.find(
    (productEval) => productEval.productId === productId
  );

  if (apiRates) productEval.rates.push(...apiRates);

  return productEval.rates ?? [];
};

const mockGetCommentsFromApi = (productId) => {
  let existingEval;
  const productsEvals = JSON.parse(localStorage.getItem("productsEvals"));

  if (productsEvals)
    existingEval = productsEvals.find((pEval) => pEval.productId === productId);

  if (existingEval && existingEval.comments) return existingEval.comments;
};

export const getComments = (productId) => {
  const apiComments = mockGetCommentsFromApi(productId);

  let productEval = defaultProductEvals.find(
    (productEval) => productEval.productId === productId
  );

  if (apiComments) productEval.comments.push(...apiComments);

  return productEval.comments ?? [];
};

export const defaultProductEvals = [
  {
    productId: "12345456789",
    rates: [
      { authorId: "", rate: 5 },
      { authorId: "", rate: 4 },
      { authorId: "", rate: 3 },
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
