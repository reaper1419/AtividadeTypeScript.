"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FuncionarioFreelancer = void 0;
const funcionario_1 = require("./funcionario");
class FuncionarioFreelancer extends funcionario_1.Funcionario {
    valorHora;
    dataLimiteContrato;
    constructor(id, nome, sexo, dataContratacao, cpf, rg, valorHora, dataLimiteContrato) {
        super(id, nome, sexo, dataContratacao, cpf, rg);
        this.valorHora = valorHora;
        this.dataLimiteContrato = dataLimiteContrato;
    }
    calcularSalario(horasTrabalhadas = 0) {
        return this.valorHora * horasTrabalhadas;
    }
    isContratoAtivo() {
        const hoje = new Date();
        // Zera o horário de 'hoje' para comparar apenas as datas do calendário
        hoje.setHours(0, 0, 0, 0);
        const dataLimite = new Date(this.dataLimiteContrato);
        dataLimite.setHours(23, 59, 59, 999); // O contrato vai até o final do dia limite
        return hoje <= dataLimite;
    }
    getDiasRestantesContrato() {
        if (!this.isContratoAtivo())
            return 0;
        const hoje = new Date();
        hoje.setHours(0, 0, 0, 0);
        const dataLimite = new Date(this.dataLimiteContrato);
        dataLimite.setHours(0, 0, 0, 0);
        const diffTempo = dataLimite.getTime() - hoje.getTime();
        const milissegundosPorDia = 1000 * 60 * 60 * 24;
        return Math.round(diffTempo / milissegundosPorDia);
    }
}
exports.FuncionarioFreelancer = FuncionarioFreelancer;
//# sourceMappingURL=Freelancer.js.map