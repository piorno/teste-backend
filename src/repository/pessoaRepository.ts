import { Like } from 'typeorm';
import { AppDataSource } from '../data-source'
import { Pessoa } from "../entity/pessoa";

const pessoaEntity = AppDataSource.getRepository(Pessoa);
export default class PessoaRepository {
    async save(pessoa: Pessoa) {
        const response = await pessoaEntity.save(pessoa);
        return response;

    }

}