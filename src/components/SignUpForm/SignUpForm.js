"use client";
import React, { useState } from "react";
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
import { useSignUp } from "@/stores/useUserStore";
import { FaRegEyeSlash } from "react-icons/fa";
import { IoEyeOutline } from "react-icons/io5";

const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
const passwordRegex = /^(?=.*d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/;

const formSchema = z.object({
  email: z
    .string()
    .min(1, "Ce champ est requis")
    .regex(emailRegex, "Invalid email address"),
  password: z
    .string()
    .min(1, "Un mot de passe est requis.")
    .regex(
      passwordRegex,
      "Le mot de passe doit contenir au moins 8 caractères, une lettre majuscule, une lettre minuscule, un chiffre et un caractère spécial"
    ),
});

function SignUpForm() {
  const { signUp } = useSignUp();
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  // 1. Define your form.
  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  function onSubmit(values) {
    signUp(values.email, values.password);
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
                <div className="relative">
                  <Input
                    placeholder="Mot de passe"
                    {...field}
                    isError={!!form.formState.errors.password}
                    // !isPasswordVisible because password type hide the password by default
                    isPassword={!isPasswordVisible}
                  />
                  <button
                    className="absolute top-0 bottom-0 right-0 mr-6"
                    onClick={() => setIsPasswordVisible(!isPasswordVisible)}
                  >
                    {isPasswordVisible ? (
                      <IoEyeOutline className="size-6 text-extreme-dark-gray" />
                    ) : (
                      <FaRegEyeSlash className="size-6 text-extreme-dark-gray" />
                    )}
                  </button>
                </div>
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

export default SignUpForm;
