function registrarMess() {
    let datos={
        id: $("#idMessage").val(),
        messageText: $("#messageText").val()
    }

    let datosPeticion = JSON.stringify(datos);

    if (validar()){
        $.ajax({
            type: 'POST',
            contentType:"application/JSON",
            url: "http://143.47.234.84:8080/api/Message/save",
            data : datosPeticion,
            xhrFields: {
                withCredentials: false
            },

            success: function (respuesta) {
                $("#mensajes").show(1000);
                $("#mensajes").html("Registro ingresado...");
                $("#mensajes").hide(1000);
                listar();
                estadoInicial();
            },

            error: function (xhr, status) {
                $("#mensajes").show(1000);
                $("#mensajes").html("Error peticion POST..." + status );
            }
        });
    }
}

function activaNuevo(){
    $("#nuevo").show(500);
    $("#id").focus();
    $("#editar").hide();
    $("#nuevoRegistro").hide(500)
    $("#listado").hide(500);
}
