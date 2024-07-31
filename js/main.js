let nombre = prompt('Ingrese su nombre').toUpperCase()
function saludar(){
    alert(`TE DAMOS LA BIENVENIDA ${nombre}`)
}
saludar();

const listadoDeProductos = [
    {
        nombreDelProd: "PLACA MADRE ATX",
        stock: true,
        precio: '$150',
    },
    {
        nombreDelProd: "PLACA MADRE BTX",
        stock: true,
        precio: '$100',
    },
    {
        nombreDelProd: "PLACA DE VIDEO RX 6700 XT",
        stock: true,
        precio: '$350',
    },
    {
        nombreDelProd: "PLACA DE VIDEO RTX 3060 TI",
        stock: true,
        precio: '$400',
    },
    {
        nombreDelProd: "MICROPROCESADOR  INTEL",
        stock: true,
        precio: '$300',
    },
    {
        nombreDelProd: "MICROPROCESADOR AMD",
        stock: true,
        precio: '$300',
    },
    {
        nombreDelProd: "SSD M.2 1TB",
        stock: false,
        precio: '$75',
    },
    {
        nombreDelProd: "SSD M.2 2TB",
        stock: true,
        precio: '$100',
    },
    {
        nombreDelProd: "FUENTE DE ALIMENTACION 600W",
        stock: false,
        precio: '$150'
    },
    {
        nombreDelProd: "FUENTE DE ALIMENTACION 800W",
        stock: true,
        precio: '$200'
    },
    {
        nombreDelProd: "RAM DDR4 32000 MHZ ",
        stock: false,
        precio: '$40'
    },
    {
        nombreDelProd: "RAM DDR5 32000 MHZ ",
        stock: true,
        precio: '$45'
    },
];
class productos {
    constructor (nombre, stock, precio){
        this.nombreDelProd = nombreDelProd;
        this.stock = stock;
        this.precio = precio;
    };
};

do{
    opcion = parseInt(prompt(`Menú de opciones:

        INGRESE UNA OPCION
        1. Todos los productos
        2. Stock inmediato
        3. Productos por pedido
        4. Buscar producto por nombre

        Para salir, ingrese 0`));
    
    switch (opcion) {
        case 0:
            alert ('Te olvidaste algo en nuestra tienda, volve pronto y llevalo!!')
            break;
        case 1:
            console.log('Todo el listado de productos' ,listadoDeProductos)
            break;

        case 2:
            const stock = listadoDeProductos.filter (el => el.stock)
            console.log('El stock inmediato',stock)
            alert('En la consola podes ver los productos con entrega inmediata')
                break;

        case 3:
            const productoPorPedido = listadoDeProductos.filter (el => !el.stock)
            console.log('Productos por pedido' ,productoPorPedido)
            alert('En la consola podes ver los productos para encargar')
                break;
        
        case 4:
            const prodABuscar = prompt('Ingrese el nombre del producto que busca').toUpperCase()
            const productoPorNombre = listadoDeProductos.find(el => el.nombreDelProd === prodABuscar)
            console.log('El producto que buscabas es', productoPorNombre)
            alert('En la consola está en resultado de tu busqueda')
                break;

        default:
            alert('Opcion no valida, ingrese la correcta.');
            break;
    }
} while (opcion !== 0)