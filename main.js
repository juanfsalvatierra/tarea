/*
	Estamos en una librería comunitaria llamada "Lobroli". Recibe libros donados 
	y los distribuye. Los lectores deben devolverlos. 
	Por ahora, Lobroli se maneja con un cuaderno. Do your thing: 
	
	1) Cada libro tiene: -título 
					  	 -autor
					     -año de lanzamiento
					     -editorial
					     -international standard book number (ISBN)--> código que los identifica

		Para almacernar la información de todos los libros que tiene la librería voy a 
		hacer una lista (array) de libros. 
			Cada uno de esos libros va a ser un objeto con título, autor, año de lanzamiento,
			editorial e ISBN como propiedades (todos strings). 
*/

const libros = [
	{
		titulo: "Historia del S.XX",
		autor: "Eric Hobsbawm",
		anio: "1980",
		editorial: "Fondo de cultura económica",
		ISBN: "123ABC",
	},
	{
		titulo: "Sapiens",
		autor: "Yuval Noah Harari",
		anio: "2012",
		editorial: "Debate",
		ISBN: "123ABD",	
	},
	{
		titulo: "El 45",
		autor: "Felix Luna",
		anio: "2000",
		editorial: "De bolsillo",
		ISBN: "123ABE",
	},
	{
		titulo: "Revolucion y contrarrevolucion argentina",
		autor: "Jorge Abelardo Ramos",
		anio: "1980",
		editorial: "Continente",
		ISBN: "123ABF",
	},
]

/*
	2) Crear un programa que les permita a los administradores de Lobroli fijarse si 
	un libro está disponible o no:

		I) Para fijarme si un libro está disponible, tengo que ir al cuaderno donde 
		están todos los libros y fijarme uno x uno. Buscar el libro solicitado y fijarme
		si está disponible o tomado. 

		II) Una primera aproximación que se me ocurre es crear una lista de libros NO
		disponibles. Cada vez que un lector toma un libro, este se agrega a la lista.
		En cuanto el libro sea devuelto, este se eliminará de la lista de libros no 
		disponibles.

		Para saber si un libro está disponible o no me fijo en la lista de libros no
		disponibles. Si el libro que busco está en la lista de libros no disponibles, 
		este no se encuentra disponible. Si no está en esa lista, está dsponible.

		III) -Crear una lista librosNoDisponibles vacía que albergue los libros no disponibles. 
			 -Crear una función tomarLibro que reciba la lista de libros y un ISBN
			 y agregue ese libro a la lista librosNoDisponibles.
			 -Crear una función devolverLibro que reciba un ISBN y saque ese libro de la
			 lista librosNoDisponibles.

			 -Crear una función buscarLibro que reciba la lista librosNoDisponibles
			 y un ISBN y devuelva "No disponible" si está en esa lista y "disponible"
			 si no está. 
*/


let librosNoDisponibles = []					//inicio una lista vacía que va a albergar los no disponibles

function tomarLibro (libros, ISBN) {
	for (let i = 0; i < libros.length; i++) {	//recorro la lista de libros
		const libro = libros[i]				  	//defino cada libro de la lista	 

		for (let j = 0; j < libro.length; j++) {//recorro cada libro
			if (ISBN === libro.ISBN) {			//me fijo si el ISBN del parametro es el mismo que el del libro que busco							
				librosNoDisponibles.push(ISBN)	//si coinciden, agregar el ISBN a la lista de los no disponibles. 
			}
		}
	}
	return librosNoDisponibles					//que devuelva la lista con el ISBN agregado
}

function devolverLibro (ISBN, librosNoDisponibles) {

	const indiceDelLibro = librosNoDisponibles.indexOf(ISBN)//Para sacar un ISBN de la lista librosNoDisponibles
															//voy a usar splice. Para dicha función nativa necesito 
															//saber el índice del ISBN que estoy buscando en librosNoDisponibles.

	for (let i = 0; i < librosNoDisponibles.length; i++) {	//recorro la lista de libros tomados
		if (librosNoDisponibles.includes(ISBN)) {			//si la lista alberga el ISBN que busco
			librosNoDisponibles.splice(indiceDelLibro, 1)	//saco de la lista librosNoDisponibles el libro devuelto
		}
	}
}

function buscarLibro (librosNoDisponibles, ISBN) {			//la función que me pide la consigna:
	if (librosNoDisponibles.includes(ISBN)) {				//si la lista librosNoDisponibles tiene el ISBN que le paso
		return "No disponible"								//el libro no está disponible
	} else {												//si no,
		return "disponible"									//el libro está disponible. 
	}
}

