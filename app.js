//Crear un array para lamacenar los nombres
let amigos = [];

//Función para agregar amigos
function agregarAmigo(){
    //Capturar el valor del campo de entrada
    let amigosNuevos = document.getElementById('amigo').value;
    //Validar la entrada
    if (amigosNuevos === ''){
        alert ('Por favor, inserte un nombre');
        return;
    }
    //Actialuzar el array de amigos
        amigos.push(amigosNuevos);
        console.log(amigos);
    //Limpiar el campo de entrada    
        document.getElementById('amigo').value = '';   
        actualizaLista();

}
//Funcion para actualizar la lista de amigos
function actualizaLista(){
    //Obtener el eleento de la lista
    let lista = document.getElementById('listaAmigos');
    //Limpiar la lista existente
    lista.innerHTML = "";
    //Iterar sobre el arreglo
    for (let i=0; i < amigos.length; i++){
        let amigoAgregado = document.createElement('li');
        //Agregar elements a la lista
        amigoAgregado.textContent = amigos[i];
        lista.appendChild(amigoAgregado);
    } 
}
//  Funcion para sortear los amigos
function sortearAmigo(){
    //Validar que haya amigos disponibles
    if (amigos.length === 0){
        alert("No hay amigos en la lista");
        return;
    }
    //Generar un indice aleatorio
     let indice = Math.floor(Math.random()*amigos.length);
     //Obterner el nombre sorteado
     let sorteo = amigos[indice];
     //Mostrar el resultado
     document.getElementById('resultado').innerHTML = `Tu amigo secreto es ${sorteo}`;

}
//Funcion para reiniciar el juego
function limpiarTodo(){
    //Limpiar la lista de amigos
    amigos = [];
    //Limpiar el espacio del input, list de amigos y resultado
    document.getElementById('amigo').value = ''
    document.getElementById('listaAmigos').innerHTML = '';
    document.getElementById('resultado').textContent = '';

}


