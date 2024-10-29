"use server"

import User from "@/database/user.model";
import { connectToDatabase } from "./mongoose";

// we export the function because we want to use it somewhere else
export async function getUserById(params: string) {
    // because it's an empty block, we're gonna disable this
    // eslint-disable-next-line no-empty
    try {
      // connect to DB
      connectToDatabase();
    //   const { userId } = params;
      const user = await User.findOne({ clerkId: params });
      return user;
    } catch (error) {
      console.log(error);
      throw error;
    }
  }
  