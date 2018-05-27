((c) => {

    //5. Arrow Functions
    c('******* Arrow Functions y el problema de this ******')
    const lenguaje = {
        name: 'JavaScript',
        version: 6,
        frameworks: [
            { name: 'Angular', url: 'https://angular.io/' },
            { name: 'React', url: 'https://facebook.github.io/react' },
            { name: 'Vue', url: 'https://vuejs.org' }
        ],
        nombrar: function () {
            //El problema de this en JavaScript
            // this.frameworks.forEach(function (fw) {
            //     c(`${fw.name} es un framework de ${this.name}`)
            // })
            //Solución ES3
            // let that = this
            // this.frameworks.forEach(function (fw) {
            //     c(`${fw.name} es un framework de ${that.name}`)
            // })
            //Solucion ES5
            // this.frameworks.forEach(function (fw) {
            //         c(`${fw.name} es un framework de ${this.name}`)
            // }.bind(this))
            //Solucion ES6
            this.frameworks.forEach((fw) => {
                c(`${fw.name} es un framework de ${this.name}`)
            })

        }
    }

    lenguaje.nombrar()

})(console.log);
