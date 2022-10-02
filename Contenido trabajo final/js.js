const edadDelUsuario = parseInt(prompt("¿Cuál es tu edad?"));
if(edadDelUsuario >= 18){
    alert("Eres mayor de edad");
}else{
    alert("Eres menor de edad, entras bajo tu propio riesgo");
}
function otraPagina(){
        var confirmar = confirm('¿Estas seguro que deseas salir?');
        if (confimar){
        window.location.href = 'https://www.youtube.com/'
    } else {
}
    }