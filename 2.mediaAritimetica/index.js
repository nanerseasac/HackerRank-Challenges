function solucao(lista) {
	let total = 0;
	for (let i = 0; i < lista.length; i++) {
		total += lista[i];
	}
	console.log(total / lista.length);
}

console.log(solucao([2, 3, 4]));
