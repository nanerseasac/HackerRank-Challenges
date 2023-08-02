function solucao(numeros) {
	let soma = 0;
	for (let numero of numeros) {
		soma += numero;
	}
	
	const resto = soma % numeros.length;
	if (resto === 0) {
		console.log(numeros.length);
	} else {
		console.log(resto);
	}
}

solucao([1, 3, 2, 1]);
