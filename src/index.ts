import express from "express";
import pessoaRoute from './routes/pessoaRoutes';
import { AppDataSource } from "./data-source";
const app = express();

require('dotenv').config()
console.log(process.env.PORT);
app.use(express.json());

const port = process.env.PORT || 4568;

app.get("/ping", (req, res) => {
  return res.send("pong");
});
app.use('/api/pessoa/', pessoaRoute);

AppDataSource.initialize().then(() => {
  console.log('conectou db');
  app.listen(port, () => {
    console.log(`Escutando na porta ${port}`);
  });
})