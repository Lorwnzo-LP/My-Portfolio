const API = "http://localhost:3000/projects";

class ProjectApi {
  static async fetchFullData() {
    try {
      const data = await fetch(API);
      const dataResponse = await data.json();
      console.log(dataResponse);
      return dataResponse;
    } catch (error) {
      console.log(error);
    }
  }

  static async fetchById(id) {
    try {
      const data = await fetch(`${API}/${id}`);
      const dataResponse = await data.json();
      console.log(dataResponse);
      return dataResponse;
    } catch (error) {
      console.log(error);
    }
  }
}

export default ProjectApi;