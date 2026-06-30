import { ServicioUsuario } from "../services/UsuarioServices";
import { Cliente } from "../models/Cliente";
import { Administrador } from "../models/Administrador";
import { cuestionario, cerrarReadline, limpiarPantalla } from "../utils/readline";

const servicio = new ServicioUsuario();

export const ejecutarMenu = async (): Promise<void> => {
    let continuar = true;

    // Limpieza inicial al arrancar el programa
    limpiarPantalla();

    while (continuar) {
        console.log("--- SISTEMA DE GESTIÓN DE USUARIOS ---");
        console.log("1. Registrar Cliente");
        console.log("2. Registrar Administrador");
        console.log("3. Buscar Usuario por ID");
        console.log("4. Mostrar Todos los Usuarios");
        console.log("5. Salir");
        
        const opcion = await cuestionario("Seleccione una opción: ");

        switch (opcion.trim()) {
            case "1": {
                limpiarPantalla();
                console.log("--- REGISTRAR CLIENTE ---");
                const id = parseInt(await cuestionario("ID: "));
                const nombre = await cuestionario("Nombre: ");
                const correo = await cuestionario("Correo: ");
                const telefono = await cuestionario("Teléfono: ");
                try {
                    servicio.registrarUsuario(new Cliente(id, nombre, correo, telefono));
                    console.log("\nCliente registrado con éxito 🚀");
                } catch (error: any) {
                    console.log(`\n${error.message}`);
                }
                await cuestionario("\nPresione Enter para continuar...");
                limpiarPantalla();
                break;
            }
            case "2": {
                limpiarPantalla();
                console.log("--- REGISTRAR ADMINISTRADOR ---");
                const id = parseInt(await cuestionario("ID: "));
                const nombre = await cuestionario("Nombre: ");
                const correo = await cuestionario("Correo: ");
                const acceso = await cuestionario("Nivel de Acceso: ");
                try {
                    servicio.registrarUsuario(new Administrador(id, nombre, correo, acceso));
                    console.log("\n¡Administrador registrado con éxito 🔑");
                } catch (error: any) {
                    console.log(`\n${error.message}`);
                }
                await cuestionario("\nPresione Enter para continuar...");
                limpiarPantalla();
                break;
            }
            case "3": {
                limpiarPantalla();
                console.log("--- BUSCAR USUARIO ---");
                const id = parseInt(await cuestionario("ID a buscar: "));
                const usuario = servicio.buscarPorId(id);
                if (usuario) {
                    console.log(`\n🔍 Usuario Encontrado (Rol: ${usuario.obtenerRol()}):`);
                    console.log(usuario.obtenerDetalles());
                } else {
                    console.log("\n❌ Usuario no encontrado.");
                }
                await cuestionario("\nPresione Enter para continuar...");
                limpiarPantalla();
                break;
            }
            case "4": {
                limpiarPantalla();
                console.log("--- LISTA GENERAL DE USUARIOS ---");
                const lista = servicio.obtenerTodos();
                if (lista.length === 0) {
                    console.log("No hay usuarios registrados en el sistema.");
                } else {
                    lista.forEach(u => console.log(u.obtenerDetalles()));
                }
                await cuestionario("\nPresione Enter para continuar...");
                limpiarPantalla();
                break;
            }
            case "5":
                limpiarPantalla();
                console.log("Cerrando el sistema... ¡Feliz día!");
                continuar = false;
                cerrarReadline();
                break;
            default:
                limpiarPantalla();
                console.log(" Opción inválida. Intente de nuevo.");
                await cuestionario("\nPresione Enter para continuar...");
                limpiarPantalla();
        }
    }
};