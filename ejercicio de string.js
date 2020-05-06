// LOS PRIMEROS DOS NO SALIERON :/

function contarEspacios (texto) {
	let espacios = 0
	for (i=0; i < texto.length; i++) {
		if (texto.includes(" ")){
			espacios = espacios + 1
		}
	return espacios
	}
}

console.log(contarEspacios("esto no me estaria saliendo"))


function buscarTuits (listaDeTuits, textoABuscar) {
	let tuitsCancelados = []
	for (i=0; i < listaDeTuits.length; i++){
		if (listaDeTuits[i].includes(textoABuscar)) {
			tuitsCancelados.push(listaDeTuits[i])
		}
	}
}

console.log(buscarTuits(["hola juan", "que haces"], "hola"))

function censurarTexto (frase, expresionesCensuradas) {
	for (i=0; i < frase.length; i++){
		if (frase.includes(expresionesCensuradas)){
			return frase.replace(expresionesCensuradas, "*")
		}
	}
}

console.log(censurarTexto("tan dificiles ibas a hacer los ejercicios lucho hdp", "hdp"))