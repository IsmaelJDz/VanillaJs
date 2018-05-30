((c) => {

    //POO con Funciones constructoras
    c('******POO con Funciones constructoras******')
    function Car(article) {

        this._article = article,
        this._car =  {}

        this.add = (article, cant) => this._car[article] = cant

        this.deleteAr = article => delete this._car[article]

        this._iteration = () => {
            let message = 'Car: \n'
            for (let key in this._car )
                message += `\t${this._car[key]} ${key} \n`

            return message
        }

        this.see = ( article = 'todos' ) => {
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

})(console.log);