/*
	3) Crear un programa que te permita buscar qué libros están disponibles de cierto
	autor específico. 
		I) Antes en "Lobroli" tenían que fijarse en el cuaderno de la librería uno por uno
		cada libro. De cada libro fijarse cuáles eran del autor predilecto del cliente. Si
		era de ese autor, fijarse si estaba disponible. Si estaba disponible armar una lista
		en hoja aparte de los libros de cierto autor que estén disponibles

		II) La primera aproximación que se me ocurre es armar una lista librosDisponibles aparte
		de todos los libros. Dicha lista va a tener el ISBN y el nombre del autor del libro. Dentro
		de esa lista, nos fijamos cuáles son los libros de tal autor. 

		III)-crear una función obtenerLibros que nos de la lista de libros disponibles de la librería así
			 no trabajamos sobre la lista de libros original.  
			-Aplicar la misma idea que en el punto anterior: en cuanto un cliente se lleva un libro, 
			 sumarlo a la lista librosNoDisponibles pero también voy a tener que crear una función que 
			 lo saque de la lista librosDisponibles. 
			-crear una función buscarLibroDisponibleDeAutor que reciba una lista librosDisponibles y
			 un autor y devuelva todos los libros disponibles que sean del autor buscado.
										--ACLARACIÓN-- 
	Hola Lucho (?) acá en este ejercicio ya sé que hago de nuevo funciones que ya hice en el anterior
	(la de libroTomado y libroDevuelto) y ya sé que está mal. Pero en el primero solamente agregué el 
	ISBN y no el nombre del autor a la lista librosNoDisponibles (o sea que no me sirve para el ejercicio 
	que arranca ahora) y como subestimé fuerte el tiempo que me iba a tomar todo este parcial no quería 
	borrarlo todo y arrancar de cero. A lo mejor se podía resolver con lo que tenía en el ejercicio 
	anterior pero tenía poco tiempo y entré en pánico porque no quería no llegar a hacer todo lo posible. 

	Te pido mildis :(       
*/

function obtenerLibros (libros) {

	let librosDisponibles = []					//creo una lista vacía que va a albergar todos los libros

	for (let i = 0; i < libros.length; i++) {   //recorro la lista original de libros
		const libro = libros[i]

		librosDisponibles = librosDisponibles + libro
	}
	return librosDisponibles					//obtengo todos los libros en una lista nueva. 
}

let librosTomados = []							//arranco una variable de libros tomados vacía que va a albergar todos 
												//los no disponibles 

function libroTomado (librosDisponibles, ISBN) {			//para determinar que un libro fue tomado
	for (let i = 0; i < librosDisponibles.length; i++) {	//recorro la lista de libros	
		const libro = librosDisponibles[i]					

		for (let j = 0; j < libro.length; j++) {	//recorro cada libro y
			if (ISBN === libro.ISBN) {				//si el ISBN buscado es el mismo que el ISBN del libro
				librosTomados = librosTomados + libro 	//agregar dicho libro a la lista de libros tomados

				librosDisponibles.splice(librosDisponibles.indexOf(libro), 1)//y también sacar ese libro de la lista de libros disponibles. 
			}
		}
	}
	return librosTomados							//devuelvo la lista de libros no disponibles 
}

function libroDevuelto (librosTomados, librosDisponibles, ISBN) {	//para determinar que un libro fue devuelto
	for (let i = 0; i < librosTomados.length; i++) {				//recorro la lista de libros tomados
		const libro = librosTomados[i]		
		
		if (librosTomados.includes(ISBN)){							//si el ISBN que busco está en la lista de librosTomados (en realidad
																	//tengo que buscar en el ISBN de cada libro pero no se como jej)		
			librosTomados.splice(librosTomados.indexOf(libro))		//saco el libro de la lista librosTomados		
			
			librosDisponibles.push(libro)							//se devuelve el libro a la lista librosDisponibles
		}
	}
	return librosDisponibles
}

function buscarLibrosDisponiblesDeAutor (librosDisponibles, autor) {

	let librosDisponiblesDelAutor = []

	for (let i = 0; i < librosDisponibles.length; i++) {
		const libro = librosDisponibles[i]

		if (libro.autor === autor) {
			librosDisponiblesDelAutor = librosDisponiblesDelAutor + libro
		}
	}
	return librosDisponiblesDelAutor
}

/*
	4) Crear un programa que indique cuáles son los 10 libros más solicitados para
	pedirle a la editorial más de ellos.

		I) La primera aproximación que se me ocurre es que cada vez que un cliente vaya a Lobroli y pida
		un libro se guarde esa información como libro solicitado. Se van guardando todas las solicitudes 
		de todos los libros sin importar si están disponibles o no. Esa hoja aparte donde se van guardando
		las solicitudes luego se revisa a fin de mes y se solicitan a las editoriales. 

		II) Para este ejercicio se me ocurre que voy a trabajar con una función que reciba un libro y lo
		agregue a una lista de solicitudes de libros. Funcion que va a funcionar por cada solicitud que
		se haga. Una vez que se tengan todos las solicitudes, sumar la cantidad de veces que se solicita
		cada libro. 

		III) -crear una función libroSolicitado que reciba un ISBN y agregue dicho libro a una lista solicitudes
		      que arranca vacía y va albergando todas las solicitudes.
		     -una vez que tengas todas las solicitudes hechas (por mes, ponele), sumás cuántas veces se solicitó
		      cada uno de los libros.   
*/
