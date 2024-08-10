const defaultDate = new Date().toLocaleDateString();

export const getWishlistTable = () => {
  const wishlistTable = getLocalWishlisTable();

  console.log("getWishlisTable");
  console.log(wishlistTable);
  return wishlistTable;
};

export const udpateWishlist = (wishlistTable) => {
  console.log(wishlistTable);
  localStorage.setItem("wishlistTable", JSON.stringify(wishlistTable));

  return getWishlistTable();
};

const getLocalWishlisTable = () => {
  //localStorage.removeItem("wishlisTable");
  let wishlistTable = JSON.parse(localStorage.getItem("wishlistTable"));

  if (!wishlistTable) {
    wishlistTable = [
      {
        userId: "",
        date: defaultDate,
        name: `Liste d'envies du ${defaultDate}`,
        id: `${crypto.randomUUID()}${new Date().toISOString().split("T")[0]}`,
        isCurrent: true,
        idList: [],
      },
    ];

    localStorage.setItem("wishlistTable", JSON.stringify(wishlistTable));
    wishlistTable = localStorage.getItem(JSON.parse("wishlistTable"));
    console.log(wishlistTable);
  }

  return wishlistTable;
};
