const miComidaPreferida = {
	nombre: "tarta de jamón y queso",
	cantidadDeVecesQueComi: 20,
	cantidadDeVecesQueMeCocinaron: 20,
	ingredientes: ["masa", "jamon", "queso", "huevo", "manteca", "crema", "sal"], 
}

const llevaMasDeCincoIngredientes = miComidaPreferida.ingredientes.length > 5
const cantidadDeVecesQueMeCocine = miComidaPreferida.cantidadDeVecesQueComi - miComidaPreferida.cantidadDeVecesQueMeCocinaron

function calcularAreaRectangulo (base, altura) {
	const area = base * altura

	return area
}

function calcularPrecioTotal (precio, unidades, envio) {
	const monto = (precio*unidades) + envio

	return monto
}

function dejarPasar (edad) {
	const esMayor = edad >= 18

	return esMayor
}

console.log(calcularAreaRectangulo(6, 4))
console.log(calcularPrecioTotal(50, 2, 30))
console.log(dejarPasar(15)) 


