import express from "express";

const app = express();
app.use(express.json());

const livros = [
  {
    id: 1,
    titulo: "salada",
  },
  {
    id: 2,
    titulo: "laranja mecânica",
  },
];

function buscarIndex(id) {
  return livros.findIndex((livro) => {
    return livro.id === Number(id);
  });
}

app.get("/", (req, res) => {
  res.status(200).send("Vá para a rota /livros");
});

app.get("/livros", (req, res) => {
  res.status(200).json(livros);
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
