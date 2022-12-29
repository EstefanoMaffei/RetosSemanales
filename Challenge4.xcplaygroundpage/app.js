/* Reto #4
* ÁREA DE UN POLÍGONO
* Fecha publicación enunciado: 24/01/22
* Fecha publicación resolución: 31/01/22
* Dificultad: FÁCIL
*
* Enunciado: Crea UNA ÚNICA FUNCIÓN (importante que sólo sea una) que sea capaz de calcular y retornar el área de un polígono.
* - La función recibirá por parámetro sólo UN polígono a la vez.
* - Los polígonos soportados serán Triángulo, Cuadrado y Rectángulo.
* - Imprime el cálculo del área de un polígono de cada tipo.
*
* Información adicional:
* - Usa el canal de nuestro discord (https://mouredev.com/discord) "🔁reto-semanal" para preguntas, dudas o prestar ayuda a la comunidad.
* - Puedes hacer un Fork del repo y una Pull Request al repo original para que veamos tu solución aportada.
* - Revisaré el ejercicio en directo desde Twitch el lunes siguiente al de su publicación.
* - Subiré una posible solución al ejercicio el lunes siguiente al de su publicación.
*
*/


const calcularPoligono = (poligono, base, altura) => {
     let poligonoUsado = poligono,
         baseUsada     = base,
         alturaUsada   = altura;
     if(poligonoUsado == 'triangulo'){
          let areaTriangulo = (baseUsada * alturaUsada) / 2;
          console.log(areaTriangulo); 
     }else if(poligonoUsado == 'cuadrado'){
          let areaCuadrado = baseUsada * alturaUsada;
          console.log(areaCuadrado);
     }else if(poligonoUsado == 'rectangulo'){
          let areaRectangulo = baseUsada * alturaUsada;
          console.log(areaRectangulo);

     }else{
          console.log('Puedes indicar escribiendo la palabra: Cuadrado, Triangulo o Rectangulo');
     }


     

}

calcularPoligono('rectangulo',5,15);
calcularPoligono('triangulo',10,15);
calcularPoligono('cuadrado',5,5);