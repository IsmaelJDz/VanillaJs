;

((c, d) => {

    const perro = new Object()

    perro.nombre = 'Mylo'
    perro.edad = '3'
    perro.raza = 'Ratonero'
    perro.ladrar = () => c('guauuu guauuu')
    //perro.comer = (comida = 'croqueta') => c(`${this.nombre} come croqueta`)
    //perro.comer = (comida = 'croqueta') => c(`${perro.nombre} come croqueta`)
    perro.ladrar2 = function () {
        perro.comer = (comida = 'croqueta') => c(`${this.nombre} come croqueta`)
    }
    perro.ladrar3 = function () {
        c(`${this.nombre} come croqueta`)
    }

    perro.ladrar2()
    perro.ladrar3()
    perro.comer()

})(console.log, document)
