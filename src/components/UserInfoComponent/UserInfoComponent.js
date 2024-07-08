import React, { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { useUserStore } from "@/stores/useUserStore";
import { RiDeleteBinLine } from "react-icons/ri";
import { ImCheckmark } from "react-icons/im";
import { FaCheckDouble } from "react-icons/fa";
import { useRouter } from "next/navigation";
import UserAdressForm from "../Forms/UserAdressForm";
import UserInfoForm from "../Forms/UserInfoForm";

function UserInfoComponent({
  isInfo,
  title,
  subTitle,
  iconButton: IconButton,
}) {
  const { user, setCurrentAddress, deleteAddress } = useUserStore();
  const [isModifying, setIsModifying] = useState(false);

  // Component is Adresses component by default, but can be something else like userInfo component
  if (isInfo === undefined) throw new Error("isInfo is undefined");

  const router = useRouter();

  useEffect(() => {
    if (!user) router.push("/login");
  }, [user]);

  function handleIsModifyingInfo(event) {
    if (event) event.preventDefault();
    setIsModifying(!isModifying);
  }

  return (
    <section className="flex flex-col p-7 gap-8">
      <section>
        <header className="flex w-full lg:gap-16 lg:items-baseline">
          <h2 className="text-5xl font-bold">
            {title ? title : "Carnet d'adresses"}
          </h2>
          <span className="lg:ml-auto">
            {!isInfo && !isModifying && (
              <Button onClick={(event) => handleIsModifyingInfo(event)}>
                Ajouter une adresse
              </Button>
            )}
          </span>
        </header>
      </section>
      {!isModifying ? (
        <>
          {!isInfo ? (
            user?.addresses.map(
              ({
                date,
                entreprise,
                isCurrent,
                firstName,
                lastName,
                street,
                zipCode,
                city,
                country,
              }) => (
                <section
                  key={date.toLocaleDateString()}
                  className="flex flex-col gap-4"
                >
                  <span className="flex w-1/2 gap-16 items-top">
                    <h3 className="text-2xl font-bold">
                      Adresse de facturation
                    </h3>
                    {isCurrent ? (
                      <FaCheckDouble className="ml-auto mr-48 size-8" />
                    ) : (
                      <>
                        <span
                          className="p-4 border-2 rounded-full hover:border-color-gold hover:text-color-gold cursor-pointer"
                          onClick={() => deleteAddress(date)}
                        >
                          <RiDeleteBinLine className="ml-auto size-8" />
                        </span>
                        <span
                          className="p-4 border-2 rounded-full hover:border-color-gold hover:text-color-gold cursor-pointer"
                          onClick={() => setCurrentAddress(date)}
                        >
                          <ImCheckmark className="ml-auto size-8" />
                        </span>
                      </>
                    )}
                  </span>
                  <span>
                    <>
                      <div className={""}>{entreprise}</div>
                      <div>
                        {firstName} {lastName}
                      </div>
                      <div>{street}</div>
                      <div>
                        {zipCode} {city}
                      </div>
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
                <span
                  className="p-4 border-2 rounded-full hover:border-color-gold hover:text-color-gold cursor-pointer"
                  onClick={(event) => handleIsModifyingInfo(event)}
                >
                  <IconButton className="ml-auto size-8 hover:text-color-gold" />
                </span>
              </span>
              <span>
                <>
                  <div className={""}>{user?.entreprise}</div>
                  <div>{user?.firstName}</div>
                  <div>{user?.lastName}</div>
                  <div>{user?.email}</div>
                </>
              </span>
            </section>
          )}
        </>
      ) : (
        <>
          {!isInfo ? (
            <section>
              <UserAdressForm
                cancel={(event) => handleIsModifyingInfo(event)}
              />
            </section>
          ) : (
            <>
              <UserInfoForm cancel={(event) => handleIsModifyingInfo(event)} />
            </>
          )}
        </>
      )}
    </section>
  );
}

export default UserInfoComponent;