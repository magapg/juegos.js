//variables que almacenaran los dos numeros de la suma
var num1, num2;
//variable para guardar el resultado de la suma
var respuesta;
//variable donde se cargara la opcion correcta
var indiceOpCorrecta;

//todos los elementes que voy a manipular de la pagina
txt_suma = document.getElementById("suma");
op1 = document.getElementById("op1");
op2 = document.getElementById("op2");
op3 = document.getElementById("op3");
txt_msj = document.getElementById("msj");
txt_resultado = document.getElementById("resultado");

function comenzar(){
    //cada vez que inicie limpio     los campos
    txt_resultado.innerHTML = "?";
    txt_msj.innerHTML = "";
    //genero la suma aleatoria entre 0 y 9
    num1 = Math.round(Math.random()* 9);
    num2 = Math.round(Math.random()* 9);
    respuesta = num1 + num2;
    //asignamos la suma para que se visualice
    txt_suma.innerHTML = num1 + " + " + num2 + " = ";
    //genero un numero entre 0 y 2 para colocar la opcion correcta
    indiceOpCorrecta = Math.round(Math.random()*2);
    if(indiceOpCorrecta==0){//ponemos la opcion correcta en primera posicion
    op1.innerHTML = respuesta;
    //al resto le doy numeros cercanos a la respuesta
    op2.innerHTML = respuesta + 1;
    op3.innerHTML = respuesta - 1;
    }
    if(indiceOpCorrecta==1){//ponemos la opcion correcta en segunda posicion
        op2.innerHTML = respuesta;
        //al resto le doy numeros cercanos a la respuesta
        op1.innerHTML = respuesta + 2;
        op3.innerHTML = respuesta - 1;
}
if(indiceOpCorrecta==2){//ponemos la opcion correcta en tercera posicion
    op3.innerHTML = respuesta;
    //al resto le doy numeros cercanos a la respuesta
    op1.innerHTML = respuesta + 1;
    op2.innerHTML = respuesta - 1;
}
}
//funcion que chequea la respuesta del usuario
function controlarRespuesta(opcionElegida){
    //cargamos la opcion elegida en la operacion
    txt_resultado.innerHTML = opcionElegida.innerHTML;
    //controlamos si esta bien
    if(respuesta == opcionElegida.innerHTML){
        txt_msj.innerHTML = "¡EXCELENTE!!!";
        txt_msj.style.color = "green";

        setTimeout(comenzar, 2000)
     } else{
        txt_msj.innerHTML = "¡INTENTA DE NUEVO!";
        txt_msj.style.color = "red";
        setTimeOut(limpiar, 2000)
        }
}
function limpiar(){
    txt_resultado.innerHTML = "?";
    txt_msj.innerHTML = "";

}

comenzar();