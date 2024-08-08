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
