precio = 400000

precioSpan = document.querySelector(".precio-inicial");
precioSpan.innerHTML = precio;
cantidad = document.querySelector(".cantidad").innerHTML;


function mas() {
    ++cantidad;
    document.querySelector(".cantidad").innerHTML = cantidad;

    monto = precio * cantidad;
    document.querySelector(".valor-total").innerHTML = monto;
}

function menos() {
    if (cantidad <= 0) return;
    --cantidad;
    document.querySelector(".cantidad").innerHTML = cantidad;

    total = document.querySelector(".valor-total").innerHTML;
    document.querySelector(".valor-total").innerHTML = total - precio;
}