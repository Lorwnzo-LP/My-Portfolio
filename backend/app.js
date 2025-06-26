import express from "express";
import connectToDB from "./src/config/dbConnect.js";
import cors from "cors";
import routes from "./src/routes/index.js";
import { createProxyMiddleware } from "http-proxy-middleware";

const conexao = await connectToDB();

conexao.on("error", (error) => {
  console.log("erro ao conectar a database", error);
});

conexao.once("open", () => {
  console.log("Conexão ao banco de base bem sucedida");
});

const app = express();

const whiteList = ["http://localhost:5173"]

const corsOptions = {
  origin: function (origin, cb) {
    if(whiteList.indexOf(origin) !== -1 || !origin){
      cb(null, true)
    } else{
      cb(null, true);
    }
  }
};

app.use(cors(corsOptions));

routes(app);

export default app;

//mongodb+srv://Lorenzo:<db_password>@cluster0.aic8y5q.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0
