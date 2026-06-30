import { Cliente } from "../models/Cliente";
import { Administrador } from "../models/Administrador";
import { Usuario } from "../models/Usuario";

export const baseDatosUsuarios: Usuario[] = [
    new Cliente(1, "Joel Archila", "joel@kinal.edu.gt", "5555-1234"),
    new Administrador(2, "Gabriel Calderón", "gabriel@kinal.edu.gt", "SuperAdmin")
];