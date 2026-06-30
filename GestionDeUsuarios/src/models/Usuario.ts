export type Rol = 'CLIENTE' | 'ADMIN';

export abstract class Usuario {
    protected id: number;
    protected nombre: string;
    protected correo: string;
    protected rol: Rol; 

    constructor(id: number, nombre: string, correo: string, rol: Rol) {
        this.id = id;
        this.nombre = nombre;
        this.correo = correo;
        this.rol = rol;
    }

    public obtenerId(): number {
        return this.id;
    }

    public obtenerNombre(): string {
        return this.nombre;
    }

    public obtenerRol(): Rol {
        return this.rol;
    }

    public abstract obtenerDetalles(): string;
}