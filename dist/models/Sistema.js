"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const prato_1 = require("./prato");
const funcionario_1 = require("./funcionario");
// Correção no import: FuncionarioFreelancer deve ser importado como valor/classe
const freelancer_1 = require("./freelancer");
const entrega_1 = require("./entrega");
// Servico de Relatorios
class RelatorioService {
    pratoRepo;
    funcionarioRepo;
    entregaRepo;
    constructor(pratoRepo, funcionarioRepo, entregaRepo) {
        this.pratoRepo = pratoRepo;
        this.funcionarioRepo = funcionarioRepo;
        this.entregaRepo = entregaRepo;
    }
    gerarRelatorioFuncionarios() {
        console.log('\n=== RELATÓRIO DE FUNCIONÁRIOS ===');
        this.funcionarioRepo.listarTodos().forEach(f => {
            const tipo = f instanceof funcionario_1.FuncionarioContratado ? 'Contratado' : 'Freelancer';
            console.log(`[ID: ${f.id}] ${f.nome} | Tipo: ${tipo} | Sexo: ${f.sexo} | CPF: ${f.cpf}`);
            if (f instanceof freelancer_1.FuncionarioFreelancer) {
                const ativoStr = f.isContratoAtivo() ? 'Ativo' : 'Inativo';
                console.log(`   └─ Contrato: ${ativoStr} | Tempo restante: ${f.getDiasRestantesContrato()} dias`);
            }
        });
    }
    gerarRelatorioSalarios(registroHoras) {
        console.log('\n=== RELATÓRIO DE SALÁRIOS ===');
        this.funcionarioRepo.listarTodos().forEach(f => {
            const horas = registroHoras.get(f.id) || 0;
            console.log(`Nome: ${f.nome} | Horas Trabalhadas: ${horas}h | Salário: R$ ${f.calcularSalario(horas).toFixed(2)}`);
        });
    }
    gerarRelatorioPratos() {
        console.log('\n=== RELATÓRIO DE PRATOS ===');
        this.pratoRepo.listarTodos().forEach(p => {
            console.log(`[ID: ${p.id}] ${p.nome} | Origem: ${p.nacionalidade} | Validade: ${p.dataValidade.toLocaleDateString()}`);
        });
    }
    gerarRelatorioEntregas() {
        console.log('\n=== RELATÓRIO DE ENTREGAS ===');
        this.entregaRepo.listarTodas().forEach(e => {
            console.log(`Pedido #${e.numeroPedido} | Saída: ${e.dataHoraSaida.toLocaleString()} | Endereço: ${e.enderecoEntrega}`);
        });
    }
}
// Instanciação e Teste do Sistema
const pratoRepo = new prato_1.PratoRepository();
const funcionarioRepo = new funcionario_1.FuncionarioRepository();
const entregaRepo = new entrega_1.EntregaRepository();
const relatorios = new RelatorioService(pratoRepo, funcionarioRepo, entregaRepo);
// Inserindo dados
pratoRepo.adicionar({
    id: 1,
    nome: 'Feijoada',
    dataValidade: new Date('2026-10-25'),
    nacionalidade: 'Brasileira'
});
const f1 = new funcionario_1.FuncionarioContratado(1, 'Carlos Silva', 'M', new Date('2024-01-15'), '111.222.333-44', 'MG-12.345.678', 3500.00);
const dataLimite = new Date();
dataLimite.setDate(dataLimite.getDate() + 15);
const f2 = new freelancer_1.FuncionarioFreelancer(2, 'Mariana Lima', 'F', new Date('2026-10-01'), '555.666.777-88', 'SP-98.765.432', 45.00, dataLimite);
funcionarioRepo.adicionar(f1);
funcionarioRepo.adicionar(f2);
entregaRepo.adicionar({
    id: 1,
    numeroPedido: 1042,
    enderecoEntrega: 'Rua das Flores, nº 123',
    dataHoraSaida: new Date(),
    entregadorId: 1
});
// Emitindo Relatórios
relatorios.gerarRelatorioPratos();
relatorios.gerarRelatorioFuncionarios();
const horas = new Map();
horas.set(1, 160);
horas.set(2, 40);
relatorios.gerarRelatorioSalarios(horas);
relatorios.gerarRelatorioEntregas();
//# sourceMappingURL=Sistema.js.map