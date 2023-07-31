function solucao(min, km) {
	const valorMin = 50;
	const valorKm = 70;

	const totalSemPromo = min * valorMin + km * valorKm;

	const promoMin = 30;
	const promoKm = 50;

	const maisQ20min = min - 20;
	const maisQ10km = km - 10;

	const totalPromoMin =
		min * valorMin + km * valorKm - maisQ20min * (valorMin - promoMin);

	const totalPromoKm =
		min * valorMin + km * valorKm - maisQ10km * (valorKm - promoKm);

	const totalPromo =
		min * valorMin +
		km * valorKm -
		maisQ20min * (valorMin - promoMin) -
		maisQ10km * (valorKm - promoKm);

	if (min > 20 && km > 10) {
		console.log(totalPromo);
	}
	if (min > 20 && km <= 10) {
		console.log(totalPromoMin);
	}
	if (min <= 20 && km > 10) {
		console.log(totalPromoKm);
	}
	if (min <= 20 && km <= 10) {
		console.log(totalSemPromo);
	}
}

solucao(25, 11.5);

//50 centavos por minuto de viagem e mais 70 centavos por cada quilômtro de viagem realizado.
//Caso a viagem tenha mais de 10km, cada km adicional (acima de 10) fica mais barato, passando a custar apenas 50 centavos por km.
//Caso a viagem dure mais de 20min, cada min adicional (acima de 20) fica mais barato, passando a custar apenas 30 cetavos por minuto.

// 25 11.5
// Sample Output 0

// 1925
