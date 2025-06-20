/* eslint-disable no-undef */
import mongoose from "mongoose";

async function connectToDB() {
  mongoose.connect(process.env.DB_CONNECTION_STRING, { dbName: "livraria" });
  return mongoose.connection;
}

export default connectToDB;

//mongodb+srv://Lorenzo:<db_password>@cluster0.aic8y5q.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0
