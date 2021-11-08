$(document).ready(function () {
    estadoInicial();
    listar();
});

function listar() {
    $.ajax({
        url: "http://143.47.234.84:8080/api/Message/all",
        type: "GET",
        contentType: "application/JSON",
        dataType: 'json',
        xhrFields: {
            withCredentials: false
        },

        success: function (respuesta) {
            console.log(respuesta)
            loadMessages(respuesta);
        },

        error: function (xhr, status) {
            $("#mensajes").html("Ocurrio un problema al ejecutar la petición..." + status);
        },

        complete: function (xhr, status) {
            $("#mensajes").html("Obteniendo listado de los Mensajes...");
            $("#mensajes").hide(1000);
        }
    });
}

function loadMessages(items){
    $("#tableDataMess").html("");
    const tableBody = document.getElementById("tableDataMess");
    let dataHtml = "";

    for (var i=0; i < items.length; i++) {
        dataHtml += `<tr>
                <td>${items[i].idMessage}</td>
                <td>${items[i].messageText}</td>
                <td><button class="btn btn-outline-success btn-sm" onclick="editarRegistro(${items[i].idMessage})">Editar</button></td>
                <td><button class="btn btn-outline-danger btn-sm" onclick="borrarRegistro(${items[i].idMessage})">Borrar</button></td>
            </tr>`;
    }
    $("#tableDataMess").html(dataHtml);
}

function estadoInicial(){
    $("#nuevo").hide();
    $("#editar").hide();
    $("#listado").show(500);
    $("#nuevoRegistro").show(500)

    $("#id").val("")
    $("#messageText").val("")
}
