import mongoose from "mongoose";
import project from "../models/Project.js";

class ProjectController {
  static async getProjects(req, res) {
    try {
      const fetchProjects = await project.find();
      res.status(200).json(fetchProjects);
    } catch (error) {
      res.status(500).json({ message: "Error on fetching projects." });
    }
  }

  static async getProjectsById(req, res) {
    try {
      const fetchedProject = await project.findById(req.params.id);
      res
        .status(200)
        .json( fetchedProject );
    } catch (error) {
      res
        .status(500)
        .json({ message: "Error on fetching project by id.", error: error });
    }
  }

  static async createProject(req, res) {
    try {
      const newProject = await project.create(req.body);
      res.status(201).json({ message: "Project created successfully" });
    } catch (error) {
      res
        .status(500)
        .json({ message: "Error when creating project", error: error });
    }
  }

  static async changeProject(req, res) {
    try {
      const fetchedProject = await project.findByIdAndUpdate(
        req.params.id,
        req.body
      );
      res
        .status(201)
        .json({
          message: "Project altered successfully",
        });
    } catch (error) {
      res.status(500).json({ message: "Error when changing project." });
    }
  }

  static async deleteProject(req, res){
    try {
      const fetchedProject = await project.findByIdAndDelete(req.params.id);
      res.status(200).json({message: "Project deleted successfully"});
    } catch (error) {
      res.status(500).json({message: "Error when deleting project."})
      
    }
  }
}

export default ProjectController;
