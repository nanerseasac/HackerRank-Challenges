function solucao(min, max, valores) {
	const values = [];
	for (let i = 0; i < valores.length; i++) {
		if (valores[i] >= min && valores[i] <= max) {
			values.push(valores[i]);
		}
	}
	console.log(values);
}

solucao(1, 1, [1, 5, 6, 10, 11]);
