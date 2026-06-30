import { Usuario } from "./Usuario";

export class Cliente extends Usuario {
    private telefono: string;

    constructor(id: number, nombre: string, correo: string, telefono: string) {
        
        super(id, nombre, correo, 'CLIENTE');
        this.telefono = telefono;
    }

    public obtenerDetalles(): string {
        return `[${this.rol}] ID: ${this.id} | Nombre: ${this.nombre} | Correo: ${this.correo} | Teléfono: ${this.telefono}`;
    }
}