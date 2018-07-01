((c) => {
    c('****** Programación funcional')

    /* funcion recursiva para obtener el factorial de un numero*/
    /* n! = producto de todos los numeros naturales desde 1 hasta n */
    //  const factorialImperativo = n => {
    //      let f = 1
    //
    //      for (let i = 1; i <= n; i++)
    //         f = f*i
    //     return f
    //  }
    //
    //  /*Modo declarativo*/
    //
    //  const factorialDeclarativo = n => {
    //      return n === 0
    //         ? 1
    //         : n * factorialDeclarativo( n - 1 )
    //  }
    //
    //  const sumaFactorial = n => {
    //      return n === 1
    //         ? 1
    //         : n + sumaFactorial( n - 1 )
    //  }
    //
    //  c('Factorial',
    //     factorialImperativo(5),
    //     factorialDeclarativo(5),
    //     sumaFactorial(5)
    //  )
    //
    //  const pow = (b, e) => {
    //      return e < 2
    //        ? b
    //        : b * pow( b, e - 1 )
    //  }
    //
    //  c('Potencia',
    //     pow(2, 6),
    //     pow(3, 6),
    //     Math.pow(3, 6)
    // )

    /* funcion recursiva para determinar si un elemento esta contenido dentro de un vector */
    const existeEnVectorAux = ( vector, elemento, posicion ) => {
        return posicion > vector.length - 1
            ? false
            // : ( vector[posicion] === elemento )
            //     ? true
            //     : existeEnVectorAux( vector, elemento, posicion + 1 )
            : vector[posicion] === elemento || existeEnVectorAux( vector, elemento, posicion + 1)
    }
    const existeEnVector = ( vector, elemento ) => {
        return existeEnVectorAux( vector, elemento, 0 )
    }


    c(
        'elemento dentro de vector',
        existeEnVector( [1,2,3,4,5], 4 ),
        existeEnVector( [1,2,3,4,5], 6 )
    )

})(console.log);
