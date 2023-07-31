function solucao(precos) {
	let total = 0;
	let menorPreco = 99999;
	for (let preco of precos) {
		total += preco;
		if (menorPreco > preco) {
			menorPreco = preco;
		}
	}
	if (precos.length <= 2) {
		console.log(total)
	} else {
		const count = total - (menorPreco / 2);
		console.log(count);
	}
}

solucao([100, 100, 100]);
