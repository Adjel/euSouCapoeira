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
import { useSignUp } from "@/stores/useUserStore";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import { emailRegex, passwordRegex } from "@/lib/utils";
import Link from "next/link";
import "@/styles/globals.css";
import PasswordInput from "@/components/PasswordInput";

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
  email: z
    .string()
    .min(1, "Ce champ est requis")
    .regex(emailRegex, "l'adresse email fournie n'a pas un format valide"),
  password: z
    .string()
    .min(1, "Ce champ est requis")
    .regex(
      passwordRegex,
      "Le mot de passe doit contenir au moins 8 caractères, une minuscule, une majuscule, un chiffre et un caractère spécial"
    ),
});

export default function signup() {
  const { signUp } = useSignUp();

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
      email: "",
      password: "",
    },
  });

  function onSubmit(values) {
    if (signUp(values)) router.push("/dashboard/mes_informations");
  }

  return (
    <section className="flex flex-col justify-center items-center py-6">
      <div className="flex flex-col gap-6 w-1/2">
        <Form {...form}>
          <h2 className="text-2xl md:text-4xl lg:text-6xl font-bold text-center">
            S'enregistrer
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
                        type="text"
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
                      type="text"
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
                      type="text"
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
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input
                      type="email"
                      placeholder="monadresse@email.com"
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
              name="password"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <PasswordInput
                      {...field}
                      isError={!!form.formState.errors.password}
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
                      type="text"
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
                      type="number"
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
                      type="text"
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
                  <Input type="text" placeholder="France" {...field} />
                  <FormMessage />
                </FormItem>
              )}
            />
            <div className="flex flex-col gap-6 justify-center items-center">
              <Button type="submit" className="w-fit">
                Créer un compte
              </Button>
              <hr className="w-full borderb-2 border-color-dark-gray" />
              <span className="text-extreme-dark-gray text-center first-letter:uppercase">
                avez-vous déjà effectué un achat chez nous?
              </span>
              <Link href="/signin" className="signLink">
                Se connecter
              </Link>
            </div>
          </form>
        </Form>
      </div>
    </section>
  );
}
