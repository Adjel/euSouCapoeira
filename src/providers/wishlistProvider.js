import { setUserCookies } from "@/coockieStore/userCoockies";
import { mockUpdateUser } from "./userProvider";
import { toast } from "@/components/ui/use-toast";

const defaultDate = new Date().toLocaleDateString();

export const getWishlistTable = async (user) => {
  let wishlistTable;

  try {
    if (user) {
      wishlistTable = await getUserWishlistTable(user);
    } else {
      wishlistTable = await getLocalWishlisTable();
    }
    return wishlistTable;
  } catch (e) {
    throw e;
  }
};

export const updateWishlist = async (user, wishlistTable) => {
  try {
    if (!user) {
      localStorage.setItem("wishlistTable", JSON.stringify(wishlistTable));
    } else {
      updateUserWishlistTable(user, wishlistTable);
    }
    await getWishlistTable();
  } catch (e) {
    return Promise.reject(e);
  }
};

const getLocalWishlisTable = async () => {
  try {
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
    return Promise.resolve(wishlistTable);
  } catch (e) {
    return Promise.reject(e);
  }
};

const getUserWishlistTable = async (user) => {
  try {
    // We will merge non user wishlists with user ones
    let wishlistTable = JSON.parse(
      localStorage.getItem("wishlistTable")
    )?.filter((wl) => wl.idList.length > 0);

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

    return Promise.resolve(userWishlistTable);
  } catch (e) {
    toast({ title: `Impossible de récupérer la liste code erreur: ${e}` });
  }
};

const updateUserWishlistTable = async (user, wishlistTable) => {
  try {
    const newUser = {
      ...user,
      wishlistTable: wishlistTable,
    };

    // TODO: create only one function to handle all user updates
    setUserCookies(newUser);
    mockUpdateUser(user, newUser);

    // reset non connected user wishlists
    localStorage.removeItem("wishlistTable");
  } catch (e) {
    toast({ title: `Impossible de supprimer la liste voir:${e}` });
  }
};
