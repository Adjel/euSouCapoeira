import React, { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { useUserAdress, useUserStore } from "@/stores/useUserStore";
import { RiDeleteBinLine } from "react-icons/ri";
import { ImCheckmark } from "react-icons/im";
import { FaCheckDouble } from "react-icons/fa";
import { useRouter } from "next/navigation";
import UserAdressForm from "../Forms/UserAdressForm";
import UserInfoForm from "../Forms/UserInfoForm";
import { toast } from "../ui/use-toast";
import styles from "./userInfoComponent.module.css";

function UserInfoComponent({
  isInfo,
  title,
  subTitle,
  iconButton: IconButton,
}) {
  const { user } = useUserStore();
  const { setCurrentAddress, deleteAddress } = useUserAdress();
  const [isModifying, setIsModifying] = useState(false);

  // Component is Adresses component by default, but can be something else like userInfo component
  if (isInfo === undefined) throw new Error("isInfo is undefined");

  const router = useRouter();

  useEffect(() => {
    if (!user) router.push("/signin");
    console.log(user);
  }, [user]);

  const handleDeleteAdress = async (date) => {
    try {
      await deleteAddress(date);
      toast({ title: `L'adresse a bien été supprimée` });
    } catch (e) {
      toast({ title: `Oops, une erreur est survenue: ${e}` });
    }
  };

  function handleIsModifyingInfo(event) {
    if (event) event.preventDefault();
    setIsModifying(!isModifying);
  }

  return (
    <section className="flex flex-col p-4 md:p-8 gap-8">
      <header className="flex flex-col md:flex-row w-full gap-4 lg:gap-16 lg:items-baseline">
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

      {!isModifying ? (
        <ul className="flex flex-col gap-8">
          {!isInfo ? (
            user?.addresses?.map(
              ({
                date,
                business,
                isCurrent,
                firstName,
                lastName,
                street,
                zipCode,
                city,
                country,
              }) => (
                <li key={date} className="flex flex-col gap-2">
                  <div className="flex w-1/2 gap-16 items-top">
                    <h3 className="text-2xl font-bold">
                      Adresse de facturation
                    </h3>
                    {isCurrent ? (
                      <span className="size-16 rounded-full">
                        <FaCheckDouble className="ml-auto mr-48 size-7" />
                      </span>
                    ) : (
                      <>
                        <div
                          className={styles.button}
                          //onClick={() => handleDeleteAdress(date)}
                          onClick={() => deleteAddress(date)}
                        >
                          <RiDeleteBinLine className="ml-auto size-7" />
                        </div>
                        <div
                          className={styles.button}
                          onClick={() => setCurrentAddress(date)}
                        >
                          <ImCheckmark className="ml-auto size-7" />
                        </div>
                      </>
                    )}
                  </div>
                  <div className="flex flex-col">
                    <span>{business}</span>
                    <span>
                      {firstName} {lastName}
                    </span>
                    <span>{street}</span>
                    <span>
                      {zipCode} {city}
                    </span>
                    <span>{country}</span>
                  </div>
                </li>
              )
            )
          ) : (
            <section className="flex flex-col gap-4">
              <div className="flex w-1/2 gap-16 items-top">
                <h3 className="text-2xl font-bold">{subTitle}</h3>
                <div
                  className={styles.button}
                  onClick={(event) => handleIsModifyingInfo(event)}
                >
                  <IconButton className="ml-auto size-8 hover:text-color-gold" />
                </div>
              </div>
              <div className="flex flex-col gap-1">
                <span>{user?.firstName}</span>
                <span>{user?.lastName}</span>
                <span>{user?.email}</span>
              </div>
            </section>
          )}
        </ul>
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
