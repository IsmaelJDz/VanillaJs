((c) => {

    //3. Asignación con new
    //Cuando invocamos this en un constructor, este hace referencia al
    //objeto que se le ha instanciado
    c('*****Asignacion con new*******')

    let Framework = function (nombre, url, lenguaje) {
        this.nombre = nombre
        this.url = url
        this.lenguaje = lenguaje
    }

    const react = new Framework('React', 'https://facebook.github.io/react/', 'JavaScript'),
    vue = Object.create(Framework)
    vue.nombre = 'Vue.js',
    vue.lenguaje = 'Vue Progresive'
    c(react, vue)

})(console.log);

((c) => {

    //4. Asignacion Global
    //Uno de los grandes errores con this, es que cuando no se tiene una
    //referencia al objeto, que representa this, este hace referencia al
    //objeto global
        //window en los navegadores
        //global en node.js
    c('******Asignacion Global********')
    const dimeUnFramework = function () {
        c(this.nombre)
    }

    dimeUnFramework()
    //variable global
    //nombre = 'Angular'
    window.nombre = 'Angular'
    dimeUnFramework( )

})(console.log);
