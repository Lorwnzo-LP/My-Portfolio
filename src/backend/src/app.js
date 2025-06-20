import express from "express";
import connectToDB from "./config/dbConnect.js";
import livro from "./models/Livro.js";

const conexao = await connectToDB();

conexao.on("error", (error) => {
  console.log("erro ao conectar a database", error);
});

conexao.once("open", () => {
  console.log("Conexão ao banco de base bem sucedida");
});

const app = express();
app.use(express.json());

app.get("/", (req, res) => {
  res.status(200).send("Vá para a rota /livros");
});

app.get("/livros", async (req, res) => {
  const listaLivros = await livro.find({})
  res.status(200).json(listaLivros);
});

app.post("/livros", (req, res) => {
  const livroNovo = new livro({
    titulo: req.body.titulo
  })
  livroNovo.save();
  res.send("livro criado com sucesso")
})

export default app;

//mongodb+srv://Lorenzo:<db_password>@cluster0.aic8y5q.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0
