export class Proyecto {
    titulo: string;
    fecha_inicio: Date;
    fecha_fin: Date;
    equipos: Array<object>;

    constructor(
        titulo: string,
        fecha_inicio: Date,
        fecha_fin: Date,
        equipos: Array<object>
    ) {
        this.titulo = titulo;
        this.fecha_inicio = fecha_inicio;
        this.fecha_fin = fecha_fin;
        this.equipos = equipos;
    }
}
