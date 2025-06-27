import express from "express";
import livros from "./livrosRoutes.js";
import projects from "./projectRoutes.js"

const routes = (app) => {
  app.route("/").get((req, res) => res.status(200).send("Curso de node.js"));

  app.use(express.json(), livros, projects);
};

export default routes;
