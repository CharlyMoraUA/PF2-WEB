export class Empresa{
    empresa_tipo_doc : string;
    empresa_num_doc : string;
    empresa_nombre : string;
    empresa_telefono : string;
    empresa_email : string;
    representante_tipo_doc : string;
    representante_num_doc : string;
    representante_nombre : string;
    representante_telefono : string;
    representante_email : string;
    representante_usuario : string;
    representante_clave : string;

    constructor(
        empresa_tipo_doc : string,
        empresa_num_doc : string,
        empresa_nombre : string,
        empresa_telefono : string,
        empresa_email : string,
        representante_tipo_doc : string,
        representante_num_doc : string,
        representante_nombre : string,
        representante_telefono : string,
        representante_email : string,
        representante_usuario : string,
        representante_clave : string,
    ){
        this.empresa_tipo_doc = empresa_tipo_doc;
        this.empresa_num_doc = empresa_num_doc;
        this.empresa_nombre = empresa_nombre;
        this.empresa_telefono = empresa_telefono;
        this.empresa_email = empresa_email;
        this.representante_tipo_doc = representante_tipo_doc;
        this.representante_num_doc = representante_num_doc;
        this.representante_nombre = representante_nombre;
        this.representante_telefono = representante_telefono;
        this.representante_email = representante_email;
        this.representante_usuario = representante_usuario;
        this.representante_clave = representante_clave;

    }
}