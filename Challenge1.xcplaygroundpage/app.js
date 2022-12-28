/*
 * Reto #1
 * ¿ES UN ANAGRAMA?
 * Fecha publicación enunciado: 03/01/22
 * Fecha publicación resolución: 10/01/22
 * Dificultad: MEDIA
 *
 * Enunciado: Escribe una función que reciba dos palabras (String) y retorne verdadero o falso (Bool) según sean o no anagramas.
 * Un Anagrama consiste en formar una palabra reordenando TODAS las letras de otra palabra inicial.
 * NO hace falta comprobar que ambas palabras existan.
 * Dos palabras exactamente iguales no son anagrama.
 *
 * Información adicional:
 * - Usa el canal de nuestro discord (https://mouredev.com/discord) "🔁reto-semanal" para preguntas, dudas o prestar ayuda a la comunidad.
 * - Puedes hacer un Fork del repo y una Pull Request al repo original para que veamos tu solución aportada.
 * - Revisaré el ejercicio en directo desde Twitch el lunes siguiente al de su publicación.
 * - Subiré una posible solución al ejercicio el lunes siguiente al de su publicación.
 *
 */


const anagrama = (palabraUno, palabraDos)=>{
     
     //! HACER TODO MINUSCULA

          palabraUno = palabraUno.toLowerCase();
          palabraDos = palabraDos.toLowerCase();
     
     //! CONVERTIR EL STRING EN UN ARRAY
     
          palabraUno = palabraUno.split("");
          palabraDos = palabraDos.split("");
     //! ORDENAR EL ARRAY QUE SOLICITAMOS

          palabraUno = palabraUno.sort();
          palabraDos = palabraDos.sort();
     
          //! CONVIERTE EL ARRAY EN STRING 
          palabraUno = palabraUno.join("");
          palabraDos = palabraDos.join("");

     
     if(palabraUno === palabraDos){
          return true;
     }else{
          return false
     }
}

console.log(anagrama('arca','Cara'));