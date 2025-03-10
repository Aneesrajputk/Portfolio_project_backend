import mongoose from "mongoose";
import dotenv from "dotenv";

// Load environment variables
dotenv.config();

export const dbConnection = () => {
  const mongoURI = process.env.MONGO_URI;

  if (!mongoURI) {
    console.error("MONGO_URI is not defined. Check your .env file.");
    process.exit(1); // Exit the process with a failure code
  }

  mongoose
    .connect(mongoURI, {
      dbName: "MERN_STACK_PERSONAL_PORTFOLIO",
    })
    .then(() => {
      console.log("Connected to database!");
    })
    .catch((err) => {
      console.error("Some error occurred while connecting to the database:", err);
      process.exit(1); // Exit the process with a failure code
    });
};

