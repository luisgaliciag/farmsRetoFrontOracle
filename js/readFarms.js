$(document).ready(function () {
    estadoInicial();
    listar();
});

function listar() {
    $.ajax({
        url: "http://143.47.234.84:8080/api/Farm/all",
        type: "GET",
        contentType: "application/JSON",
        dataType: 'json',
        xhrFields: {
            withCredentials: false
        },

        success: function (respuesta) {
            console.log(respuesta)
            loadFincas(respuesta);
        },

        error: function (xhr, status) {
            $("#mensajes").html("Ocurrio un problema al ejecutar la petición..." + status);
        },

        complete: function (xhr, status) {
            $("#mensajes").html("Obteniendo listado de fincas...");
            $("#mensajes").hide(1000);
        }
    });
}

function loadFincas(items){
    $("#tableDataFarms").html("");
    const tableBody = document.getElementById("tableDataFarms");
    let dataHtml = "";

    for (var i=0; i < items.length; i++) {
        dataHtml += `<tr>
                <td>${items[i].id}</td>
                <td>${items[i].name}</td>
                <td>${items[i].address}</td>
                <td>${items[i].extension}</td>
                <td>${items[i].description}</td>
                <td><button class="btn btn-outline-success btn-sm" onclick="editarRegistro(${items[i].id})">Editar</button></td>
                <td><button class="btn btn-outline-danger btn-sm" onclick="borrarRegistro(${items[i].id})">Borrar</button></td>
            </tr>`;
    }
    $("#tableDataFarms").html(dataHtml);
}

function armaListaCategorias(items) {
    $("#listado").html("");
    $("#listado").show(500);
    var lista = ` <option value="">--Selecciona una Categoría--</option>`;

    for (var i=0; i < items.length; i++) {
        lista +=`<option value="${items[i].id}">${items[i].name}</option>`;
    }

    $("#category").html(lista);
}

function listarCategorias() {
    $.ajax({
        url: "http://143.47.234.84:8080/api/Category/all",
        type: 'GET',
        dataType: 'json',

        success: function (respuesta) {
            armaListaCategorias(respuesta);
        },

        error: function (xhr, status) {
            $("#mensajes").html("Ocurrio un problema al ejecutar la petición..." + status);
        },

        complete: function (xhr, status) {
            $("#mensajes").html("Obteniendo listado de bicis...");
            $("#mensajes").hide(1000);
        }
    });
}

function estadoInicial(){
    $("#nuevo").hide();
    $("#editar").hide();
    $("#listado").show(500);
    $("#nuevoRegistro").show(500)

    $("#id").val("")
    $("#name").val("")
    $("#address").val("")
    $("#extension").val("")
    $("#category").val("")
}

function mostrarmensaje(){
    alert("Opción no implementada hasta el reto 4...")
}