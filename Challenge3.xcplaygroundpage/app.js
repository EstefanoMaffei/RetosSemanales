


/*
 * Reto #3
 * ¿ES UN NÚMERO PRIMO?
 * Fecha publicación enunciado: 17/01/22
 * Fecha publicación resolución: 24/01/22
 * Dificultad: MEDIA
 *
 * Enunciado: Escribe un programa que se encargue de comprobar si un número es o no primo.
 * Hecho esto, imprime los números primos entre 1 y 100.
 *
 * Información adicional:
 * - Usa el canal de nuestro discord (https://mouredev.com/discord) "🔁reto-semanal" para preguntas, dudas o prestar ayuda a la comunidad.
 * - Puedes hacer un Fork del repo y una Pull Request al repo original para que veamos tu solución aportada.
 * - Revisaré el ejercicio en directo desde Twitch el lunes siguiente al de su publicación.
 * - Subiré una posible solución al ejercicio el lunes siguiente al de su publicación.
 * 2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89 y 97.
 */


let numeroPrimo = 0;

let esPrimo = true;

const identificarNumeroPrimo = (numeroPrimo)=>{

     for(let i = 2; i < numeroPrimo/2; i++)
     {
          if(numeroPrimo % i === 0){
               esPrimo = false;
          }
     }
     
     
     if(esPrimo){
          console.log(`el ${numeroPrimo} es un numero primo`);
     }else{
          console.log(`el ${numeroPrimo} no es un numero primo`);
     }
     
}


identificarNumeroPrimo(98);






