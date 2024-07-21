"use client";
import { useUserStore } from "@/stores/useUserStore";
import React, { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import style from "./checkout.module.css";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Input } from "@/components/ui/input";
import { useForm } from "react-hook-form";
import { z } from "zod";
import AvailabilityComponent from "@/components/AvailabilityComponent";
import useCartStore from "@/stores/useCartStore";
import { emailRegex } from "@/lib/utils";
import SignInForm from "@/components/Forms/SignInForm";

const errorMessage = "Merci de saisir votre";

const formSchema = z.object({
  email: z
    .string()
    .min(1, `${errorMessage} votre adresse e-mail.`)
    .regex(emailRegex, "L'adresse email fournie n'a pas un format valide"),
  firstName: z.string().min(1, `${errorMessage} prénom.`),
  lastName: z.string().min(1, `${errorMessage} nom de famille.`),
  street: z.string().min(1, `${errorMessage} rue et numéro de rue.`),
  zipCode: z.string().min(1, `${errorMessage} code postal.`),
  city: z.string().min(1, `${errorMessage} ville.`),
});

export default function page() {
  const [logInButton, toggleLogInButton] = useState(false);
  const { user, signUpMock, clearUser } = useUserStore();
  const { cart, totalPrice, shippingFees } = useCartStore();

  useEffect(() => {
    if (user) toggleLogInButton(false);
    console.log(user);
  }, [user]);

  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      firstName: "",
      lastName: "",
      street: "",
      zipCode: "",
      city: "",
      country: "France",
      phone: "",
    },
  });

  const BasketItem = ({ name, availability, price }) => {
    return (
      <div className="flex justify-between gap-2">
        <div className="flex flex-col">
          <div>{name}</div>
          <AvailabilityComponent availability={availability} />
        </div>
        <span>{price} €</span>
      </div>
    );
  };

  const Basket = () => {
    return (
      <div className="flex flex-col gap-4 w-full">
        <div className="flex flex-row justify-between gap-1">
          <h2 className={`${style.title} mb-4`}>Panier d'achat</h2>
          <button>Editer</button>
        </div>
        {cart.map(({ name, availability, price }) => (
          <BasketItem name={name} availability={availability} price={price} />
        ))}
        <div className="flex justify-between">
          <span>Frais de port</span>
          <span>{shippingFees} €</span>
        </div>
        <div className="flex justify-between">
          <h3 className="text-xl font-bold">Montant total</h3>
          <span>{totalPrice} €</span>
        </div>
      </div>
    );
  };

  function onSubmit(values) {
    signUpMock(values);
  }

  return (
    <section className="flex p-5 gap-2">
      <section className="w-full sm:w-1/2 flex flex-col gap-8 p-2">
        <header
          className={`${
            !user
              ? "flex flex-col"
              : "flex flex-row justify-between items-center"
          } gap-2`}
        >
          <h2 className={style.title}>Caisse</h2>
          {!user ? (
            <>
              <div>Avez-vous déjà un compte client?</div>
              <Button
                onClick={() => toggleLogInButton(!logInButton)}
                className=" w-fit"
              >
                Se connecter
              </Button>
            </>
          ) : (
            <Button onClick={clearUser} className="text-black bg-white w-fit">
              Me déconnecter
            </Button>
          )}
          {logInButton && (
            <section className="border border-color-gold rounded p-3">
              <SignInForm isRedirecting={false} />
            </section>
          )}
        </header>
        <Form {...form} className="flex flex-col space-y-8">
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="flex flex-col space-y-8"
          >
            {!user ? (
              <div className="flex flex-col gap-6">
                <h2 className={`${style.title} my-4`}>Adresse e-mail</h2>
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        <Input
                          placeholder="Adresse e-mail"
                          {...field}
                          isError={!!form.formState.errors.email}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="business"
                  render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        <div className="relative">
                          <Input
                            placeholder="Société/institution/Groupe/"
                            {...field}
                          />
                          <span className="absolute top-0 bottom-0 right-0 my-auto mr-6 h-fit p-1 text-xs text-white rounded bg-color-hover-cancel-button">
                            optionnel
                          </span>
                        </div>
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="firstName"
                  render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        <Input
                          placeholder="Prénom"
                          {...field}
                          isError={!!form.formState.errors.firstName}
                        />
                      </FormControl>

                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="lastName"
                  render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        <Input
                          placeholder="Nom"
                          {...field}
                          isError={!!form.formState.errors.lastName}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="street"
                  render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        <Input
                          placeholder="Rue et numéro de maison"
                          {...field}
                          isError={!!form.formState.errors.street}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="zipCode"
                  render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        <Input
                          placeholder="Code postal"
                          {...field}
                          isError={!!form.formState.errors.zipCode}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="city"
                  render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        <Input
                          placeholder="Ville"
                          {...field}
                          isError={!!form.formState.errors.city}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="country"
                  render={({ field }) => (
                    <FormItem>
                      <Input placeholder="France" {...field} />
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <div>
                  <h2 className={`${style.title} my-4`}>Téléphone</h2>
                  <FormField
                    control={form.control}
                    name="phone"
                    render={({ field }) => (
                      <FormItem>
                        <FormControl>
                          <div className="relative">
                            <Input
                              placeholder="Ex: 06 12 34 56 78"
                              {...field}
                            />
                            <span className="absolute top-0 bottom-0 right-0 my-auto mr-6 h-fit p-1 text-xs text-white rounded bg-color-hover-cancel-button">
                              optionnel
                            </span>
                          </div>
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
              </div>
            ) : (
              <div className="flex flex-col border-2 rounded">
                <span>{user.business}</span>
                <span>{user.firstName}</span>
                <span>{user.lastName}</span>
                {user.addresses.map(
                  ({ street, zipCode, city, country, isCurrent }, index) =>
                    isCurrent && (
                      <div key={index}>
                        <span>{street}</span>
                        <span>
                          {zipCode} {city}
                        </span>
                        <span>{country}</span>
                      </div>
                    )
                )}
              </div>
            )}
            <div className="flex sm:hidden">
              <Basket />
            </div>
            <Button type="submit" className="w-fit mx-auto mt-16">
              {!user ? "S'enregistrer et acheter" : "acheter maintenant"}
            </Button>
          </form>
        </Form>
      </section>
      <aside className="hidden flex-col sm:flex w-1/2 p-2">
        <Basket />
      </aside>
    </section>
  );
}
