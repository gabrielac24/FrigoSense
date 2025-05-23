window.addEventListener("load", function() {
    let boton1 = document.getElementById("boton1");
    boton1.addEventListener("click", onClick);
});

function onClick() {
    let resp = document.getElementById("respuesta");
    let num1 = parseInt(document.getElementById("numero1").value());
    let num2 = parseInt(document.getElementById("numero2").value());
    let num3 = parseInt(document.getElementById("numero3").value());

    if (isNaN(num1) || isNaN(num2) || isNaN(num3)) {
        resp.textContent = "Alguno(s) de los campos está vacío o no es un número.";
        resp.style.color = "red";
    } else {
        let mayor = Math.max(num1, num2, num3);
        resp.textContent = "El número mayor es: " + mayor;
        resp.style.color = "green";
    }
}
