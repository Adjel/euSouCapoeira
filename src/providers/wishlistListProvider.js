export const mockGetCurrentWishlist = async () => {
  //localStorage.removeItem("wishlistTable");
  // renvoyer la current wishlist
  let currentWishlist;

  // récupérer la table dans local
  let wishlistTable = JSON.parse(localStorage.getItem("wishlistTable"));
  // si pas table
  if (!wishlistTable) {
    //  créer wishlistList avec wishlist à current true
    const date = new Date();
    currentWishlist = {
      date: date,
      isCurrent: true,
      id: `${crypto.randomUUID()}${new Date().toISOString().split("T")[0]}`,
      name: `Liste des envies du ${date.toLocaleDateString()}`,
      idList: [],
    };
    // puis créer
    const wishlistTable = [currentWishlist];
    //et set dans table
    localStorage.setItem("wishlistTable", JSON.stringify(wishlistTable));
  } else {
    // si table
    currentWishlist = wishlistTable.find(
      (wishlist) => wishlist.isCurrent === true
    );
  }
  //renvoyer la current
  console.log(currentWishlist);
  //localStorage.removeItem("wishlistTable");
  return Promise.resolve(currentWishlist);
};

export const updateMockWishList = async (wishlist) => {
  console.log(wishlist);
};

export const getMockWishlistTable = async (user) => {
  let wishlistTable;
  const date = new Date();
  // si non co
  console.log(user);
  // je récupère la table en non connecté (jen aurai aussi besoin pour la fusionner si nécéssaire)
  wishlistTable = await getLocalWishlistTable();
  console.log(wishlistTable);
  // si table vide ou non existante
  if (user) {
    // si co
    // je récpuère le user
    const users = JSON.parse(localStorage.getItem("users"));
    // je récupère la liste du user
    console.log(users);
    const userData = users.find((u) => u.email === user.email);
    // si pas de liste ou liste vide
    // crée une liste
    let userWishlistTable = userData.wishListTable ?? [
      {
        date: date,
        isCurrent: true,
        name: `Liste des envies du ${date.toLocaleDateString()}`,
        id: `${crypto.randomUUID()}${new Date().toISOString().split("T")[0]}`,
        idList: [],
      },
    ];
    console.log(userWishlistTable);

    // puis je vérifie si l'utilisateur non co à au moins une liste, si oui, pour chaque liste non vide je les ajoute
    if (wishlistTable) {
      if (wishlistTable.find((wl) => wl.idList > 0)) {
        wishlistTable.map((wishlist) => {
          if (wishlist.idList > 0) {
            userWishlistTable.push(wishlist);
          }
        });
        console.log(wishlistTable);
      }
    }
    // sauvegarder le user
  } else {
    if (!wishlistTable || wishlistTable.length < 1) {
      // je crée une liste
      const newWishlist = {
        date: date,
        isCurrent: true,
        name: `Liste des envies du ${date.toLocaleDateString()}`,
        id: `${crypto.randomUUID()}${new Date().toISOString().split("T")[0]}`,
        idList: [],
      };
      console.log(newWishlist);
      wishlistTable = [newWishlist];
    }
    console.log(wishlistTable);

    // Here wishlist doesn't exist, so create one, then return it
    wishlistTable = createWishlistTable(wishlistTable);
    console.log(wishlistTable);
  }
  console.log(wishlistTable);
  return Promise.resolve(wishlistTable);
};

const getLocalWishlistTable = async () => {
  return Promise.resolve(JSON.parse(localStorage.getItem("wishlistTable")));
};

const createWishlistTable = async (wishlistTable) => {
  localStorage.setItem("wishlistTable", JSON.stringify(wishlistTable));
  return Promise.resolve(JSON.parse(localStorage.getItem("wishlistTable")));
};
