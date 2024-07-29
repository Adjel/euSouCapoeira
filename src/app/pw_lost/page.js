"use client";
import React from "react";
import { Input } from "@/components/ui/input";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import "@/styles/globals.css";
import styles from "./pwlost.module.css";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { emailRegex } from "@/lib/utils";
import { toast } from "@/components/ui/use-toast";

const formSchema = z.object({
  email: z
    .string()
    .min(1, "Veuillez indiquer votre adresse e-mail.")
    .regex(emailRegex, "L'adresse email fournie n'a pas un format valide"),
});

export default function page() {
  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
    },
  });

  function onSubmit(values) {
    //TODO: provider
    toast({
      title:
        "Demande validée, vous allez recevoir un email pour changer votre mot de passe",
      description: "",
    });
  }

  return (
    <section className="p-7 flex flex-col justify-center gap-2 mx-60 mb-20">
      <header className="flex flex-col gap-10 mb-9 mt-4">
        <h2 className="text-6xl font-bold">Mot de passe oublié</h2>
        <span>
          Veuillez entrer votre adresse e-mail avec laquelle vous vous êtes
          inscrit chez nous. Nous vous enverrons ensuite un lien que vous
          pourrez utiliser pour définir un nouveau mot de passe
        </span>
      </header>
      <Form {...form} className="">
        <form onSubmit={form.handleSubmit(onSubmit)} className="">
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem className="mb-2">
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
          <div className="flex flex-col gap-10 justify-center items-center">
            <Button type="submit" className="w-fit">
              Changer le mot de passe
            </Button>
            <Link href="/signup" className={styles.link}>
              s'inscrire
            </Link>
            <Link href="/signin" className={styles.link}>
              Se connecter
            </Link>
          </div>
        </form>
      </Form>
    </section>
  );
}
