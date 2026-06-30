import { Usuario } from "../models/Usuario";
import { baseDatosUsuarios } from "../data/usuariosData";

export class ServicioUsuario {
    private usuarios: Usuario[] = baseDatosUsuarios;

    public registrarUsuario(nuevoUsuario: Usuario): void {
        const existe = this.usuarios.some(u => u.obtenerId() === nuevoUsuario.obtenerId());
        if (existe) {
            throw new Error(`Error: El ID ${nuevoUsuario.obtenerId()} ya está registrado.`);
        }
        this.usuarios.push(nuevoUsuario);
    }

    public buscarPorId(id: number): Usuario | undefined {
        return this.usuarios.find(u => u.obtenerId() === id);
    }

    public obtenerTodos(): Usuario[] {
        return this.usuarios;
    }
}