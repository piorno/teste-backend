import express from 'express';
import PessoaController from '../controllers/pessoaController';

const pessoaController = new PessoaController();
 
const router = express.Router();
 
router.post('/', pessoaController.createPessoa);
 
export default router;