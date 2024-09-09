// require("dotenv").config({ path: "./env" }); method first to use .env file.
import dotenv from "dotenv";
import mongoose, { connect } from "mongoose";
import { DB_NAME } from "./constants.js";
// import { listen } from "express/lib/application";
import { connectDB } from "./db/db.js";

dotenv.config({ path: "./env" });

connectDB();

/*
import express from "express";
const app = express();
(async () => {
  try {
    await mongoose.connect(`${process.env.MONGO_DB}/${DB_NAME}`);
    app.on("error", (error) => {
      console.log("error", error);
      throw error;
    });
    app.listen(() => {
      console.log(`${process.env.PORT}`, () => {
        console.log(`Process is listening on port : ${process.evn.PORT}`);
      });
    });
  } catch (error) {
    console.error("Error :", error);
  }
})();

*/
