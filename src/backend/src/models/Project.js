import express from "express";
import mongoose from "mongoose";

const projetoSchema = mongoose.Schema(
  {
    id: { type: mongoose.Schema.Types.ObjectId },
    name: { type: String, required: true },
    imageURL: { type: mongoose.Schema.Types.String },
    descriptionEn: { type: String },
    descriptionPt: { type: String },
    programmingLanguages: { type: [String] },
    finished: true,
    link: "https://lorwnzo-lp.github.io/Projeto-Fokus-Alura/",
  },
  { versionKey: false }
);

const project = mongoose.model("Projects", projetoSchema);

export default project;