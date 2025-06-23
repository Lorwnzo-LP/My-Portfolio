import express from "express";
import connectToDB from "./src/config/dbConnect.js";
import livro from "./src/models/Livro.js";
import routes from "./src/routes/index.js";
const conexao = await connectToDB();

conexao.on("error", (error) => {
  console.log("erro ao conectar a database", error);
});

conexao.once("open", () => {
  console.log("Conexão ao banco de base bem sucedida");
});

const app = express();
routes(app);

export default app;

//mongodb+srv://Lorenzo:<db_password>@cluster0.aic8y5q.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0
