/* eslint-disable no-undef */
import mongoose from "mongoose";

let cachedConnection = null;

async function connectToDB() {
  if (cachedConnection) {
    return cachedConnection;
  }
  try {
    const connection = await mongoose.connect(
      process.env.DB_CONNECTION_STRING,
      { dbName: "livraria", useNewUrlParser: true, useUnifiedTopology: true }
    );
    cachedConnection = connection.connection;
    return cachedConnection;
  } catch (error) {
    console.error("Erro ao conectar ao MongoDB", error);
    throw error;
  }
}

export default connectToDB;

//mongodb+srv://Lorenzo:Piquinin.1@cluster0.aic8y5q.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0
