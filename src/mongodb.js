import { Description } from "@headlessui/react";
import { Schema, connect, model } from "mongoose";

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

    /*const TPT = new Project({
    name: "The Personal Trainer",
    image: "/src/assets/TPT.png",
    descriptionEn:
    'Landing page for an app that helps personal trainers to manager their clients.',
    descriptionPt:
    'Pagina inicial para um app que ajuda personais trainers a gerenciar seus clientes.',
    programming: ["React.js", "HTML", "CSS"],
    finished: true,
    link: "https://www.personaltpt.com.br",
    });*/

    const queryProject = await Project.find();

    console.log(queryProject);
    return queryProject;
  } catch (error) {
    console.log(error);
  }
}

export default connectToDatabase;
