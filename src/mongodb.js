import { Description } from "@headlessui/react";
import { Schema, connect, model } from "mongoose";
import express from "express";
import MongoStore from "connect-mongo";
import { createRequire } from "module";
import { Route } from "react-router-dom";

const require = createRequire(import.meta.url);

const session = require("express-session");
const app = express();

const projectSchema = new Schema({
  name: String,
  image: String,
  descriptionEn: String,
  descriptionPt: String,
  programming: [String],
  finished: Boolean,
  link: String,
});
const Project = model("project", projectSchema);

async function connectToDatabase() {
  try {
    await connect(
      "mongodb+srv://Lorenzo:Piquinin.1@cluster0.aic8y5q.mongodb.net/"
    );
    console.log("connected");

    const queryProject = await Project.find();

    app.use(
      session({
        secret: "foo",
        store: MongoStore.create({
          mongoUrl:
            "mongodb+srv://Lorenzo:Piquinin.1@cluster0.aic8y5q.mongodb.net/",
          resave: false,
          saveUnitialized: false,
        }),
      })
    );

    app.use(Route)
    
  } catch (error) {
    console.log(error);
  }
}

connectToDatabase();
