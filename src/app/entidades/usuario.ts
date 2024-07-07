export interface User {
    id?:number;
    nombre:string;
    apellido:string;
    mail:string;
    nacimiento : Date;
    usuario:String;
    password:string;
    tipo_usuario:number;
    perfil_foto?:string | ArrayBuffer | null;
    autorizado:number;
    especialidad?:string;
    //id_medigo:number;
}

