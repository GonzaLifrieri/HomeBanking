//Declaración de variables
var saldoCuenta = 6000;
var nombreUsuario = "Roberto Pindapoy";
var limiteExtraccion = 1000;
var agua = 350;
var telefono = 425;
var luz = 210;
var internet = 570;
var cuentaAmiga1 = "1234567";
var cuentaAmiga2 = "7654321";
var codigoDeSeguridad = "666";

//Ejecución de las funciones que actualizan los valores de las variables en el HTML.
window.onload = function() {
    iniciarSesion();
    cargarNombreEnPantalla();
    actualizarSaldoEnPantalla();
    actualizarLimiteEnPantalla();
}


//Funciones que tenes que completar
function sumarDinero(valor){
    saldoCuenta += parseInt(valor);
}
function restarDinero(valor){
    saldoCuenta -= parseInt(valor);
}

function noEstaVacioYEsNumero(valor){
    if(valor == null || valor == '' || valor == false || isNaN(valor) == true){
        return false;
    } else{
        return true;
    }
}

function cambiarLimiteDeExtraccion() {
    let nuevoLimiteDeExtraccion = prompt("Ingrese el nuevo límite de extracción");
    if(noEstaVacioYEsNumero(nuevoLimiteDeExtraccion)){
    limiteExtraccion = nuevoLimiteDeExtraccion;
    actualizarLimiteEnPantalla();
    alert("Has modificado el límite de extracción a: $" + limiteExtraccion);
} else{
    alert("La operación ha sido cancelada. Intente de nuevo")
}
}
function haySaldoDisponible(valor){
    if(valor < saldoCuenta){
        return true;
    } else {
        return false;
    }
}
function noExcedeElLimite(valor){
    if(valor <= limiteExtraccion){
        return true;
    } else{
        return false;
    }
}
function soloBilletesDe100(valor){
    if(valor % 100 == 0){
        return true;
    } else{
        return false;
    }
}

function extraerDinero() {
    let saldoAnterior = saldoCuenta;
    let valor = prompt("Ingrese la cantidad de dinero a extraer");
    if(noEstaVacioYEsNumero(valor)){
    if(haySaldoDisponible(valor)){
        if(noExcedeElLimite(valor)){
                if(soloBilletesDe100(valor)){
                    restarDinero(valor);
                    actualizarSaldoEnPantalla();
                    alert("Has retirado: $"+valor + "\n" + "Saldo Anterior: $" + saldoAnterior + "\n" + "Saldo Actual: $" + saldoCuenta);
            } else{
                alert("Solo se pueden retirar billetes de 100")
            }
        } else{
            alert("La cantidad de dinero que deseas extraer supera tu límite de extracción")
        }
    } else{
            alert("No hay saldo disponible en tu cuenta para extraer esa cantidad de dinero")
    }
    } else{
        alert("La operación ha sido cancelada. Intente de nuevo")
    }
}

function depositarDinero() {
    let saldoAnterior = saldoCuenta;
    let valor = prompt("Ingrese la cantidad de dinero a depositar");
    if(noEstaVacioYEsNumero(valor)){
    sumarDinero(valor);
    actualizarSaldoEnPantalla();
    alert("Has depositado: $"+valor + "\n" + "Saldo Anterior: $" + saldoAnterior + "\n" + "Saldo Actual: $" + saldoCuenta);
    } else {
        alert("La operación ha sido cancelada.Intente de nuevo")
    }
}

function pagarServicio() {
    let saldoAnterior = saldoCuenta;
    let numeroDeServicio = prompt("Ingrese el número que corresponda con el servicio que desea pagar \n 1 - Agua \n 2 - Teléfono \n 3 - Luz \n 4 - Internet");
    switch(numeroDeServicio){
        case "1":
            if(haySaldoDisponible(agua)){
                saldoCuenta -= agua;
                actualizarSaldoEnPantalla();
                alert("Has pagado el servicio de agua. \n Saldo anterior: $" + saldoAnterior + "\n" + "Dinero descontado: $" + agua +"\n" + "Saldo actual: $" + saldoCuenta);
            } else{
                alert("No hay suficiente saldo en tu cuenta para pagar este servicio");
            }
            break;
            case "2":
                    if(haySaldoDisponible(telefono)){
                        saldoCuenta -= telefono;
                        actualizarSaldoEnPantalla();
                        alert("Has pagado el servicio de teléfono. \n Saldo anterior: $" + saldoAnterior + "\n" + "Dinero descontado: $" + telefono +"\n" + "Saldo actual: $" + saldoCuenta);
                    } else{
                        alert("No hay suficiente saldo en tu cuenta para pagar este servicio");
                    }
                    break;
            case "3":
                    if(haySaldoDisponible(luz)){
                        saldoCuenta -= luz;
                        actualizarSaldoEnPantalla();
                        alert("Has pagado el servicio de luz. \n Saldo anterior: $" + saldoAnterior + "\n" + "Dinero descontado: $" + luz +"\n" + "Saldo actual: $" + saldoCuenta);
                    } else{
                        alert("No hay suficiente saldo en tu cuenta para pagar este servicio")
                    }
                    break;
            case "4":
                    if(haySaldoDisponible(internet)){
                        saldoCuenta -= internet;
                        actualizarSaldoEnPantalla();
                        alert("Has pagado el servicio de internet. \n Saldo anterior: $" + saldoAnterior + "\n" + "Dinero descontado: $" + internet +"\n" + "Saldo actual: $" + saldoCuenta);
                    } else{
                        alert("No hay suficiente saldo en tu cuenta para pagar este servicio")
                    }
                    break;
            default:
                    alert("El servicio que ha seleccionado no existe")
                    break;
    }
}

function transferirDinero() {
    let montoATransferir = prompt("Ingrese el monto que desea transferir");
    if(noEstaVacioYEsNumero(montoATransferir)){    
        if(haySaldoDisponible(montoATransferir)){
            let numeroDeCuenta = prompt("Ingrese el numero de cuenta a transferir");
                if(numeroDeCuenta == cuentaAmiga1 || numeroDeCuenta == cuentaAmiga2){
                    restarDinero(montoATransferir);
                    actualizarSaldoEnPantalla();
                    alert("Se han transferido: $" + montoATransferir + "\n" + "Cuenta Destino:" + numeroDeCuenta);
                    } else{
                        alert("Solo se puede transferir dinero a cuentas afiliadas");
                    }
            } else{
                alert("No se puede transferir el monto seleccionado debido a saldo insuficiente");
            }
    }else{
        alert("La operación ha sido cancelada")
    }
}

function iniciarSesion() {
    let codigoIngresado = prompt("Ingrese el código de seguridad");
    if(codigoIngresado == codigoDeSeguridad){
        alert("Bienvenido/a " + nombreUsuario + ". Ya puedes comenzar a realizar operaciones")
    } else{
        limiteExtraccion = 0;
        saldoCuenta = 0;
        nombreUsuario = "Usuario incorrecto";
        alert("Código incorrecto. Tu dinero ha sido retenido por cuestiones de seguridad")
    }
}

//Funciones que actualizan el valor de las variables en el HTML
function cargarNombreEnPantalla() {
    document.getElementById("nombre").innerHTML = "Bienvenido/a " + nombreUsuario;
}

function actualizarSaldoEnPantalla() {
    document.getElementById("saldo-cuenta").innerHTML = "$" + saldoCuenta;
}

function actualizarLimiteEnPantalla() {
    document.getElementById("limite-extraccion").innerHTML = "Tu límite de extracción es: $" + limiteExtraccion;
}