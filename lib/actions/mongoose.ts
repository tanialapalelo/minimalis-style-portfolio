// to create database connection
import mongoose from "mongoose";

// mongoose is an elegant mongodb object modeling for node.js (helps us to more quickly create the models in our mongodb database)

let isConnected: boolean = false;

export const connectToDatabase = async () => {
  mongoose.set("strictQuery", true); // why? to prevent unknown field queries
  if (!process.env.MONGODB_URL) return console.log("MISSING MONGODB_URL"); // if there's no mongodb url
  if (isConnected) return;

  //   if we have the url and not connected
  try {
    // we pass the url, options
    await mongoose.connect(process.env.MONGODB_URL, {
      dbName: "minimalis_portfolio",
    });

    isConnected = true;
  } catch (error) {
    console.log("MongoDB connection failed: " + error);
  }
};
