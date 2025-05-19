// client-service.js

// No necesitamos generar UUIDs si Supabase lo hace automáticamente
const SUPABASE_URL = 'https://pizlpamjswubqgviumbp.supabase.co';
const SUPABASE_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InBpemxwYW1qc3d1YnFndml1bWJwIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDcwNDg3MDcsImV4cCI6MjA2MjYyNDcwN30.d-deMnazVr4MCZlAaDsDNVkmGbNHMBIdP2Whq6HiwLQ';
const TABLE = 'perfil';
const API_URL = `${SUPABASE_URL}/rest/v1/${TABLE}`;
const HEADERS = {
    'apikey': SUPABASE_KEY,
    'Authorization': `Bearer ${SUPABASE_KEY}`,
    'Content-Type': 'application/json',
    'Prefer': 'return=representation'
};

// Listar todos los clientes
const listaClientes = () => {
    return fetch(`${API_URL}?select=*`, {
        headers: HEADERS
    })
    .then(res => {
        if (!res.ok) throw new Error('Error en listar clientes');
        return res.json();
    });
};

// Crear nuevo cliente (Supabase generará el UUID automáticamente)
const crearCliente = (nombre, email) => {
    // Validación básica
    if (!nombre || !email) {
        throw new Error('Nombre y email son requeridos');
    }

    const cliente = {
        nombre,
        email
        // No incluimos el id, Supabase lo generará
    };

    return fetch(API_URL, {
        method: 'POST',
        headers: HEADERS,
        body: JSON.stringify(cliente)
    }).then(async (res) => {
        if (!res.ok) {
            const errorData = await res.json();
            throw new Error(errorData.message || 'Error al crear el cliente');
        }
        return res.json();
    }).catch(err => {
        console.error('Error al crear el cliente:', err);
        throw err;
    });
};

// Eliminar cliente por ID
const eliminarCliente = (id) => {
    if (!id) throw new Error('ID es requerido');

    return fetch(`${API_URL}?id=eq.${id}`, {
        method: 'DELETE',
        headers: HEADERS
    }).then(res => {
        if (!res.ok) throw new Error('Error al eliminar cliente');
        return res.json();
    }).catch(error => {
        console.error('Error al eliminar cliente:', error);
        throw error;
    });
};

// Obtener un cliente específico por ID
const obtenerCliente = (id) => {
    if (!id) throw new Error('ID es requerido');

    return fetch(`${API_URL}?id=eq.${id}`, {
        headers: HEADERS
    })
    .then(res => {
        if (!res.ok) throw new Error('Error al obtener cliente');
        return res.json();
    })
    .then(data => data[0]); // Supabase devuelve un array
};

// Actualizar cliente
const actualizarCliente = (id, nombre, email) => {
    if (!id || !nombre || !email) {
        throw new Error('ID, nombre y email son requeridos');
    }

    return fetch(`${API_URL}?id=eq.${id}`, {
        method: 'PATCH',
        headers: HEADERS,
        body: JSON.stringify({ nombre, email })
    })
    .then(async res => {
        if (!res.ok) {
            const errorData = await res.json();
            throw new Error(errorData.message || 'Error al actualizar cliente');
        }
        return res.json();
    })
    .then(data => data[0]); // Supabase devuelve un array
};

export const clientService = {
    listaClientes,
    crearCliente,
    eliminarCliente,
    obtenerCliente,
    actualizarCliente
};