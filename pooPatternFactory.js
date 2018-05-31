((c) => {

    //POO con Prototype
    c('******POO con Prototype******')
    function Car(article) {

        this._article = article
        this._car =  {}
    }

    //Existen dos formas para generar objetos sin replicar metodos con Prototype
    //1.- forma es : Car.prototype.agregar = function () {}
    //2.- forma es : envolver todos los metodos dentro de objeto {}

    Car.prototype = {

        add: function (article, cant) {
            this._car[article] = cant
        },
        deleteAr: function (article) {
        delete this._car[article]
        },
        _iteration: function () {
            let message = 'Car: \n'
            for (let key in this._car )
                message += `\t${this._car[key]} ${key} \n`

            return message
        },
        see: function ( article = 'todos' ) {
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

    //Para solucionar esto podemos hacer uso del objeto Prototype que permite
    //que objetos de la misma clase compartan metodos y no sean replicados en
    //memoria de manera eficiente

})(console.log);
