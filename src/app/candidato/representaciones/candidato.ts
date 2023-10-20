export class Candidato{
    id : number;
    tipo_doc : string;
    num_doc : string;
    nombre : string;
    usuario : string;
    clave : string;
    telefono : number;
    email : string;
    pais : string;
    ciudad : string;
    aspiracion_salarial : number;
    fecha_nacimiento : Date;
    idiomas : string;

    constructor(
        id : number,
        tipo_doc : string,
        num_doc : string,
        nombre : string,
        usuario : string,
        clave : string,
        telefono : number,
        email : string,
        pais : string,
        ciudad : string,
        aspiracion_salarial : number,
        fecha_nacimiento : Date,
        idiomas : string,
    ){
        this.id = id;
        this.tipo_doc = tipo_doc;
        this.num_doc = num_doc;
        this.nombre = nombre;
        this.usuario = usuario;
        this.clave = clave;
        this.telefono = telefono;
        this.email = email;
        this.pais = pais;
        this.ciudad = ciudad;
        this.aspiracion_salarial = aspiracion_salarial;
        this.fecha_nacimiento = fecha_nacimiento;
        this.idiomas = idiomas;

    }
}