import { Pessoa } from "../entity/pessoa";

type ErrorProps = {
    field: keyof Pessoa;
    message: string
}

export default class PessoaDTO {
    async validateSave(pessoa: Pessoa) {
        let errors: ErrorProps[] = []

        if (!pessoa.tipo || pessoa.tipo > 2) errors.push({ field: "tipo", message: "error_pessoa_01" })
        if (!pessoa.cpf && pessoa.tipo == 1) {
            errors.push({ field: "cpf", message: "error_pessoa_cpf" })
        }
        else if (pessoa.tipo == 1 && pessoa.cpf) {
            if (pessoa.tipo == 1 && !this.validarCPF(pessoa.cpf.replace(/[!@#$%^&*.-]/g, ''))) errors.push({ field: "nome", message: "error_pessoa_cpf" })
            pessoa.cnpj = null
            pessoa.cpf = pessoa.cpf.replace(/[!@#$%^&*.-]/g, '');
        }
        if (!pessoa.cpf && pessoa.tipo == 2) {
            errors.push({ field: "cnpj", message: "error_pessoa_cnpj" })
        }
        else if (pessoa.tipo == 2 && pessoa.cnpj) {
            pessoa.cpf = null
            pessoa.cnpj = pessoa.cnpj.replace(/[!@#$%^&*.-]/g, '');
        }
        if (!pessoa.nome) errors.push({ field: "nome", message: "error_pessoa_03" })
        if (!pessoa.celular) errors.push({ field: "celular", message: "error_pessoa_04" })
        if (!pessoa.telefone) errors.push({ field: "telefone", message: "error_pessoa_05" })
        if (!pessoa.email) errors.push({ field: "email", message: "error_pessoa_06" })
        if (!pessoa.cep) errors.push({ field: "cep", message: "error_pessoa_07" })
        if (!pessoa.logradouro) errors.push({ field: "logradouro", message: "error_pessoa_08" })
        if (!pessoa.numero) errors.push({ field: "numero", message: "error_pessoa_09" })
        if (!pessoa.cidade) errors.push({ field: "cidade", message: "error_pessoa_10" })
        if (!pessoa.estado) errors.push({ field: "estado", message: "error_pessoa_11" })
        if (!pessoa.bairro) errors.push({ field: "bairro", message: "error_pessoa_12" })

        // pessoa.celular= "00000"

        return errors
    }

    validarCPF(cpf: string) {
        var soma = 0;
        var resto;


        if (
            cpf == '00000000000' ||
            cpf == '11111111111' ||
            cpf == '22222222222' ||
            cpf == '33333333333' ||
            cpf == '44444444444' ||
            cpf == '55555555555' ||
            cpf == '66666666666' ||
            cpf == '77777777777' ||
            cpf == '88888888888' ||
            cpf == '99999999999'
        ) return false;
        for (let i = 1; i <= 9; i++) {
            soma = soma + parseInt(cpf.substring(i - 1, i)) * (11 - i);
        }
        resto = (soma * 10) % 11;

        if ((resto == 10) || (resto == 11)) resto = 0;
        if (resto != parseInt(cpf.substring(9, 10))) return false;

        soma = 0;
        for (let i = 1; i <= 10; i++) {
            soma = soma + parseInt(cpf.substring(i - 1, i)) * (12 - i);
        }
        resto = (soma * 10) % 11;

        if ((resto == 10) || (resto == 11)) resto = 0;
        if (resto != parseInt(cpf.substring(10, 11))) return false;
        return true;
    }
}