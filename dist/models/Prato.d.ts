export interface Prato {
    id: number;
    nome: string;
    dataValidade: Date;
    nacionalidade: string;
}
export declare class PratoRepository {
    private pratos;
    adicionar(prato: Prato): void;
    listarTodos(): Prato[];
    buscarPorId(id: number): Prato | undefined;
}
//# sourceMappingURL=Prato.d.ts.map