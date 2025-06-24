import "dotenv/config";

import app from "./src/backend/app.js";
const PORT = 3000;

app.listen(PORT, (req, res) => {
  console.log("Escutando port 3000");
});
