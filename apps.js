const velas = [
    {modelo: "Ibiza Blanco Matte", precio: 1300},
    {modelo: "Mallorca", precio: 999},
    {modelo: "Marbella Plata", precio: 2100},
    {modelo: "Toronto", precio: 1500},
];

let carrito = []

let seleccion = prompt("¿Desea llevar alguno de nuestros modelos de velas? ¿Si o no?")

while(seleccion != "si" && seleccion != "no"){
    alert("Por favor, ingrese si o no")
    seleccion = prompt("¿Desea llevar alguno de nuestros modelos de velas? ¿Si o no?")
}

if (seleccion == "si"){
    alert("A continuación nuestra lista de modelos")
    let todasLasvelas = velas.map(
        (vela) => "Modelo: " + vela.modelo + " - " + "Precio: $" + vela.precio
    );
    alert(todasLasvelas.join(" | "))
}
else{
    alert("Muchas gracias por su visita ! Hasta pronto !")
}

while (seleccion != "no"){
    let vela = prompt("Agrega una vela a tu carrito")
    let precio = 0

    if(vela == "Ibiza Blanco Matte" || vela == "Mallorca" || vela == "Marbella Plata" || vela == "Toronto"){
        switch(vela){
            case "Ibiza Blanco Matte":
                precio = 1300;
                break;
            case "Mallorca":
                precio = 999;
                break;
            case "Marbella Plata":
                precio = 2100;
                break;
            case "Toronto":
                precio = 1500;
                break;
            default:
                break;
        }
    let cantidad = parseInt(prompt("¿Cuantas unidades desea llevar?"))
    carrito.push({vela , cantidad, precio})
    console.log(carrito)
    }
    else{
        alert("Por favor, tipee un modelo válido en su carrito")
    }

    seleccion = prompt("¿Desea añadir más productos a su carrito?")

    while(seleccion == "no"){
        alert("Muchas gracias por su compra ! Hasta luego !")
        carrito.forEach((carritoFinal) => {
            console.log(`Modelo: ${carritoFinal.vela}, Cantidad: ${carritoFinal.cantidad}, Total a pagar por modelo: ${carritoFinal.cantidad*carritoFinal.precio}`)
        })
    break;
    }
}

const total = carrito.reduce((acum,el) => acum + el.precio * el.cantidad,0)
console.log(`El total a pagar por su compra es: ${total}`)