export class RolInput {
    titulo: string;
    descripcion: string;
    blandas: any[];
    tecnicas: any[];

    constructor(
        titulo: string,
        descripcion: string,
        blandas: any[],
        tecnicas: any[]
    ) {
        this.titulo = titulo;
        this.descripcion = descripcion;
        this.blandas = blandas;
        this.tecnicas = tecnicas;
    }
}
