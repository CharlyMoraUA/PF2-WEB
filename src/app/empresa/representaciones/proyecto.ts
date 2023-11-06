export class Proyecto {
    id_empresa: number
    titulo: string;
    fecha_inicio: Date;
    fecha_fin: Date;
    equipos: Array<object>;
    fichas_trabajo: Array<object>;
    hojas_trabajo: Array<object>;

    constructor(
        id_empresa: number,
        titulo: string,
        fecha_inicio: Date,
        fecha_fin: Date,
        equipos: Array<object>,
        fichas_trabajo: Array<object>,
        hojas_trabajo: Array<object>,
    ) {
        this.id_empresa = id_empresa;
        this.titulo = titulo;
        this.fecha_inicio = fecha_inicio;
        this.fecha_fin = fecha_fin;
        this.equipos = equipos;
        this.fichas_trabajo = fichas_trabajo;
        this.hojas_trabajo = hojas_trabajo;
    }
}
