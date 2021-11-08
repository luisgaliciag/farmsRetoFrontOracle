function validaesVacio(dato){
    return !dato.trim().length;
}

function validar(){
    let id = $("#id").val();
    let name = $("#name").val();
    let address = $("#address").val();
    let extension = $("#extension").val();
    let description = $("#description").val();
    let errores="";
    $("#mensajes").html("");

    if( validaesVacio(id)) {
        errores="id vacio<br>";
        $("#mensajes").html(errores);
        $("#mensajes").show(500);
        $("#id").focus();
        return false;
    }else if( validaesVacio(name)) { 
        errores="name vacio<br>";
        $("#mensajes").html(errores);
        $("#mensajes").show(500);
        $("#name").focus();
        return false;
    }else if( validaesVacio(address)) {
        errores="address vacio<br>";
        $("#mensajes").html(errores);
        $("#mensajes").show(500);
        $("#address").focus();
        return false;
    }else if( validaesVacio(extension)) {  
        errores="extension vacio<br>";
        $("#mensajes").html(errores);
        $("#mensajes").show(500);
        $("#extension").focus();
        return false;
    }else if( validaesVacio(description)) { 
        errores="description vacio<br>";
        $("#mensajes").html(errores);
        $("#mensajes").show(500);
        $("#description").focus();
        return false;
    }else{
        $("#mensajes").html("");
        $("#mensajes").hide(500);
        return true;
    }
    return true;
}

function validarEditar(){
    let id = $("#idEdit").val();
    let name = $("#nameEdit").val();
    let address = $("#addressEdit").val();
    let extension = $("#extensionEdit").val();
    let description = $("#descriptionEdit").val();
    let errores="";
    $("#mensajes").html("");

    if( validaesVacio(id)) {
        errores="id vacio<br>";
        $("#mensajes").html(errores);
        $("#mensajes").show(500);
        $("#idEdit").focus();
        return false;
    }else if( validaesVacio(name)) { 
        errores="name vacio<br>";
        $("#mensajes").html(errores);
        $("#mensajes").show(500);
        $("#nameEdit").focus();
        return false;
    }else if( validaesVacio(address)) {
        errores="address vacio<br>";
        $("#mensajes").html(errores);
        $("#mensajes").show(500);
        $("#addressEdit").focus();
        return false;
    }else if( validaesVacio(extension)) {  
        errores="extension vacio<br>";
        $("#mensajes").html(errores);
        $("#mensajes").show(500);
        $("#extensionEdit").focus();
        return false;
    }else if( validaesVacio(description)) { 
        errores="description vacio<br>";
        $("#mensajes").html(errores);
        $("#mensajes").show(500);
        $("#descriptionEdit").focus();
        return false;
    }else{
        $("#mensajes").html("");
        $("#mensajes").hide(500);
        return true;
    }
    return true;
}
