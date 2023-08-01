function processData(input) {
	let getIt = false;
	if (input === input.toLowerCase()) {
		console.log(input);
		getIt = true;
	}
	if (input === input.toUpperCase()) {
		console.log(input.toLowerCase());
		getIt = true;
	}
	if (
		input[0] === input[0].toLowerCase() &&
		input.slice(1) === input.slice(1).toUpperCase()
	) {
		const word = input[0].toUpperCase().concat(input.slice(1).toLowerCase());
		console.log(word);
		getIt = true;
	}
	if (!getIt) {
		console.log(input);
	}
}

processData("cApS");
