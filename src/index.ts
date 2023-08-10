import * as express from "express";
import * as path from "path";
import { PORT } from "./config";

const app = express();

// Serve static files from the public directory
app.use(express.static("public"));

app.get("*", (req, res) => {
  res.sendFile("index.html", { root: path.join(__dirname, "../public/") });
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
