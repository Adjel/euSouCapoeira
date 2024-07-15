import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs) {
  return twMerge(clsx(inputs));
}

export const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
export const passwordRegex =
  /^(?=.*d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/;

export const normalizeString = (str) => {
  if (typeof str !== "string") {
    return "";
  }
  return (
    str
      .normalize("NFD") // Normalize to decomposed form
      .replace(/[\u0300-\u036f]/g, "") // Remove diacritical marks
      // all categories links will be without the s in french to have a kind of "normalized" links
      // Remove trailing 's' if present
      .replace(/s$/, "")
      .toLowerCase()
  );
};

export const normalizeName = (name) => {
  return name
    .toLowerCase()
    .replace(/[^a-z0-9]/g, "") // Remove non-alphanumeric characters
    .replace(/\s+/g, ""); // Remove spaces
};

export const getSingleOrPluralOneWordString = (nbr, string) => {
  return nbr === 1 ? string : `${string}s`;
};
