"use client";
import { useUserStore } from "@/stores/useUserStore";
import React from "react";
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
import UserAdressForm from "@/components/Forms/UserAdressForm";

const errorMessage = "Merci de saisir votre";

const formSchema = z.object({
  firstName: z.string().min(1, `${errorMessage} prénom.`),
  lastName: z.string().min(1, `${errorMessage} nom de famille.`),
  street: z.string().min(1, `${errorMessage} rue et numéro de rue.`),
  zipCode: z.string().min(1, `${errorMessage} code postal.`),
  city: z.string().min(1, `${errorMessage} ville.`),
});

export default function page() {
  const { user } = useUserStore();

  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      street: "",
      zipCode: "",
      city: "",
      country: "France",
    },
  });

  function onSubmit(event) {
    event.preventDefault();
  }

  return (
    <section className="flex p-7">
      <section className="flex flex-col w-full gap-6 border-2 border-red-600">
        <header className={`${!user ? "flex flex-col" : "flex flex-row"}`}>
          <h2 className={style.title}>Caisse</h2>
          <div>Avez-vous déjà un compte client?</div>
          <Button className={`${user && "text-black bg-white"}`}>
            {!user ? "Se connecter" : "Me déconnecter"}
          </Button>
        </header>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
            <div>
              <h2 className={style.title}>Adresse e-mail</h2>
              <FormField
                control={form.control}
                name="business"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Input placeholder="Adresse e-mail" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <UserAdressForm />
            <div>
              <h2 className={style.title}>Téléphone</h2>
              <FormField
                control={form.control}
                name="business"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <div className="relative">
                        <Input placeholder="Ex: 06 12 34 56 78" {...field} />
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
          </form>
        </Form>
        <h2 className={style.title}>Panier d'achat</h2>
      </section>
      <aside className="hidden flex-col md:flex w-1/2 border-2 border-red-600"></aside>
    </section>
  );
}
