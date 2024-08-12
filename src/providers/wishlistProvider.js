import { setUserCookies } from "@/coockieStore/userCoockies";
import { mockUpdateUser } from "./logInProvider";

const defaultDate = new Date().toLocaleDateString();

export const getWishlistTable = (user) => {
  let wishlistTable;
  if (user) {
    wishlistTable = getUserWishlistTable(user);
  } else {
    wishlistTable = getLocalWishlisTable();
  }

  console.log("getWishlisTable");
  console.log(wishlistTable);
  return wishlistTable;
};

export const udpateWishlist = (user, wishlistTable) => {
  console.log(wishlistTable);
  if (!user) {
    localStorage.setItem("wishlistTable", JSON.stringify(wishlistTable));
  } else {
    updateUserWishlistTable(user, wishlistTable);
  }

  return getWishlistTable();
};

const getLocalWishlisTable = () => {
  //localStorage.removeItem("wishlistTable");
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
    wishlistTable = JSON.parse(localStorage.getItem("wishlistTable"));
    console.log(wishlistTable);
  }

  return wishlistTable;
};

const getUserWishlistTable = (user) => {
  let wishlistTable = JSON.parse(localStorage.getItem("wishlistTable"))?.filter(
    (wl) => wl.idList.length > 0
  );

  console.log(wishlistTable);

  const users = JSON.parse(localStorage.getItem("users"));
  const existingUser = users.find((u) => u.email === user.email);

  console.log(existingUser);

  // first time user is using wishlist
  let userWishlistTable = existingUser.wishlistTable ?? [];

  console.log(userWishlistTable);

  // wishlistTable can be undefiend because it is reset each time user is connected
  if (wishlistTable) {
    userWishlistTable.push(...wishlistTable);
  }

  console.log(userWishlistTable);

  if (!userWishlistTable.some((wl) => wl.idList.length > 0)) {
    userWishlistTable = [
      {
        userId: "",
        date: defaultDate,
        name: `Liste d'envies du ${defaultDate}`,
        id: `${crypto.randomUUID()}${new Date().toISOString().split("T")[0]}`,
        isCurrent: true,
        idList: [],
      },
    ];
  }

  console.log(userWishlistTable);

  updateUserWishlistTable(user, userWishlistTable);

  return userWishlistTable;
};

const updateUserWishlistTable = (user, wishlistTable) => {
  const newUser = {
    ...user,
    wishlistTable: wishlistTable.map((wl, index) => ({
      ...wl,
      isCurrent: index === 0,
    })),
  };

  console.log(newUser);
  setUserCookies(newUser);
  mockUpdateUser(user, newUser);

  // reset non connected user wishlists
  localStorage.removeItem("wishlistTable");
};
