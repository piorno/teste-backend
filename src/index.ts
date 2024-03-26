import { AppDataSource } from "./data-source";
import app from "./app";

const port = process.env.PORT || 4568;

AppDataSource.initialize().then(() => {
    console.log('conectou db');
    app.listen(port, () => {
        console.log(`Escutando na porta ${port}`);
    });
})