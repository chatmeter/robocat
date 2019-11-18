import express from "express";
import cors from "cors";

const app = express();

app.use(cors());

app.get("/health", (req, res, next) => {
  res.send("OK!");
});

const port = 3000;
app.listen(port, () => {
  console.log(`server started ${port}`);
});
