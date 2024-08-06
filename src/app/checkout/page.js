"use client";
import { useSignOut, useSignUp, useUserStore } from "@/stores/useUserStore";
import React, { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
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
import SignInForm from "@/components/Forms/SignInForm";
import Link from "next/link";
import { emailRegex } from "@/lib/utils";
import style from "./checkout.module.css";
import { toast } from "@/components/ui/use-toast";

const errorMessage = "Merci de saisir votre";

const formSchema = z.object({
  email: z
    .string()
    .min(1, `${errorMessage} votre adresse e-mail.`)
    .regex(emailRegex, "L'adresse email fournie n'a pas un format valide"),
  firstName: z.string().min(1, `${errorMessage} prénom.`),
  lastName: z.string().min(1, `${errorMessage} nom de famille.`),
  street: z.string().min(1, `${errorMessage} rue et numéro de rue.`),
  zipCode: z
    .string()
    .min(5, `${errorMessage} code postal.`)
    .refine((value) => /^\d{5}$/.test(value), {
      message: "Merci de saisir un code postal de cinq chiffre.",
    }),
  city: z.string().min(1, `${errorMessage} ville.`),
  phone: z.string().optional(),
  business: z.string().optional(),
});

export default function page() {
  const [logInButton, toggleLogInButton] = useState(false);
  const { user } = useUserStore();
  const { signUp } = useSignUp();
  const { signOut } = useSignOut();
  const { cart, totalPrice, shippingFees } = useCartStore();

  useEffect(() => {
    if (user) toggleLogInButton(false);
  }, [user]);

  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      business: "",
      firstName: "",
      lastName: "",
      street: "",
      zipCode: "",
      city: "",
      country: "France",
      phone: "",
    },
  });

  const CartItem = ({ name, availability, price }) => {
    return (
      <li className="flex justify-between gap-2">
        <div className="flex flex-col">
          <strong>{name}</strong>
          <AvailabilityComponent availability={availability} />
        </div>
        <span>{price} €</span>
      </li>
    );
  };

  const Cart = () => {
    return (
      <div className="flex flex-col gap-4 w-full">
        <div className="flex flex-row justify-between gap-4">
          <h2 className={`${style.title} mb-4`}>Panier d'achat</h2>
          <Link
            href="/cart"
            className="underline underline-offset-8 hover:text-color-gold"
          >
            Editer
          </Link>
        </div>
        <ol className="flex flex-col gap-4">
          {cart.map(({ name, availability, price }, index) => (
            <CartItem
              name={name}
              availability={availability}
              price={price}
              key={index}
            />
          ))}
        </ol>
        <div className="flex justify-between">
          <span>Frais de port</span>
          <span>{shippingFees.toFixed(2)} €</span>
        </div>
        <div className="flex justify-between">
          <h3 className="text-xl font-bold">Montant total</h3>
          <span>{totalPrice.toFixed(2)} €</span>
        </div>
      </div>
    );
  };

  const handleSignUp = async (values) => {
    try {
      await signUp(values);
    } catch (e) {
      toast({ title: e.message });
    }
  };

  function onSubmit(values) {
    handleSignUp(values);
  }

  return (
    <section className="flex p-5 gap-2 md:px-7 lg:px-32">
      <section className="w-full sm:w-1/2 flex flex-col gap-8 p-2">
        <header
          className={`${
            !user
              ? "flex flex-col"
              : "flex flex-row justify-between items-center"
          } gap-2`}
        >
          <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold">Caisse</h2>
          {!user ? (
            <>
              <span>Avez-vous déjà un compte client?</span>
              <Button
                onClick={() => toggleLogInButton(!logInButton)}
                className=" w-fit"
              >
                Se connecter
              </Button>
            </>
          ) : (
            <Button onClick={signOut} className="text-black bg-white w-fit">
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
              <div className="p-4 flex flex-col border-2 rounded">
                <span>{user.business}</span>
                <span>{user.firstName}</span>
                <span>{user.lastName}</span>
                {user.addresses.map(
                  ({ street, zipCode, city, country, isCurrent }, index) =>
                    isCurrent && (
                      <div className="flex flex-col" key={index}>
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
              <Cart />
            </div>
            {!user && (
              <Button type="submit" className="w-fit mx-auto mt-16">
                S'enregistrer et acheter
              </Button>
            )}
            {user && (
              <Button className="w-fit mx-auto mt-16">
                <Link href={"/thanks"}>acheter maintenant</Link>
              </Button>
            )}
          </form>
        </Form>
      </section>
      <aside className="hidden flex-col sm:flex w-1/2 p-2">
        <Cart />
      </aside>
    </section>
  );
}
