function imprimirNumeros (numero) {
	for (i=0; i <= numero; i++)
	console.log(i)
}

function imprimirOtrosNumeros (numeroDesde, numeroHasta) {
	for (i = numeroDesde; i <= numeroHasta; i++)
	console.log(i)
}

console.log(imprimirNumeros(10))
console.log(imprimirOtrosNumeros(4, 10))