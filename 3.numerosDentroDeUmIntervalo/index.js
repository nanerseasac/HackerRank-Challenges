function solucao(numero, limiteInferior, limiteSuperior) {
	return numero >= limiteInferior && numero <= limiteSuperior
		? console.log("PERTENCE")
		: console.log("NAO PERTENCE");
}

solucao(10, 5, 20);
