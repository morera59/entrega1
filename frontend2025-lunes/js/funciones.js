function calcularPesoIdeal(){
    //Obtenemos la edad desde el formulario mediante id
    var edad = document.getElementById("txt_edad").value;
    //Obtenemos el peso actual desde el formulario
    var peso_actual = document.getElementById("txt_peso_actual").value; 
    var peso_ideal = edad * 2 + 8 ;
    //Comparamos el peso actual y el peso ideal
    var estadoPeso="";
    var estadoImagen ="";
    if(peso_actual == peso_ideal) {
        estadoPeso="Peso ideal";
        estadoImagen ="pesoideal_128x128.png";
    }else{
        if(peso_actual > peso_ideal){
            estadoPeso = "Sobrepeso";
            estadoImagen ="sobrepeso_128x128.png";
        }else{
            estadoPeso = "Bajo peso";
            estadoImagen ="bajopeso_128x128.png";
        }
    }

    //Mostramos resultado
    document.getElementById("cnt_peso_ideal").innerHTML = "Peso ideal es <b>" + peso_ideal + "</b> kilos.";
    //Mostramos el estado de peso
    document.getElementById("cnt_estado_peso").innerHTML = "Estado de peso <b>" +estadoPeso + "</b>";
    //Mostramos la imagen alusiva
    document.getElementById("cnt_estado_imagen").innerHTML="<img src=img/"+ estadoImagen+" >";
}