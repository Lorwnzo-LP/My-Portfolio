const API = "https://my-portfolio-database.onrender.com/projects";

class ProjectApi {
  static async fetchFullData() {
    try {
      const data = await fetch(`${API}/projects`);
      const dataResponse = await data.json();
      return dataResponse;
    } catch (error) {
      console.log(error);
    }
  }

  static async fetchById(id) {
    try {
      const data = await fetch(`${API}/projects/${id}`);
      const dataResponse = await data.json();
      return dataResponse;
    } catch (error) {
      console.log(error);
    }
  }
}

export default ProjectApi;
