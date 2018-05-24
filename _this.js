;
((c) => {

    //1. Assignacion implicita
        //Caso 1
        //this está siendo invocado dentro de un método
        //this, hace referencia al objeto, que contiene el método donde se invoca
        c('****ASIGNACION IMPLICITA*****')

        let yo = {
            nombre: 'Ismael',
            edad: 31,
            saludar : function () {
                c(`Hola mi nombre es ${this.nombre}`)
            }
        }

        yo.saludar()

    //2. Assignacion explicita
        //Caso 2
        //Existe una funcion que recibe un objeto como parametro,
        //dentro de ella se le asigna un metodo al objeto
        //this en este caso hace referencia al objeto que se le añade el metodo

        c('*****ASIGNACION EXPLICITA*****')

        let preparandoSaludo = function (obj) {
            obj.saludar = function () {
                c(`Hola mi nombre es ${this.nombre}`)
            }
        }

        const isma = {
            nombre: 'Ismael',
            edad: 31
        },  dani = {
            nombre: 'Daniel',
            edad: 16
        }

        preparandoSaludo(isma)
        preparandoSaludo(dani)

        isma.saludar()
        dani.saludar()

        //3 Caso de this implicito
        //Una function que retorna un objeto, que contiene un metodo que invoca
        //this

        let Humano = function (nombre, edad, perro) {
            return {
                nombre: nombre,
                edad: edad,
                saludar: function () {
                    c(`Hola mi nombre es ${this.nombre}`)
                },
                perro : {
                    nombre: perro,
                    saludar: function () {
                        c(`${this.nombre} guauuuu guauuuu`)
                    }
                }
            }
        }

        const IsmaelBR = Humano('IsmaelJdz', 31, 'MyloBruno');
        IsmaelBR.saludar()
        IsmaelBR.perro.saludar()

    //Conclusion: this es invocado dentro de un metodo, implicitamente este hace
    //referencia al objeto que contiene el metodo, sin importar si el metodo es
    //añadido luego de haber sido creado el objeto, o si es una funcion que retorna un objeto

})(console.log)
