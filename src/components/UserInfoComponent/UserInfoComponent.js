import React from "react";
import { Button } from "@/components/ui/button";
import { useUserStore } from "@/stores/useUserStore";

function UserInfoComponent({
  isInfo,
  title,
  subTitle,
  iconButton: IconButton,
  onClick,
}) {
  const { user } = useUserStore();

  if (isInfo === undefined) throw new Error("isInfo is undefined");

  return (
    <section className="flex flex-col p-7 gap-8">
      <section>
        <header className="flex w-full lg:gap-16 lg:items-baseline">
          <h2 className="text-5xl font-bold">{title}</h2>
          <span className="lg:ml-auto">
            {!isInfo && <Button onClick={onClick}>Ajouter une adresse</Button>}
          </span>
        </header>
      </section>
      {!isInfo ? (
        user.adress.map(
          (
            { firstName, lastName, nbrAndStreet, codeAndCity, country },
            index
          ) => (
            <section key={index} className="flex flex-col gap-4">
              <span className="flex w-1/2 gap-16 items-top">
                <h3 className="text-2xl font-bold">{subTitle}</h3>
                <span
                  className="p-4 border-2 rounded-full hover:border-color-gold hover:text-color-gold cursor:pointer"
                  onClick={""}
                >
                  <IconButton className="ml-auto size-8" />
                </span>
              </span>
              <span>
                <>
                  <div className={""}>{user.entreprise}</div>
                  <div>
                    {firstName} {lastName}
                  </div>
                  <div>{nbrAndStreet}</div>
                  <div>{codeAndCity}</div>
                  <div>{country}</div>
                </>
              </span>
            </section>
          )
        )
      ) : (
        <section className="flex flex-col gap-4">
          <span className="flex w-1/2 gap-16 items-top">
            <h3 className="text-2xl font-bold">{subTitle}</h3>
            <span className="p-4 border-2 rounded-full hover:border-color-gold hover:text-color-gold cursor:pointer">
              <IconButton className="ml-auto size-8 hover:text-color-gold" />
            </span>
          </span>
          <span>
            <>
              <div className={""}>{user.entreprise}</div>
              <div>{user.firstName}</div>
              <div>{user.lastName}</div>
              <div>{user.email}</div>
            </>
          </span>
        </section>
      )}
    </section>
  );
}

export default UserInfoComponent;
