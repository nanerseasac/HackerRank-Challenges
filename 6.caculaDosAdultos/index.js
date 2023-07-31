function solucao(lista) {
	const moreThanEitheen = lista.filter((age) => age > 17);
	const youngest = moreThanEitheen.reduce((acc, currentValue) => {
		if (acc > currentValue) {
			acc = currentValue;
		}
		return acc;
	}, moreThanEitheen[0]);
	return moreThanEitheen.length === 0
		? console.log("CRESCA E APARECA")
		: console.log(youngest);
}

solucao([12, 13, 19, 45, 18]);
