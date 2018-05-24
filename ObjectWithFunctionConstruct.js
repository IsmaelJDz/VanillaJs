((c, d) => {
    function Perro(nombre, edad, raza, genero) {
        this.nombre = nombre,
        this.edad = edad,
        this.raza = raza,
        this.genero = genero

        //Metodos
        this.ladrar = () => c(`${this.nombre} ladra guauuu guauuu`)

        this.comer = () => c(`${this.nombre} come ${this.comida}`)

    }

    const Perro1 = new Perro('Mylo', '2', 'Ratonero', 'M')
    const Perro2 = new Perro('Bruno', '3', 'Peluche', 'M')
    Perro1.ladrar();
    Perro2.ladrar();
})(console.log, document);
