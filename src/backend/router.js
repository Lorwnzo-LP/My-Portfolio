import http from "http";

const PORT = 3000;

const rotas = {
  "/": "Olá pessoa",
  "/NaoEntre": "Voce nao deveria estar aqui",
};

const server = http.createServer((req, res) => {
  res.writeHead(200, { "content-type": "text/plain" });
  res.end(rotas[req.url]);
});

server.listen(PORT);
