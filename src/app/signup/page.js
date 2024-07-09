"use client";
import React from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useUserStore } from "@/stores/useUserStore";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { useRouter } from "next/navigation";
import "@/styles/globals.css";

const errorMessage = "Merci de saisir votre";

const formSchema = z.object({
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
});

export default function signup() {
  const { setUser } = useUserStore();

  const router = useRouter();

  // 1. Define your form.
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

  function onSubmit(values) {
    if (setUser(values)) router.push("/signin");
  }

  return (
    <section className="flex flex-col justify-center items-center py-6">
      <span className="w-1/2 p-8">
        <Form {...form}>
          <h2 className="text-2xl font-bold text-center my-7">
            Modifier l'adresse de livraison
          </h2>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
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
            <div className="flex flex-col gap-6 justify-center items-center">
              <Button type="submit" className="w-fit">
                Enregistrer
              </Button>
              <hr className="w-full borderb-2 border-color-dark-gray" />
              <div className="text-extreme-dark-gray text-center">
                Avez-vous déjà effectué un achat chez nous?
              </div>
              <Link href="/signin" className="signLink">
                Se connecter
              </Link>
            </div>
          </form>
        </Form>
      </span>
    </section>
  );
}
