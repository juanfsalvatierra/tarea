function duplicarNumeros(listaDeNumeros) {
	for (i=0; i < listaDeNumeros.length; i++) {
		listaDeNumeros[i] = listaDeNumeros[i] * 2
	}

	return listaDeNumeros
}

function multiplicar (lista) {
	let listaFinal = 1
	for (i=0; i < lista.length; i++){ 
		listaFinal = listaFinal * lista[i] 		
	}
	return listaFinal
}

function calcularPromedios(numeros) {
	let resultado = 0 
	for (i=0; i < numeros.length; i++){ 
		resultado = resultado + numeros[i]
	}
	resultado = resultado / numeros.length
	return resultado
}