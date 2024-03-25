import { Request, Response } from 'express';
import PessoaRepository from '../repository/pessoa.repository';
import PessoaDTO from '../DTO/pessoa.dto';

const pessoaRepository = new PessoaRepository()
const dto = new PessoaDTO()

export default class PessoaController {
    async createPessoa(req: Request, res: Response) {

        const pessoa = req.body;
        const error = await dto.validateSave(pessoa)
        
        if (error.length > 0) return res.status(400).json(error)
        
        const result = await pessoaRepository.save(pessoa)
        res.status(201).send(result)

    }
}