const API_VISTAS_URL = 'http://localhost/api1/Conexion_vistas.php';

const obtenerClientesConMascotas = async () => {
    try {
        const response = await fetch(API_VISTAS_URL);
        if (!response.ok) throw new Error('Error al obtener vista de clientes');
        return await response.json();
    } catch (error) {
        console.error("Error al obtener clientes con mascotas:", error);
        throw error;
    }
};

const buscarClientesConMascotas = async (campo, valor) => {
    try {
        const clientes = await obtenerClientesConMascotas();

        if (campo === 'asc') {
            return clientes.sort((a, b) => a.cantidadMascotas - b.cantidadMascotas);
        }

        if (campo === 'desc') {
            return clientes.sort((a, b) => b.cantidadMascotas - a.cantidadMascotas);
        }

        if (campo && valor) {
            return clientes.filter(cliente =>
                cliente[campo].toLowerCase().includes(valor.toLowerCase())
            );
        }

        return clientes;
    } catch (error) {
        console.error("Error al buscar clientes:", error);
        throw error;
    }
};


export const vistasService = {
    obtenerClientesConMascotas,
    buscarClientesConMascotas
};