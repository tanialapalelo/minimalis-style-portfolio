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

export const getCreatedAt = (date: Date): string => {
  // Extract month, day, year, hours, minutes, and seconds
  const month = date.toLocaleDateString("default", { month: "long" });
  const day = date.getDate();
  const year = date.getFullYear();
  const hours = date.getHours().toString().padStart(2, "0"); // Ensure 2-digit format
  const minutes = date.getMinutes().toString().padStart(2, "0");
  const seconds = date.getSeconds().toString().padStart(2, "0");

  // Return formatted string (e.g., "September 12, 2023, 14:30:45")
  return `${month} ${day}, ${year}, ${hours}:${minutes}:${seconds}`;
};
