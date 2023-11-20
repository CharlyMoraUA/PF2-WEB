export class Entrevista{
    id : number;
    id_candidato : string;
    fecha : Date;
    estado: string;
    nombre_entrevista : string;
    resultado : string;
    id_empresa: number;

    constructor(
        id : number,
        id_candidato : string,
        fecha : Date,
        estado: string,
        nombre_entrevista : string,
        resultado : string,
        id_empresa: number,
    ){
        this.id = id;
        this.id_candidato = id_candidato;
        this.fecha = fecha;
        this.estado = estado;
        this.nombre_entrevista = nombre_entrevista;
        this.resultado = resultado;
        this.id_empresa = id_empresa;
    }
}
