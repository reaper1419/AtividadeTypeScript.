export declare abstract class Funcionario {
    id: number;
    nome: string;
    sexo: 'M' | 'F' | 'Outro';
    dataContratacao: Date;
    cpf: string;
    rg: string;
    constructor(id: number, nome: string, sexo: 'M' | 'F' | 'Outro', dataContratacao: Date, cpf: string, rg: string);
    abstract calcularSalario(horasTrabalhadas?: number): number;
}
export declare class FuncionarioContratado extends Funcionario {
    salarioFixo: number;
    constructor(id: number, nome: string, sexo: 'M' | 'F' | 'Outro', dataContratacao: Date, cpf: string, rg: string, salarioFixo: number);
    calcularSalario(_horasTrabalhadas?: number): number;
}
export declare class FuncionarioRepository {
    private funcionarios;
    adicionar(funcionario: Funcionario): void;
    listarTodos(): Funcionario[];
    buscarPorId(id: number): Funcionario | undefined;
}
//# sourceMappingURL=funcionario.d.ts.map