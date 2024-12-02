"use server";

import { connectToDatabase } from "./mongoose";
import Contact from "@/database/contact-submission.model";

export async function getAllContact() {
  try {
    // connect to DB
    connectToDatabase();
    const contact = await Contact.find();
    return contact;
  } catch (error) {
    console.log(error);
    throw error;
  }
}
