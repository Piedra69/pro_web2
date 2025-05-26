//----------------- Supabase ------------------
const SUPABASE_URL = 'https://lgesdkecvvujipojphwv.supabase.co'; // Misma URL que clientes
const SUPABASE_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImxnZXNka2VjdnZ1amlwb2pwaHd2Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDY4NzY5NTAsImV4cCI6MjA2MjQ1Mjk1MH0.AXba0EqoHlFCT3FaJNnaoQJvlaHHxg_a4OmnbyTcHtE';

const TABLE = 'productos'; // Cambiamos a tabla de productos

// /rest/v1/ es la ruta para acceder a la API REST de Supabase
const API_URL = `${SUPABASE_URL}/rest/v1/${TABLE}`;

// Headers necesarios para la autenticación y el formato de los datos
const HEADERS = {
    'apikey': SUPABASE_KEY,
    'Authorization': `Bearer ${SUPABASE_KEY}`,
    'Content-Type': 'application/json'
};

// LLAMADA DEL REST: Funciones de llamado a la API de Supabase
const listaProductos = () => {
    return fetch(`${API_URL}?select=*`, {
        headers: HEADERS
    })
    .then(res => {
        if (!res.ok) {
            throw new Error('Error al obtener la lista de productos');
        }
        return res.json();
    });
};

const crearProducto = (nombre, precio, descripcion) => {
    const producto = {
        nombre,
        precio,
        descripcion,
        id: uuid.v4() // Genera un ID único para el nuevo producto
    };
    return fetch(API_URL, {
        method: 'POST',
        headers: HEADERS,
        body: JSON.stringify(producto)
    })
    .then(async (res) => {
        if (!res.ok) {
            const text = await res.text();
            throw new Error(text || 'Error al crear el producto');
        }
        const text = await res.text();
        return text ? JSON.parse(text) : producto;
    })
    .catch((error) => {
        console.error('Error en la creación del producto:', error);
        throw error;
    });
};

const eliminarProducto = (id) => {
    return fetch(`${API_URL}?id=eq.${id}`, {
        method: 'DELETE',
        headers: HEADERS
    })
    .then(async (res) => {
        if (!res.ok) {
            const text = await res.text();
            throw new Error(text || 'Error al eliminar el producto');
        }
        if (res.ok) {
            location.reload();
        }
        const text = await res.text();
        return text ? JSON.parse(text) : { id };
    })
    .catch((error) => {
        console.error('Error al eliminar el producto:', error);
        throw error;
    });
};

const detalleProducto = (id) => {
    return fetch(`${API_URL}?id=eq.${id}`, {
        headers: HEADERS
    })
    .then(async (res) => {
        if (!res.ok) {
            const text = await res.text();
            throw new Error(text || 'Error al obtener el producto');
        }
        const text = await res.text();
        return text ? JSON.parse(text) : null;
    })
    .catch((error) => {
        console.error('Error al consultar el producto:', error);
        throw error;
    });
};

const actualizarProducto = (nombre, precio, descripcion, id) => {
    return fetch(`${API_URL}?id=eq.${id}`, {
        method: 'PATCH', // Usamos PATCH en lugar de PUT para Supabase
        headers: {
            ...HEADERS,
            'Prefer': 'return=representation'
        },
        body: JSON.stringify({ nombre, precio, descripcion })
    })
    .then(async (res) => {
        if (!res.ok) {
            const error = await res.text();
            throw new Error(error || 'Error al actualizar el producto');
        }
        const data = await res.json();
        return data[0]; // Devuelve el producto actualizado
    })
    .catch((error) => {
        console.error('Error en la actualización del producto:', error);
        throw error;
    });
};

const buscarProductos = (campo, valor) => {
    // Si el valor está vacío o es precio sin valor, devuelve todos los productos
    if (!valor || valor.trim() === '' || (campo === 'precio' && isNaN(valor))) {
        return listaProductos();
    }
    
    // Búsqueda especial para precio (búsqueda exacta)
    if (campo === 'precio') {
        return fetch(`${API_URL}?precio=eq.${valor}&select=*`, {
            headers: HEADERS
        })
        .then(res => {
            if (!res.ok) throw new Error('Error al buscar productos por precio');
            return res.json();
        });
    }
    
    // Búsqueda por nombre o descripción (búsqueda parcial)
    return fetch(`${API_URL}?${campo}=ilike.%25${encodeURIComponent(valor)}%25&select=*`, {
        headers: HEADERS
    })
    .then(res => {
        if (!res.ok) throw new Error('Error al buscar productos');
        return res.json();
    });
};

export const productService = {
    listaProductos,
    crearProducto,
    eliminarProducto,
    detalleProducto,
    actualizarProducto,
    buscarProductos
};

/*
EN EL SQL EDITOR DE SUPABASE PARA LA TABLA productos

CREATE POLICY "Allow public read access" 
ON productos FOR SELECT 
TO authenticated, anon
USING (true);

CREATE POLICY "Allow all" ON productos
FOR ALL
USING (true);
*/