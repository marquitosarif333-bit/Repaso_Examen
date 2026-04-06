let inventario = [];

// Agregar producto
function agregarProducto(nombre, precio, cantidad) {
    const producto = {
        nombre: nombre,
        precio: precio,
        cantidad: cantidad
    };

    inventario.push(producto);
}

// Calcular total
function calcularTotal() {
    let total = 0;

    inventario.forEach(p => {
        total += p.precio * p.cantidad;
    });

    return total;
}

// DOM
const nombre = document.getElementById("nombre");
const precio = document.getElementById("precio");
const cantidad = document.getElementById("cantidad");
const btn = document.getElementById("btnAgregar");
const totalDisplay = document.getElementById("totalDisplay");

btn.addEventListener("click", () => {
    const n = nombre.value.trim();
    const p = parseFloat(precio.value);
    const c = parseInt(cantidad.value);

    if (n === "" || isNaN(p) || isNaN(c)) {
        alert("Datos inválidos");
        return;
    }

    agregarProducto(n, p, c);
    totalDisplay.textContent = calcularTotal();

    nombre.value = "";
    precio.value = "";
    cantidad.value = "";
});