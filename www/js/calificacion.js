function getCalificacion() {
    var contador = 0;
    var cuter = [];
    $.getJSON('http://localhost:80/respuesta.php', function (data) {
        // alert(document.test.popo.length);
        for (i = 0; i < document.test.popo.length; i++) {
            //alert(data[i].correcta);
            if (document.test.popo[i].checked) {
                //  return alert(document.test.popo[i].value);
                cuter.push(document.test.popo[i].value);
            }
        }

        for (var x = 0; x < data.length; x++) {
            if (cuter[x] == data[x].correcta) {
                contador++;
                $("p#"+data[x].id).css("color", "black");

            } else {
                $("p#"+data[x].id).css("color", "red");


            }
        }
        
        return alert("su numero de aciertos es : " + contador);
        
    });
}
