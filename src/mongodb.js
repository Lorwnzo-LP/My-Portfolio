import { Description } from "@headlessui/react";
import mongoose from "mongoose";

async function connectToDatabase() {
  try {
    await mongoose.connect(
      "mongodb+srv://Lorenzo:Piquinin.1@cluster0.aic8y5q.mongodb.net/"
    );
    console.log("connected")
  } catch {
    console.log("not connected");
  }

  const projectSchema = new mongoose.Schema({
    name: String,
    image: String,
    description: String,
  });

  projectSchema.methods.present = function present() {
    const greeting = this.name
      ? "The of the project is " + this.name
      : "Project without name";
    console.log(greeting);
  };

  const project = mongoose.model("Project", projectSchema);

  const fokus = new project({ name: "Fokus" });
  console.log(fokus.name);

  fokus.present();
  const projects = await project.find();
  console.log(projects);
}

connectToDatabase();