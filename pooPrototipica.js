;
((c) => {

	//Anidacion de objetos
		//Un objeto es una coleccion de variables y funciones agrupadas de manera estructural
			//A las variables definidas dentro de un objeto se les denomina atributos
			//A las funciones definidas dentro de un objeto se les denomina metodos

		//Entonces un objeto puede tener propiedades y estas propiedades tener en su interior
		//mas propiedades que incluso sean objetos

		//Esto se representa en forma de árbol y podremos acceder a sus propiedades con:
			//1) Notacion de punto
			//2) Notacion de array
			//3) Notacion mixta
	c('******Anidacion de Objetos*****')

	const curso = {
		titulo: 'Curso JS Avanzado: Paradigamas de programacion',
		docente: {
			nombre: 'Ismael Rojas',
			edad: 33,
			nacionalidad: 'Mexicana',
			contacto: {
				email: 'Ismaelbr7@hotmail.com',
				url: 'https://ismaeljdz7.com/',
				twitter: '@Ismaeljdz',
				ubicacion: 'CDMX DF'
			},
			costo: 40,
			url: 'http:ed.team/cursos/javascript-avanzado',
			online: true,
			plataforma: {
				nombre: 'EDTeam',
				url: 'https://ed.team',
				oficinas: [ 'Lima', 'Bogotá', 'Namekusai' ]
			}
		}
	}

	c( curso.docente.nombre )
	c( curso['docente'].contacto.url )
	c( curso.docente.plataforma.nombre )
	c( curso['docente']['plataforma'].url )


})(console.log);