let url="http://localhost:8000/leonardo"
let peticion={
    method:"GET"
}

fetch(url,peticion)
.then(function(respuesta){
    return respuesta.json()
})
.then(function(respuesta){
    console.log(respuesta);
    let botonSend=document.getElementById("botonSend");
let textoChat=document.getElementById("textoChat");
let mensajeChat=document.getElementById("mensajeChat");

//mapear el arreglo de preguntas y mapear el arreglo de respuestas
let preguntas=respuesta.map(function(pregunta){
    return pregunta.pregunta
})
let respuestas=respuesta.map(function(respuesta){
    return respuesta.respuesta
})

//variable para contar el numero de preguntas
let indicePregunta=0

//funcion para detectar el inicio y desarrollo de la conversacion
function procesarEntradaChat(){
    let escribeUsuario=textoChat.value.toLowerCase()
    textoChat.value=""
    if(escribeUsuario=="hola"){
        let listaPreguntas=preguntas.map((pregunta,index)=>`${index+1}. ${pregunta}`).join("<br>")
        mensajeChat.innerHTML+=`<p class="text-start">Hola bienvenido <br> ${listaPreguntas}</p>`

    }else{
        let numeroPregunta=parseInt(escribeUsuario)-1
        if(numeroPregunta>=0 && numeroPregunta<preguntas.length){
            mensajeChat.innerHTML+=`<p class="text-start"> ${preguntas[numeroPregunta]}</p>`
            mensajeChat.innerHTML+=`<p class="text-end"> ${respuestas[numeroPregunta]}</p>`    
        }
    }
}

//rutina para activar el chatBot
botonSend.addEventListener("click",procesarEntradaChat)

textoChat.addEventListener("keypress",function(evento){
    if(evento.key=="Enter"){
        evento.preventDefault()
            procesarEntradaChat()
    }
})

})
.catch(function(respuesta){
    console.log(respuesta)
})

