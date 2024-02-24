let estudiante = [
    { nombre: "EDWIN", apellido: "ERAZO", nota1: 8.4, nota2: 9.5, nota3: 8.7, total: 26.6, promedio: 8.7 },
    { nombre: "MARIZA", apellido: "ROSERO", nota1: 5.4, nota2: 8.5, nota3: 9.7, total: 23.6, promedio: 9.7 },
    { nombre: "ESTEBAN", apellido: "GUARANDA", nota1: 9.4, nota2: 10.0, nota3: 9.0, total: 28.4, promedio: 9.0 },
    { nombre: "RICARDO", apellido: "BATISTA", nota1: 6.4, nota2: 9.5, nota3: 8.9, total: 24.8, promedio: 8.9 },
]

calcularTotal = function (p1, p2, p3) {
    let suma;
    suma = (p1 + p2 + p3);
    return suma;
}

calcularPromedio = function (p1, p2, p3) {
    let promedio;
    promedio = (p1 + p2 + p3) / 3;
    return promedio;
}

calcular = function () {
    habilitarComponente("btnGuardar");
    
    let nota1 = recuperarTexto("txtNota1");
    let nota2 = recuperarTexto("txtNota2");
    let nota3 = recuperarTexto("txtNota3");
    let flot1 = parseFloat(nota1);
    let flot2 = parseFloat(nota2);
    let flot3 = parseFloat(nota3);
    let VALOR= esDigito(nota1,0);
    let VALOR2= esDigito(nota2,0);
    let VALOR3= esDigito(nota3,0);

    let total = calcularTotal(flot1, flot2, flot3);
    let totallbl = mostrarTexto("lblCarcularTotal", total);
    let promedio = calcularPromedio(flot1, flot2, flot3);
    let promediolbl = mostrarTexto("lblCarcularPromedio", promedio);
}


guardar = function () {
    let nombre = recuperarTexto("txtNombre");
    let apellido = recuperarTexto("txtApellido");
    let nota1 = recuperarTexto("txtNota1");
    let nota2 = recuperarTexto("txtNota2");
    let nota3 = recuperarTexto("txtNota3");
    let flot1 = parseFloat(nota1);
    let flot2 = parseFloat(nota2);
    let flot3 = parseFloat(nota3);
    let total = calcularTotal(flot1, flot2, flot3);
    let promedio = calcularPromedio(flot1, flot2, flot3);
    let objetoEstudiante = {}
    objetoEstudiante.nombre = nombre;
    objetoEstudiante.apellido = apellido;
    objetoEstudiante.nota1 = flot1;
    objetoEstudiante.nota2 = flot2;
    objetoEstudiante.nota3 = flot3;
    objetoEstudiante.total = total;
    objetoEstudiante.promedio = promedio;
    estudiante.push(objetoEmpleado);
    mostrarEstudiante();
    alert("Notas guardadas con éxito");
    limpiar();
}


mostrarEstudiante = function () {
    deshabilitarComponente("btnGuardar");
    let cmpTabla = document.getElementById("tablaEstudiante");
    let contenidoTabla = "<table><tr>" +
        "<th>NOMBRE</th>" +
        "<th>APELLIDO</th>" +
        "<th>NOTA1</th>" +
        "<th>NOTA2</th>" +
        "<th>NOTA3</th>" +
        "<th>TOTAL</th>" +
        "<th>PROMEDIO</th>" +
        "</tr>";
    let elementoEstudiante;
    for (let i = 0; i < estudiante.length; i++) {
        elementoEstudiante = estudiante[i]
        contenidoTabla +=
            "<tr><td>" + elementoEstudiante.nombre + "</td>"
            + "<td>" + elementoEstudiante.apellido + "</td>"
            + "<td>" + elementoEstudiante.nota1 + "</td>"
            + "<td>" + elementoEstudiante.nota2 + "</td>"
            + "<td>" + elementoEstudiante.nota3 + "</td>"
            + "<td>" + elementoEstudiante.total + "</td>"
            + "<td>" + elementoEstudiante.promedio + "</td>"
            + "</tr>"
    }
    contenidoTabla += "</table>"
    cmpTabla.innerHTML = contenidoTabla;
}

limpiar = function () {
    mostrarTextoEnCaja("txtNombre", "");
    mostrarTextoEnCaja("txtApellido", "");
    mostrarTextoEnCaja("txtNota1", "");
    mostrarTextoEnCaja("txtNota3", "");
    mostrarTextoEnCaja("txtNota2", "");
    deshabilitarComponente("btnGuardar");
}



esDigito = function (caracter, posicion) {
    let mensaje;
    let letra = caracter.charCodeAt(posicion);
    if (letra >= 48) {
        if (letra <= 57) {
            mensaje = alert("validado");
        } else {
            mensaje = alert("no es un numero valido");
        }
    } else {
        mensaje = alert("no es un numero valido");
    }
    return mensaje;
}