import { Usuario } from "./Usuario";

export class Administrador extends Usuario {
    private nivelAcceso: string;

    constructor(id: number, nombre: string, correo: string, nivelAcceso: string) {
        
        super(id, nombre, correo, 'ADMIN');
        this.nivelAcceso = nivelAcceso;
    }

    public obtenerDetalles(): string {
        return `[${this.rol}] ID: ${this.id} | Nombre: ${this.nombre} | Correo: ${this.correo} | Acceso: ${this.nivelAcceso}`;
    }
}