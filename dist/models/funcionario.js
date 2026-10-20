"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FuncionarioRepository = exports.FuncionarioContratado = exports.Funcionario = void 0;
class Funcionario {
    id;
    nome;
    sexo;
    dataContratacao;
    cpf;
    rg;
    constructor(id, nome, sexo, dataContratacao, cpf, rg) {
        this.id = id;
        this.nome = nome;
        this.sexo = sexo;
        this.dataContratacao = dataContratacao;
        this.cpf = cpf;
        this.rg = rg;
    }
}
exports.Funcionario = Funcionario;
class FuncionarioContratado extends Funcionario {
    salarioFixo;
    constructor(id, nome, sexo, dataContratacao, cpf, rg, salarioFixo) {
        super(id, nome, sexo, dataContratacao, cpf, rg);
        this.salarioFixo = salarioFixo;
    }
    // Funcionário contratado recebe salário fixo, ignorando as horas
    calcularSalario(_horasTrabalhadas) {
        return this.salarioFixo;
    }
}
exports.FuncionarioContratado = FuncionarioContratado;
class FuncionarioRepository {
    funcionarios = [];
    adicionar(funcionario) {
        const jaExiste = this.funcionarios.some(f => f.id === funcionario.id);
        if (jaExiste) {
            throw new Error(`Já existe um funcionário cadastrado com o ID ${funcionario.id}.`);
        }
        this.funcionarios.push(funcionario);
    }
    listarTodos() {
        // Retorna cópia rasa para proteger o array interno
        return [...this.funcionarios];
    }
    buscarPorId(id) {
        return this.funcionarios.find(f => f.id === id);
    }
}
exports.FuncionarioRepository = FuncionarioRepository;
//# sourceMappingURL=funcionario.js.map