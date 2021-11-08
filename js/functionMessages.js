function validaesVacio(dato){
    return !dato.trim().length;
}

function validar(){
    let idMessage = $("#idMessage").val();
    let messageText = $("#messageText").val();
    let errores="";
    $("#mensajes").html("");

    if( validaesVacio(idMessage)) {
        errores="idMessage vacio<br>";
        $("#mensajes").html(errores);
        $("#mensajes").show(500);
        $("#idMessage").focus();
        return false;
    }else if( validaesVacio(messageText)) {
        errores="messageText vacio<br>";
        $("#mensajes").html(messageText);
        $("#mensajes").show(500);
        $("#messageText").focus();
        return false;
    }else{
        $("#mensajes").html("");
        $("#mensajes").hide(500);
        return true;
    }
    return true;
}

function validarEditar(){
    let idMessage = $("#idMessageEdit").val();
    let messageText = $("#messageTextEdit").val();
    let errores="";
    $("#mensajes").html("");

    if( validaesVacio(idMessage)) {
        errores="idMessage vacio<br>";
        $("#mensajes").html(errores);
        $("#mensajes").show(500);
        $("#idMessageEdit").focus();
        return false;
    }else if( validaesVacio(messageText)) {
        errores="messageText vacio<br>";
        $("#mensajes").html(errores);
        $("#mensajes").show(500);
        $("#messageTextEdit").focus();
        return false;
    }else{
        $("#mensajes").html("");
        $("#mensajes").hide(500);
        return true;
    }
    return true;
}