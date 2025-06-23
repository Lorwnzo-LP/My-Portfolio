import mongoose from "mongoose";
import project from "../models/Project";

class ProjectController {
  static async getProjects(req, res) {
    try {
      const fetchProject = await project.find();
      res.status(200).json(fetchProject);
    } catch (error) {
      res.status(500).json({ message: "Error on fetching projects." });
    }
  }

  static async getProjectsById(req, res){
    try {
        const fetchedProject = await project.findById(req.params.id);
        res.status(200).json({message: "Every things alright!", project: fetchedProject})
    } catch (error) {
        res.status(500).json({message: "Error on fetching project by id.", error: error})
    }
  }
}

export default ProjectController;