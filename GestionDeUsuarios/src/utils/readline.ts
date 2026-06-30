import readline from "readline";

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

export const cuestionario = (pregunta: string): Promise<string> => {
    return new Promise((resolve) => rl.question(pregunta, resolve));
};

// Función para limpiar la consola por completo
export const limpiarPantalla = (): void => {
    process.stdout.write("\x1b[2J\x1b[H");
};

export const cerrarReadline = () => rl.close();