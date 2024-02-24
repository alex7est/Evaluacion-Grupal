let estudiantes = [
    { nombre: "Edwin", apellido: "Erazo", nota1: 8.4, nota2: 9.5, nota3: 8.7, total: 26.6, promedio: 8.7 },
    { nombre: "Maritza", apellido: "Rosero", nota1: 5.4, nota2: 8.5, nota3: 9.7, total: 23.6, promedio: 9.7 },
    { nombre: "Esteban", apellido: "Guaranda", nota1: 9.4, nota2: 10.0, nota3: 9.0, total: 28.4, promedio: 9.0 },
    { nombre: "Ricardo", apellido: "Batista", nota1: 6.4, nota2: 9.5, nota3: 8.9, total: 24.8, promedio: 8.9 },
]

calcularTotal = function (n1, n2, n3) {
    let total;
    total = (n1 + n2 + n3);
    return total.toFixed(1)
}

calcularPromedio = function (p1, p2, p3) {
    let promedio;
    promedio = (p1 + p2 + p3) / 3;
    return promedio.toFixed(1)
}

calcular = function () {
    let nota1Recuperado = recuperarFloat("txtNota1");
    let nota2Recuperado = recuperarFloat("txtNota2");
    let nota3Recuperado = recuperarFloat("txtNota3");
    let suma = calcularTotal(nota1Recuperado, nota2Recuperado, nota3Recuperado);
    mostrarTexto("Suma", suma);
    let promedio = calcularPromedio(nota1Recuperado, nota2Recuperado, nota3Recuperado);
    mostrarTexto("Promedio", promedio);
    habilitarComponente("btnGuardar");
}

guardar = function(){
    let valorNombre = recuperarTexto("txtNombre");
    let valorApellido = recuperarTexto("txtApellido");
    let nota1Recuperado = recuperarFloat("txtNota1");
    let nota2Recuperado = recuperarFloat("txtNota2");
    let nota3Recuperado = recuperarFloat("txtNota3");
    let suma = calcularTotal(nota1Recuperado, nota2Recuperado, nota3Recuperado);
    mostrarTexto("Suma", suma);
    let promedio = calcularPromedio(nota1Recuperado, nota2Recuperado, nota3Recuperado);
    mostrarTexto("Promedio", promedio);
    let estudiante={};
    estudiante.nombre=valorNombre;
    estudiante.apellido=valorApellido;
    estudiante.nota1=nota1Recuperado;
    estudiante.nota2=nota2Recuperado;
    estudiante.nota3=nota3Recuperado;
    estudiante.total=suma;
    estudiante.promedio=promedio;
    estudiantes.push(estudiante)
    alert("NOTAS AGREGADAS")
    mostrarEstudiantes()
}

mostrarEstudiantes = function () {
    let cmpTabla = document.getElementById("tablaEmpleados");
    let contenidoTabla = "<table><tr>" +
        "<th>NOMBRE</th>" +
        "<th>APELLIDO</th>" +
        "<th>NOTA 1</th>" +
        "<th>NOTA 2</th>" +
        "<th>NOTA 3</th>" +
        "<th>TOTAL</th>" +
        "<th>PROMEDIO</th>" +
        "</tr>";
    let elementoNotas;
    for (let i = 0; i < estudiantes.length; i++) {
        elementoNotas = estudiantes[i]
        contenidoTabla +=
            "<tr><td>" + elementoNotas.nombre + "</td>"
            + "<td>" + elementoNotas.apellido + "</td>"
            + "<td>" + elementoNotas.nota1 + "</td>"
            + "<td>" + elementoNotas.nota2 + "</td>"
            + "<td>" + elementoNotas.nota3 + "</td>"
            + "<td>" + elementoNotas.total + "</td>"
            + "<td>" + elementoNotas.promedio + "</td>"
            + "</tr>"
    }
    contenidoTabla += "</table>"
    cmpTabla.innerHTML = contenidoTabla;
    deshabilitarComponente("btnGuardar");
}