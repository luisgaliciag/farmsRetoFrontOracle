function registrar() {
    let datos={
        client:{"idClient":$("#client").val()},
        farm:{"id":$("#farm").val()},
        startDate :$("#startDate").val(),
        devolutionDate :$("#devolutionDate").val(),
        status :$("#status").val(),
        score :$("#score").val()
    }

    let datosPeticion = JSON.stringify(datos);

    console.log(datosPeticion);

    if (validar()){
        $.ajax({
            url: "http://143.47.234.84:8080/api/Reservation/save",
            type: 'POST',
            contentType:"application/json",
            dataType: 'JSON',
            data : datosPeticion,
            xhrFields: {
                withCredentials: false
            },

            success: function (respuesta) {
                console.log(respuesta);
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
