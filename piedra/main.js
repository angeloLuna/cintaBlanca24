let j1 = prompt('elige');
let j2 = prompt('elige también');

// Resolución utilizando anidación de condiciones
if(j1 === 'piedra'){
  if(j2 === 'piedra'){
    console.log('empate');
  }else if( j2 === 'papel'){
    console.log('gana j2');
  }else{
    console.log('gana j1')
  }
}else if(j1 === 'papel'){
  if(j2 === 'piedra'){
    console.log('Gana j1');
  }else if( j2 === 'papel'){
    console.log('Empate');
  }else{
    console.log('gana j2');
  }
}else if( j1 === 'tijera'){
  if(j2 === 'piedra'){
    console.log('Gana j2');
  }else if( j2 === 'papel'){
    console.log('gana j1');
  }else{
    console.log('Empate')
  }
}else{
  console.log('debes elegir entre piedra papel o tijera');
}

// Resolución utilizando operadores lógicos
if( j1 === 'piedra' && j2 === 'piedra'){
  console.log('Empate')
}else if( j1 === 'papel' && j2 === 'papel'){
  console.log('Empate')
}else if( j1 === 'tijera' && j2 === 'tijera'){
  console.log('Empate')
}

if(j1 === 'piedra' && j2 === 'tijera'){
  console.log('Gana jugador 1')
}else if(j1 === 'papel' && j2 === 'piedra'){
  console.log('Gana jugador 1')
}else if(j1 === 'tijera' && j2 === 'papel'){
  console.log('Gana jugador 1')
}