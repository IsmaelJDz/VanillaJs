((c) => {

    //POO con Closures
    c('******POO con Closures******')
    function Car(article) {

        let _article = article,
            _car = {}

        function add (article, cant) {
            _car[article] = cant
        }

        function deleteAr (article) {
            delete _car[article]
        }

        function _iteration() {
            let message = 'Car: \n'
            for (let key in _car )
                message += `\t${_car[key]} ${key} \n`

            return message
        }

        function see ( article = 'todos' ) {
            return ( article === 'todos' )
                ? _iteration()
                : ( _car.hasOwnProperty( article ) )
                    ? `${_car[article]} ${article}`
                    : `the article ${article} doesn't exist`
        }

        return {
            add: add,
            deleteAr: deleteAr,
            see: see
        }
    }

    const comics = Car('Comics')
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

})(console.log)
