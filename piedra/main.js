let j1 = prompt('elige');
let j2 = prompt('elige también');

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
    console.log('gana j2')
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