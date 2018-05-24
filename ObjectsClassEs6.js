((c, d) => {

    class Perro {
        constructor(nombre, edad, raza, genero) {
            this.nombre = nombre,
            this.edad = edad,
            this.raza = raza,
            this.genero  = genero
        }

        ladrar (){
            c('guauuu guauuu')
        }

        comer (comida){
            c(`${this.nombre} come ${comida}`)
        }

    }

    let Perro1 =  new Perro('Mylo', 2, 'Ratonero', 'M')
    console.log(Perro1);
    Perro1.ladrar()
    Perro1.comer('carne')

})(console.log, document)
