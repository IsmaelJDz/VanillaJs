((c) => {

    //2. Asignacion explicita:
    //Desde ES5 cuando deseamos explicitamente referenciar this contamos con
    //métodos call, apply y bind
    c('******Asignacion de this explicita*******')

    const nombrar = function () {
        console.log(this)
        c(`${this.nombre} es el lenguaje front end de la Web y tiene librerias y frameworks my poderoso como: ${this.php}, ${this.Javascript}, ${this.python}`)
    }

    const lenguaje = {
        nombre: 'JavaScript',
        version: 6,
    }
    let frameworks = ['Angular', 'React', 'Vue.js']
    let frameworksBack = {
        php: 'Laravel',
        Javascript: 'node',
        python: 'django'
    }

    //call: permite definir a que va a hacer referencia this, en su primer parametro
    //los parametros siguientes son los que recibe la funcion
    //nombrar.call( lenguaje, frameworks[0], frameworks[1], frameworks[2] )
    //apply: permite referenciar this en el primer parametro, pero este nos permite
    //pasar un array, como los parametros de la funcion
    //nombrar.apply( lenguaje, frameworks )
    nombrar.apply( frameworksBack )
    //bind: devuelve una funcion, en dónde this, hace referencia al objeto que
    //pasamos en su parámetro
    //let frameworksJS = nombrar.bind( lenguaje, frameworks[0], frameworks[1], frameworks[2] )
    //frameworksJS()

})(console.log);
