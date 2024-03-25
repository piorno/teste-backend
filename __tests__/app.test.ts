import request from "supertest";

import app from "../src/app";
import { AppDataSource } from "../src/data-source";

beforeAll(async () => {
    await AppDataSource.initialize()
});

afterAll(async () =>  {
    await AppDataSource.destroy()
})

describe("Pessoa Routes", () => {
    it("Create route", async () => {
        const res = await request(app).post("/pessoa").send({
            "tipo": 1,
            "nome": "V",
            "cpf": "44712851813",
            "celular": "(11) 97324-46165",
            "telefone": "(11) 7324-46165",
            "email": "teste@teste.com",
            "cep": "00000-010",
            "logradouro": "teste",
            "numero": "40",
            "cidade": "SBC",
            "estado": "SP",
            "bairro": "Teste",
            "cnpj": null,
            "complemento": null,
            "createdAt": "2024-03-26T00:39:49.531Z",
            "updatedAt": "2024-03-26T00:39:49.531Z",
            "deleted_at": null
        });
        expect(res.statusCode).toEqual(201);
    });
    it("Create route", async () => {
        const res = await request(app).post("/pessoa").send({
            "nome": "V",
            "cpf": "44712851813",
            "celular": "(11) 97324-46165",
            "telefone": "(11) 7324-46165",
            "email": "teste@teste.com",
            "cep": "00000-010",
            "logradouro": "teste",
            "numero": "40",
            "cidade": "SBC",
            "estado": "SP",
            "bairro": "Teste",
            "cnpj": null,
            "complemento": null,
            "createdAt": "2024-03-26T00:39:49.531Z",
            "updatedAt": "2024-03-26T00:39:49.531Z",
            "deleted_at": null
        });
        expect(res.statusCode).toEqual(400);
    });
});