"use client";
import React, { useEffect } from "react";
import { useWishlist } from "@/stores/useWishlistStore";
import { Button } from "@/components/ui/button";
import { useUserStore } from "@/stores/useUserStore";
import WishlistMobileMenuButton from "@/components/WishlistMobileMenuButton";
import WishlistTitleItem from "@/components/WishlistTitleItem";
import ModifyWishlistButton from "@/components/ModifyWishlistButton";
import DeleteWishlistButton from "@/components/DeleteWishlistButton";
import WishlistMobileMenu from "@/components/WishlistMobileMenu";
import NewWishlistButton from "@/components/NewWishlistButton";
import WishlistTitleInput from "@/components/WishlistTitleInput";
import CurrentWishlistProductListComponent from "@/components/CurrentWishlistProductListComponent";

function Page() {
  const { user } = useUserStore();
  const {
    wishlistTable,
    toggleModify,
    setCurrentWishlist,
    currentWishlist,
    getWishlistTableState,
  } = useWishlist();

  useEffect(() => {
    getWishlistTableState(user);
  }, [user]);

  return (
    <div className="flex flex-col gap-4 lg:mr-4 xl:mr-12">
      <WishlistMobileMenuButton />
      <div className="flex flex-row p-0 lg:pt-12 lg:pb-5">
        <div className="hidden lg:flex flex-col w-2/5 gap-7 ml-16">
          <NewWishlistButton user={user} />
          {wishlistTable?.length > 0 && (
            <div className="flex flex-col w-full h-full gap-7">
              {wishlistTable?.map(({ id, name, isCurrent, idList, date }) => (
                <div
                  className="flex w-full h-fit gap-4 justify-start items-center"
                  key={id}
                >
                  <Button
                    onClick={() => setCurrentWishlist(user, id)}
                    className="bg-transparent text-black shadow-none hover:bg-transparent"
                  >
                    <WishlistTitleItem
                      isCurrent={isCurrent}
                      name={name}
                      idList={idList}
                      date={date}
                    />
                  </Button>
                </div>
              ))}
            </div>
          )}
        </div>
        <div className="flex flex-col px-7 w-full h-full gap-6">
          <div className="flex">
            <WishlistTitleInput />
          </div>
          <div
            className={`transition-all duration-150 transform ease-in-out ${
              toggleModify ? "h-fit" : "h-0"
            }`}
          >
            <DeleteWishlistButton user={user} wishlistId={currentWishlist.id} />
          </div>
          <div
            className={`flex w-full justify-end transition-all duration-500 transform ease-in-out ${
              toggleModify ? "translate-y-0" : "-translate-y-10"
            }`}
          >
            <ModifyWishlistButton />
          </div>
          <div
            className={`flex flex-col w-full gap-2 transition-all duration-500 transform ease-in-out ${
              toggleModify ? "translate-y-0" : "-translate-y-10"
            }`}
          >
            <CurrentWishlistProductListComponent user={user} />
          </div>
        </div>
      </div>
      <WishlistMobileMenu wishlistTable={wishlistTable} />
    </div>
  );
}

export default Page;
