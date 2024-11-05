import { ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const getJoinedDate = (date: Date): string => {
  // extract the month and year from the date object
  const month = date.toLocaleDateString("default", { month: "long" });
  const year = date.getFullYear();

  // return the joined date string (e.g., "September 2023")
  return `${month} ${year}`;
};
