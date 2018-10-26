let titulo = document.getElementById('titulo');
let nombre = document.getElementById('nombre');
let boton = document.getElementById('boton');


// defino funcion
function traerNombre(){

  let x = nombre.value;
  titulo.innerHTML = x;

  // titulo.innerHTML = nombre.value
  // console.log( nombre.value )
}


// Método on click
boton.addEventListener( 'click', traerNombre);





