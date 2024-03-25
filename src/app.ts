import express from "express";
import pessoaRoute from './routes/pessoa.routes';
import { AppDataSource } from "./data-source";
const app = express();

require('dotenv').config()
app.use(express.json());

const port = process.env.PORT || 4568;

app.get("/ping", (req, res) => {
  return res.send("pong");
});
app.use('/pessoa', pessoaRoute);

// AppDataSource.initialize().then(() => {
//   console.log("kahjsdcvg");
  
// })

export default app;