// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
/*
Fucionalidades:
Agregar nombres: Los usuarios escribirán el nombre de un amigo en un campo de texto y lo agregarán a una lista visible al hacer clic en "Adicionar".

Validar entrada: Si el campo de texto está vacío, el programa mostrará una alerta pidiendo un nombre válido.

Visualizar la lista: Los nombres ingresados aparecerán en una lista debajo del campo de entrada.

Sorteo aleatorio: Al hacer clic en el botón "Sortear Amigo", se seleccionará aleatoriamente un nombre de la lista y se mostrará en la página.
*/

//Crear un array para lamacenar los nombres
let amigos = [];

function agregarAmigo(){
    let amigosNuevos = document.getElementById('amigo').value;
    if (amigosNuevos === ''){
        alert ('Por favor, inserte un nombre');
        return;
    }
        amigos.push(amigosNuevos);
        console.log(amigos);
        document.getElementById('amigo').value = '';   
        actualizaLista();

}

function actualizaLista(){
    let lista = document.getElementById('listaAmigos');

    lista.innerHTML = "";
    for (let i=0; i < amigos.length; i++){
        let amigoAgregado = document.createElement('li');
        amigoAgregado.textContent = amigos[i];
        lista.appendChild(amigoAgregado);
    } 
}

function sortearAmigo(){
    if (amigos.length === 0){
        alert("No hay amigos en la lista");
        return;
    }
     let indice = Math.floor(Math.random()*amigos.length);
     let sorteo = amigos[indice];
     document.getElementById('resultado').innerHTML = `Tu amigo secreto es ${sorteo}`;

}

function limpiarTodo(){
    amigos = [];
    document.getElementById('amigo').value = ''
    document.getElementById('listaAmigos').innerHTML = '';
    document.getElementById('resultado').textContent = '';

}


