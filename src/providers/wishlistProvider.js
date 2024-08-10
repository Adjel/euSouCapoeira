const defaultDate = new Date().toLocaleDateString();

export const getWishlisTable = () => {
  const wishlistTable = getLocalWishlisTable();

  console.log("getWishlisTable");
  console.log(wishlistTable);
  return wishlistTable;
};

export const udpateWishlist = (wishlistTable) => {
  console.log(wishlistTable);
  localStorage.setItem("wishlisTable", JSON.stringify(wishlistTable));

  return getWishlisTable();
};

const getLocalWishlisTable = () => {
  //localStorage.removeItem("wishlisTable");
  let wishlistTable = JSON.parse(localStorage.getItem("wishlisTable"));

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

    localStorage.setItem("wishlisTable", JSON.stringify(wishlistTable));
    wishlistTable = localStorage.getItem(JSON.parse("wishlisTable"));
    console.log(wishlistTable);
  }

  return wishlistTable;
};
