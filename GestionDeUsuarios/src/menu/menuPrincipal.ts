import { ServicioUsuario } from "../services/UsuarioServices";
import { Cliente } from "../models/Cliente";
import { Administrador } from "../models/Administrador";
import { cuestionario, cerrarReadline } from "../utils/readline";

const servicio = new ServicioUsuario();

export const ejecutarMenu = async (): Promise<void> => {
    let continuar = true;

    while (continuar) {
        console.log("\n--- SISTEMA DE GESTIÓN DE USUARIOS ---");
        console.log("1. Registrar Cliente");
        console.log("2. Registrar Administrador");
        console.log("3. Buscar Usuario por ID");
        console.log("4. Mostrar Todos los Usuarios");
        console.log("5. Salir");
        
        const opcion = await cuestionario("Seleccione una opción: ");

        switch (opcion.trim()) {
            case "1": {
                const id = parseInt(await cuestionario("ID: "));
                const nombre = await cuestionario("Nombre: ");
                const correo = await cuestionario("Correo: ");
                const telefono = await cuestionario("Teléfono: ");
                try {
                    servicio.registrarUsuario(new Cliente(id, nombre, correo, telefono));
                    console.log("Cliente registrado con éxito 🚀");
                } catch (error: any) {
                    console.log(error.message);
                }
                break;
            }
            case "2": {
                const id = parseInt(await cuestionario("ID: "));
                const nombre = await cuestionario("Nombre: ");
                const correo = await cuestionario("Correo: ");
                const acceso = await cuestionario("Nivel de Acceso: ");
                try {
                    servicio.registrarUsuario(new Administrador(id, nombre, correo, acceso));
                    console.log("¡Administrador registrado con éxito! 🔑");
                } catch (error: any) {
                    console.log(error.message);
                }
                break;
            }
            case "3": {
                const id = parseInt(await cuestionario("ID a buscar: "));
                const usuario = servicio.buscarPorId(id);
                if (usuario) {
                    console.log(`\n🔍 Usuario Encontrado (Rol: ${usuario.obtenerRol()}):`);
                    console.log(usuario.obtenerDetalles());
                } else {
                    console.log("❌ Usuario no encontrado.");
                }
                break;
            }
            case "4": {
                console.log("\n📋 Lista General de Usuarios:");
                servicio.obtenerTodos().forEach(u => console.log(u.obtenerDetalles()));
                break;
            }
            case "5":
                console.log("Cerrando el sistema... ¡Feliz día!");
                continuar = false;
                cerrarReadline();
                break;
            default:
                console.log("Opción inválida.");
        }
    }
};