import * as express from "express";
import { PORT } from "./config";

const app = express();

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
