
// let edad = 18

// if( edad >= 18  ){
//   console.log("Clasificacion C")
// }else if( edad >= 15){
//   console.log('Clasificación B15')
// }else{
//   console.log('Clasificación A')
// };
let edad = 28;
const nacionalidad = 'Mexicana';
let ine = true;

// if( edad >= 18){
//   console.log('tienes edad para votar');
//   if(nacionalidad === 'Mexicana'){
//     console.log('Puedes votar en México');
//     if(ine === true){
//       console.log('Puede votar, ciudadano');
//     }else{
//       console.log('que siempre no');
//     }
//   }else{
//     console.log('No puedes votar en México')
//   }
// }else{
//   console.log('no tienes edad para votar');
// }

//Preguntar la edad en una variable; además tener una variable 'boleto' que puede ser true o false. Preguntar si tiene boleto, despues preguntar si es mayor de edad. Y preguntar si quiere comprar palomitas una vez que haya podido acceder(esto no afecta el acceso a la pelicula)

let edad = 18;
let boleto = 'si';

if(edad >= 18){
  console.log('tienes edad para ver la película')
  if(boleto === 'si'){
    console.log('puedes pasar')
    let palomitas = prompt('quieres palomitas?')
    if(palomitas === 'si'){
      console.log('felices y gorditos')
    }else{
      console.log('te va a dar hambre durante la peli')
    }

  }else{
    console.log('no puedes pasar')
  }

}else{
  console.log('no puedes pasar');
}





