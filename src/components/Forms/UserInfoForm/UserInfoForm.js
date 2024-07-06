"use client";
import React from "react";
import styles from "../Forms.module.css";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useUserStore } from "@/stores/useUserStore";
import { emailRegex, passwordRegex } from "@/lib/utils";
import PasswordInput from "@/components/PasswordInput";

function UserInfoForm({ cancel }) {
  const { user, updateUser } = useUserStore();
  const errorMessage = "Merci de saisir votre";

  const formSchema = z
    .object({
      firstName: z.string().min(1, `${errorMessage} prénom.`),
      lastName: z.string().min(1, `${errorMessage} nom de famille.`),
      email: z
        .string()
        .min(1, `${errorMessage} votre adresse e-mail.`)
        .regex(emailRegex, "L'adresse email fournie n'a pas un format valide"),
      oldPassword: z.string().optional(),
      newPassword: z.string().optional(),
    })
    .refine(
      (data) => !data.newPassword || passwordRegex.test(data.newPassword),
      {
        message: "Le nouveau mot de passe n'a pas un format valide",
        path: ["newPassword"],
      }
    )
    .refine((data) => !(data.newPassword && !data.oldPassword), {
      message: "Vous devez entrer votre ancien mot de passe pour le changer",
      path: ["oldPassword"],
    });

  // 1. Définir votre formulaire.
  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      firstName: user.firstName,
      lastName: user.lastName,
      email: user.email,
      oldPassword: "",
      newPassword: "",
    },
  });

  function onSubmit(values) {
    if (updateUser(values)) cancel();
  }

  return (
    <section className="border-4 py-6 px-48">
      <Form {...form}>
        <h2 className="text-2xl font-bold text-center my-8">
          Modifier mes informations
        </h2>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
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
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input
                    placeholder="Votre email"
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
            name="oldPassword"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <PasswordInput
                    placeholder="Ancien mot de passe"
                    field={field}
                    isError={!!form.formState.errors.oldPassword}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="newPassword"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <PasswordInput
                    placeholder="Nouveau mot de passe"
                    field={field}
                    isError={!!form.formState.errors.newPassword}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <div className="flex gap-16 justify-center">
            <Button type="submit">Valider</Button>
            <Button className={styles.cancelButton} onClick={cancel}>
              Annuler
            </Button>
          </div>
        </form>
      </Form>
    </section>
  );
}

export default UserInfoForm;
