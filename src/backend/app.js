import express from "express";
import connectToDB from "./src/config/dbConnect.js";
import livro from "./src/models/Livro.js";
import routes from "./src/routes/livrosRoutes.js";
const conexao = await connectToDB();

conexao.on("error", (error) => {
  console.log("erro ao conectar a database", error);
});

conexao.once("open", () => {
  console.log("Conexão ao banco de base bem sucedida");
});

const app = express();
app.use(express.json());
app.use(routes);
app.get("/", (req, res) => {
  res.status(200).send("Vá para a rota /livros");
});



app.post("/livros", (req, res) => {
  livros.push(req.body), res.status(200).send("Livro adicionado com sucesso");
});

app.get("/livros/:id", (req, res) => {
  const index = buscarIndex(req.params.id);
  res.status(200).json(livros[index]);
});

app.put("/livros/:id", (req, res) => {
  const index = buscarIndex(req.params.id);
  livros[index].titulo = req.body.titulo;
  res.status(201).send("livro alterado com sucesso");
});

app.delete("/livros/:id", (req, res) => {
  const index = buscarIndex(req.params.id);
  livros.splice(index, 1);
  res.status(200).send("Livro deletado com sucesso");
});

export default app;

//mongodb+srv://Lorenzo:<db_password>@cluster0.aic8y5q.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0
