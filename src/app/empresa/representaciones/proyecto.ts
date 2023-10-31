export class Proyecto {
    id_empresa: number
    titulo: string;
    fecha_inicio: Date;
    fecha_fin: Date;
    equipos: Array<object>;

    constructor(
        id_empresa: number,
        titulo: string,
        fecha_inicio: Date,
        fecha_fin: Date,
        equipos: Array<object>
    ) {
        this.id_empresa = id_empresa;
        this.titulo = titulo;
        this.fecha_inicio = fecha_inicio;
        this.fecha_fin = fecha_fin;
        this.equipos = equipos;
    }
}
