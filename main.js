var date = new Date()
var dataTexto = document.getElementById("data")
var dataBr = date.toLocaleDateString("pt-br")

var horasTexto = document.getElementById("horas")

dataTexto.innerHTML= dataBr

function relogio (){
    let horario = new Date()
    let horas = horario.getHours()
    let minutos = horario.getMinutes()
    let segundos = horario.getSeconds()


    if(minutos <10  ){
         minutos = "0"+minutos
    }
    if(segundos<10){
        segundos = "0"+segundos
    }
    if(horas<10){
        horas = "0"+horas
    }

    horasTexto.innerHTML = `${horas}:${minutos}:${segundos}`
    
    }

relogio()

setInterval(relogio, 500)
