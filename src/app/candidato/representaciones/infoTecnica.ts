export class infoTecnica{
    id : number;
    tipo : string;
    valor : string;
    id_candidato: number;

    constructor(
        id : number,
        tipo : string,
        valor : string,
        id_candidato : number,
    ){
        this.id = id;
        this.tipo = tipo;
        this.valor = valor;
        this.id_candidato = id_candidato;
    }
}