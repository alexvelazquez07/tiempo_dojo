//Capturamos id del elemento html
var cookie = document.getElementById("cookie");

//Funcion eliminar, pasamos el parámetro 
function eliminarCookie(){
    cookie.remove();
}

//Aqui habilitamos las alertas
function alerta(){
    alert("This paga says \nLoading weather report...")
}

function c2f(temp) {
    return Math.round(9 / 5 * temp + 32);
}

function f2c(temp) {
    return Math.round(5 / 9 * (temp - 32));
}

function convert(element) {
    console.log(element.value);
    for(var i=1; i<9; i++) {
        var tempSpan = document.querySelector("#temp" + i);
        var tempVal = parseInt(tempSpan.innerText);
        if(element.value == "°C") {
            tempSpan.innerText = f2c(tempVal);
        } else {
            tempSpan.innerText = c2f(tempVal);
        }
    }
}