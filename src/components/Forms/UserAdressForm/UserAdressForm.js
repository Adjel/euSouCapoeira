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
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useUserAdress } from "@/stores/useUserStore";
import { toast } from "@/components/ui/use-toast";
import styles from "../forms.module.css";

const errorMessage = "Merci de saisir votre";

const formSchema = z.object({
  business: z.string().optional(),
  firstName: z.string().min(1, `${errorMessage} prénom.`),
  lastName: z.string().min(1, `${errorMessage} nom de famille.`),
  street: z.string().min(1, `${errorMessage} rue et numéro de rue.`),
  zipCode: z.string().min(1, `${errorMessage} code postal.`),
  city: z.string().min(1, `${errorMessage} ville.`),
});

function UserAdressForm({ cancel }) {
  const { addAdress } = useUserAdress();

  // 1. Define your form.
  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      business: "",
      firstName: "",
      lastName: "",
      street: "",
      zipCode: "",
      city: "",
      country: "France",
    },
  });

  const handleAdress = async (values) => {
    try {
      await addAdress(values);
      cancel();
      toast({ title: "L'adresse a bien été enregistrée" });
    } catch (e) {
      toast({ title: `${e.message}` });
    }
  };

  function onSubmit(values) {
    handleAdress(values);
  }

  return (
    <section className="border-4 py-6 px-48">
      <Form {...form}>
        <h2 className="text-2xl font-bold text-center my-8">
          Modifier l&apos;adresse de livraison
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

export default UserAdressForm;
