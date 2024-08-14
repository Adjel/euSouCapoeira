import { setUserCookies } from "@/coockieStore/userCoockies";
import { mockUpdateUser } from "./userProvider";

const defaultDate = new Date().toLocaleDateString();

export const getWishlistTable = (user) => {
  let wishlistTable;
  if (user) {
    wishlistTable = getUserWishlistTable(user);
  } else {
    wishlistTable = getLocalWishlisTable();
  }
  return wishlistTable;
};

export const updateWishlist = (user, wishlistTable) => {
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
  }

  return wishlistTable;
};

const getUserWishlistTable = (user) => {
  // We will merge non user wishlists with user ones
  let wishlistTable = JSON.parse(localStorage.getItem("wishlistTable"))?.filter(
    (wl) => wl.idList.length > 0
  );

  const users = JSON.parse(localStorage.getItem("users"));
  const existingUser = users.find((u) => u.id === user.id);

  // first time user is using wishlist
  let userWishlistTable = existingUser.wishlistTable ?? [];

  // wishlistTable can be undefiend because it is reset each time user is connected after merged
  if (wishlistTable) {
    userWishlistTable.push(...wishlistTable);
  }

  // create a wishlistTable if we have nothing at all
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

  // reset the currentWishlist avoiding haven't one or having two
  (userWishlistTable = userWishlistTable.map((wl, index) => ({
    ...wl,
    isCurrent: index === 0,
  }))),
    updateUserWishlistTable(user, userWishlistTable);

  return userWishlistTable;
};

const updateUserWishlistTable = (user, wishlistTable) => {
  const newUser = {
    ...user,
    wishlistTable: wishlistTable,
  };

  // TODO: create only one function to handle all user updates
  setUserCookies(newUser);
  mockUpdateUser(user, newUser);

  // reset non connected user wishlists
  localStorage.removeItem("wishlistTable");
};
