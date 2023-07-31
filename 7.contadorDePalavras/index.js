function solucao(texto) {
	const txtArr = texto.trim().split(" ");
	let counter = 0;
	for (let i = 0; i < txtArr.length; i++) {
		if (txtArr[i]) {
			counter++;
		}
	}
	console.log(counter);
}

solucao(
	"Cuidado, pois usuarios as vezes deixam espacos vazios no fim do texto sem querer"
);
