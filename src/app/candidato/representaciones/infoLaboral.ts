export class infoLaboral{
    cargo : string;
    ano_inicio : number;
    ano_fin : number;
    empresa : string;
    descripcion : string;
    id_candidato: number;

    constructor(
        cargo : string,
        ano_inicio : number,
        ano_fin : number,
        empresa : string,
        descripcion : string,
        id_canidato : number,
    ){
        this.cargo = cargo;
        this.ano_inicio = ano_inicio; 
        this.ano_fin = ano_fin;
        this.empresa = empresa;
        this.descripcion = descripcion;
        this.id_candidato = id_canidato;
    }
}