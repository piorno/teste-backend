import { Request, Response } from 'express';
import PessoaRepository from '../repository/pessoaRepository';
import { Pessoa } from "../entity/pessoa";
import PessoaDTO from '../DTO/pessoaDTO';

const pessoaRepository = new PessoaRepository()
const dto = new PessoaDTO()

export default class PessoaController {
    async createPessoa(req: Request, res: Response) {

        const pessoa = req.body;
        const error = await dto.validateSave(pessoa)
        console.log(pessoa);
        
        if (error.length > 0) return res.status(400).json(error)
        
        const result = await pessoaRepository.save(pessoa)
        res.status(201).send(result)

    }
}