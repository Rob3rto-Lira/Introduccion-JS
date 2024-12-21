precio = 400000

precioSpan = document.querySelector(".precio-inicial");
precioSpan.innerHTML = precio;
cantidad = document.querySelector(".cantidad").innerHTML;


function mas() {
    ++cantidad;
    valor = document.querySelector(".cantidad").innerHTML = cantidad;

    total = valor;
    pagar = total.innerHTML;
    pagar = precio * valor;
    document.querySelector(".valor-total").innerHTML = pagar;
}

function menos() {
    --cantidad;
    document.querySelector(".cantidad").innerHTML = cantidad;

    total = document.querySelector(".valor-total").innerHTML;
    document.querySelector(".valor-total").innerHTML = total - precio;
}