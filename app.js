var cont = 0;
var ini, fin;
$(document).ready(function () {
    $("#btnVer").on('click touchstart', function () {
        cont++;
        ini = (cont - 1) * 5;
        fin = cont * 5;
        $("#resultado1").html("");
        $.getJSON("http://pymesv.com/datos05w/gamestoreapi/productos/lista").done(function (datos_del_ws) {
            $.each($(datos_del_ws), function (indice, valor) {
                var apendice = '<div><img src="http://pymesv.com/datos05w/' + valor.imagen + '"></br><a onTouch="opena(' + indice + ')" onClick="opena(' + indice + ')" href="#"  id="btnproducto' + indice + '"  class="btn btn-positive btn-block">Ver</a></div></br>';
                $("#resultado1").append(apendice);
            })
            $("#resultado1").append('<a href="#" onClick="opena(0)" class="btn" id="btnMas">Ver m&aacute;s</a><br>');
        });
    });
    
    $("#btnProductos").on('click', function () {
        $.getJSON("http://pymesv.com/datos05w/gamestoreapi/productos/lista").done(function (datos_del_ws) {
            $.each(datos_del_ws, function (indice, valor) {
                $("#resultado1").append("<li>" + valor.nombre + "</li>");
            });
        });
    });
});
function opena(algo) {
    var temp = (parseInt(algo) + 1) + ((cont - 1) * 5);
    var dir = "http://pymesv.com/datos05w/gamestoreapi/productos/" + temp + "/";
    $.getJSON(dir).done(function (datos_del_ws) {
        $.each(datos_del_ws, function (indice, valor) {
            $("#resultado2").html("");
            $("#resultado2").append("<h2>" + valor.nombre + "</h2>");
            $("#resultado2").append("<h3>" + valor.precio + "</h3>");
            $("#resultado2").append("</br><img src='http://pymesv.com/datos05w/" + valor.imagen + "'>");
            $("#resultado2").append("</br>" + valor.descripcion + "</br></br>");
            $("#resultado2").append("<a href='#' onClick='cerrarm2()' class='btn btn-negative btn-block'>Regresar </a>");
        });
        $("#mymodal2").addClass("active");
    });
}
function validar(usuario, pass){
    alert("Bienvenido " + usuario);
}
function cerrarm1(){
    $("#mymodal1").removeClass("active");
}
function cerrarm2(){
    $("#mymodal2").removeClass("active");
}
function cerrarm3(){
    $("#mymodal3").removeClass("active");
}
function cerrarm4(){
    $("#mymodal4").removeClass("active");
}