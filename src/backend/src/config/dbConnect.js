import mongoose from "mongoose";

async function connectToDB() {
  mongoose.connect(
    "mongodb+srv://Lorenzo:Piquinin.1@cluster0.aic8y5q.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0",
    {dbName: "livraria"}
  );

  

  return mongoose.connection;
}

export default connectToDB;

//mongodb+srv://Lorenzo:<db_password>@cluster0.aic8y5q.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0
