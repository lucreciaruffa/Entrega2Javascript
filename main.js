let pizzas = [
    { id: 1, nombre: "Muzzarella", ingredientes: ["Muzarella"], precio: "450", img: `./assets/pizzaMuzza.png` },
    { id: 2, nombre: "Napolitana", ingredientes: ["Muzarella, tomate en rodajes,"], precio: "500", img: `./assets/pizzaNapo.png` },
    { id: 3, nombre: "Quattro formaggi", ingredientes: ["Muzarella", "Gorgonzola", "Parmesano", "Provole"], precio: "750", img: `./assets/pizzaFormaggi.png` },
    { id: 4, nombre: "Popeye", ingredientes: ["Muzarella", "espinaca", "salsa blanca"], precio: "670", img: `./assets/pizzaPopeye.png` },
    { id: 5, nombre: "Cebolla", ingredientes: ["Muzarella", "Cebolla"], precio: "550", img: `./assets/pizzaCebolla.png` },
    { id: 6, nombre: "Jamón y morrones", ingredientes: ["Muzarella", "jamón", "morrones"], precio: "650", img: `./assets/pizzaseis.png` }
]


let nombrecito = document.querySelector("#pizzaNombre");
let precio = document.querySelector("#pizzaPrecio");
let form = document.querySelector("#formulario");
let input = document.querySelector("#input_number");
let mensajito = document.querySelector("#mensajito");
let fotoPizza = document.querySelector("#pizzaPic");
let boton = document.querySelector("#btn");


function submit(e) {
    e.preventDefault();

    let toFind = parseInt(input.value);
    const found = pizzas.find(pizza => pizza.id === toFind)

    if (found) {
        nombrecito.innerHTML = found.nombre
        precio.innerHTML = `$  ${found.precio}`
        mensajito.innerHTML = ""
        fotoPizza.src = found.img
    } else {
        mensajito.innerHTML = `No contamos con la pizza que solicitaste`;
        nombrecito.innerHTML = ""
        precio.innerHTML = ""
        fotoPizza.src = ""
    }
    input.value = ""
}

form.addEventListener("submit", submit)