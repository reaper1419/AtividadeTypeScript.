"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EntregaRepository = void 0;
class EntregaRepository {
    entregas = [];
    adicionar(entrega) {
        const jaExiste = this.entregas.some(e => e.id === entrega.id);
        if (jaExiste) {
            throw new Error(`Já existe uma entrega registrada com o ID ${entrega.id}.`);
        }
        this.entregas.push(entrega);
    }
    listarTodas() {
        // Retorna uma cópia para proteger o array interno contra mutações externas
        return [...this.entregas];
    }
    buscarPorId(id) {
        return this.entregas.find(e => e.id === id);
    }
    buscarPorEntregador(entregadorId) {
        return this.entregas.filter(e => e.entregadorId === entregadorId);
    }
}
exports.EntregaRepository = EntregaRepository;
//# sourceMappingURL=Entrega.js.map