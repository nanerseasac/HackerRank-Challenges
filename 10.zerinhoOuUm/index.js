function solucao(jogadores) {
	const zero = [];
	const um = [];
	for (let i = 0; i < jogadores.length; i++) {
		if (jogadores[i].jogada === 0) {
			zero.push(jogadores[i]);
		} else {
			um.push(jogadores[i]);
		}
	}
	if (zero.length === 1 && um.length > 1) {
		console.log(zero[0].nome);
	} else if (zero.length > 1 && um.length === 1) {
		console.log(um[0].nome);
	} else {
		console.log("NINGUEM");
	}
}

solucao([
	{
		nome: "Herman",
		jogada: 1,
	},
    {
		nome: "Heran",
		jogada: 1,
	},
	{
		nome: "Rhodes",
		jogada: 0,
	},
	{
		nome: "Beach",
		jogada: 0,
	},
	{
		nome: "Laurel",
		jogada: 0,
	},
	{
		nome: "Beatrice",
		jogada: 0,
	},
	{
		nome: "Alison",
		jogada: 0,
	},
	{
		nome: "Saundra",
		jogada: 0,
	},
	{
		nome: "Klein",
		jogada: 0,
	},
]);
