function resultadoDeExamen (nota) {
	if (nota < 4) {
		return "aplazado"
	} else if (nota < 6) {
		return "a recuperar"
	} else if (nota > 6 && nota < 10) {
		return "aprobado"
	} else if (nota === 10) {
		return "sobresaliente"
	}
}

function sonHermanos (bro, sis) { 
	if (bro.madre === sis.madre && bro.padre === sis.padre) {
		return "true"
	} else {
		return "false"
	}
}

const bro = {
	madre: "Guadalupe",
	padre: "Guillermo",
} 

const sis = {
	madre: "Guadalupe",
	padre: "Guillermo",
}