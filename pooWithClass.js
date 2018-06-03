((c) => {
    //POO con Clases
    //Con la llegada de ES6 la definicion de una funcion constructura ha cambiado
    //y nos ofrece la posibilidad de crear clases

    c('******POO con Clases******')
    class Car {
        constructor (article){
            this._article = article
            this._car =  {}
        }

        add (article, cant) {
            this._car[article] = cant
        }
        deleteAr (article) {
            delete this._car[article]
        }
        _iteration () {
            let message = 'Car: \n'
            for (let key in this._car )
                message += `\t${this._car[key]} ${key} \n`

                return message
            }
        see ( article = 'todos' ) {
            return ( article === 'todos' )
                ? this._iteration()
                : ( this._car.hasOwnProperty( article ) )
                    ? `${this._car[article]} ${article}`
                    : `the article ${article} doesn't exist`
            }

    }

    const comics = new Car('Comics')
    c(comics)
    comics.add('Flash Point Paradox', 2)
    comics.add('The return of the Dark Knight', 3)
    comics.add('Civil War', 3)
    comics.add('Final Crisis', 1)
    c(comics.see())
    c(comics.see('Flash Point Paradox'))
    c(comics.see('Civil War'))
    comics.deleteAr('Civil War')
    c(comics.see('Civil War'))

    const libros = new Car('libros'),
        Musica = new Car('Musica'),
        Juegos = new Car('Juegos'),
        Series = new Car('Series')

    c(libros, '\n'),
    c(Musica, '\n'),
    c(Juegos, '\n'),
    c(Series, '\n')
    // reached = alcalzo
    // ground = piso


})(console.log);
