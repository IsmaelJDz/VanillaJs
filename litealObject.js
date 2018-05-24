;

((c, d) => {

    const perro = {
        nombre: 'Bruno',
        edad: '2',
        raza: 'peluche',
        genero: 'Macho',

        ladrar: function () {
            c('guauuu guauuu')
        },
        comer: function () {
            c('comiendo crocketas')
        },
        dormir: function () {
            c(`${this.nombre} esta durmiendo`)
        }
    }

    perro.dormir()

})(console.log, document)
