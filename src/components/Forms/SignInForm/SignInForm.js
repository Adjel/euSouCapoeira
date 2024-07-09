"use client";
import React from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useSignUp, useSignUpMock } from "@/stores/useUserStore";
import { emailRegex, passwordRegex } from "@/lib/utils";
import PasswordInput from "@/components/PasswordInput";

const formSchema = z.object({
  /*
  TODO:
  email: z
    .string()
    .min(1, "Ce champ est requis")
    .regex(emailRegex, "l'adresse email fournie n'a pas un format valide"),
  password: z
    .string()
    .min(1, "Un mot de passe est requis.")
    .regex(
      passwordRegex,
      "Le mot de passe doit contenir au moins 8 caractères, une lettre majuscule, une lettre minuscule, un chiffre et un caractère spécial"
    ),
    */
});

function SignInForm() {
  const { signUp } = useSignUp();
  const { signUpMock } = useSignUpMock();

  // 1. Define your form.
  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  function onSubmit(values) {
    //signUp(values.email, values.password);
    signUpMock();
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Adresse e-mail</FormLabel>
              <FormControl>
                <Input
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
              <FormLabel>Mot de passe</FormLabel>
              <FormControl>
                <PasswordInput
                  isError={!!form.formState.errors.password}
                  field={field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <div className="flex justify-center">
          <Button type="submit">Se connecter</Button>
        </div>
      </form>
    </Form>
  );
}

export default SignInForm;
