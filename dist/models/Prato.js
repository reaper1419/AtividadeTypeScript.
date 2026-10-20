"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PratoRepository = void 0;
class PratoRepository {
    pratos = [];
    adicionar(prato) {
        const jaExiste = this.pratos.some(p => p.id === prato.id);
        if (jaExiste) {
            throw new Error(`Já existe um prato com o ID ${prato.id}.`);
        }
        this.pratos.push(prato);
    }
    listarTodos() {
        // Retorna uma cópia para proteger o array interno contra modificações externas
        return [...this.pratos];
    }
    buscarPorId(id) {
        return this.pratos.find(p => p.id === id);
    }
}
exports.PratoRepository = PratoRepository;
//# sourceMappingURL=Prato.js.map