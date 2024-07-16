let botonSend=document.getElementById("botonSend")
let textoChat=document.getElementById("textoChat")
let mensajeChat=document.getElementById("mensajeChat")

let preguntas=[
    "¿Cual es tu nombre?",
    "¿Cuantos años tienes?",
    "¿Cuál es tu pelicula favorita?",
    "¿Tienes mascotas?",
    "¿Cuál es tu hobby?"
]

let respuestas=[
    "Hola, mi nombre es Leonardo",
    "Tengo 1 año",
    "Mi pelicula favorita es Mr Robot",
    "Si, 2 gatos",
    "Ver peliculas"
]

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
