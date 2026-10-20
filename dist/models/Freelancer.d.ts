import { Funcionario } from './funcionario';
export declare class FuncionarioFreelancer extends Funcionario {
    valorHora: number;
    dataLimiteContrato: Date;
    constructor(id: number, nome: string, sexo: 'M' | 'F' | 'Outro', dataContratacao: Date, cpf: string, rg: string, valorHora: number, dataLimiteContrato: Date);
    calcularSalario(horasTrabalhadas?: number): number;
    isContratoAtivo(): boolean;
    getDiasRestantesContrato(): number;
}
//# sourceMappingURL=Freelancer.d.ts.map