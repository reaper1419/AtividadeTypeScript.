export interface Entrega {
    id: number;
    numeroPedido: number;
    enderecoEntrega: string;
    dataHoraSaida: Date;
    entregadorId: number;
}
export declare class EntregaRepository {
    private entregas;
    adicionar(entrega: Entrega): void;
    listarTodas(): Entrega[];
    buscarPorId(id: number): Entrega | undefined;
    buscarPorEntregador(entregadorId: number): Entrega[];
}
//# sourceMappingURL=Entrega.d.ts.map