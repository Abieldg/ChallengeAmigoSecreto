// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let amigos = []

function agregarAmigo() {
    var amigo = document.getElementById('amigo');
    var amigoIngresado = amigo.value; 
    
    if (amigoIngresado !== "") {  
        amigos.push(amigoIngresado);
        alert("Agregado correctamente");
        console.log(amigos);  
        mostrarAmigos();
    } else {
        alert("Debes ingresar un nombre de amigo");
    }

    amigo.value = "";
}


function mostrarAmigos() {
    var lista = document.getElementById('listaAmigos');  
    
    lista.innerHTML = "";
    
    
    for (var i = 0; i < amigos.length; i++) {
        var li = document.createElement('li');  
        li.textContent = amigos[i];  
        lista.appendChild(li);  
    }
}

function sortearAmigo() {
    if (amigos.length > 0) {
        var indice = Math.floor(Math.random() * amigos.length); 
        var amigoSorteado = amigos[indice]; 
        document.getElementById('resultado').innerHTML = "El amigo sorteado es: " + amigoSorteado;  
    } else {
        alert("No hay amigos para sortear");  
    }
}