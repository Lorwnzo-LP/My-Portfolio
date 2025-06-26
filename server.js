import "dotenv/config";

import app from "./src/backend/app.js";
const PORT = 5000;

app.listen(PORT, (req, res) => {
  console.log("Escutando port 5000");
});
