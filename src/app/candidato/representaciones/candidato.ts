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
    fecha_ultima_evaluacion: Date;
    promedio_evaluaciones: number;
    estado: string;
    habilidades_tecnicas: Array<object>;
    info_academica: Array<object>;

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
        fecha_ultima_evaluacion: Date,
        promedio_evaluaciones: number,
        estado: string,
        habilidades_tecnicas: Array<object>,
        info_academica: Array<object>,
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
        this.fecha_ultima_evaluacion = fecha_ultima_evaluacion;
        this.promedio_evaluaciones = promedio_evaluaciones;
        this.estado = estado;
        this.habilidades_tecnicas = habilidades_tecnicas;
        this.info_academica = info_academica;

    }
}