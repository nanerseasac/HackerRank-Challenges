function processData(input) {
    let getIt = false
	if (input === input.toLowerCase()) {
		console.log(input);
        getIt = true
	}
	if (input === input.toUpperCase()) {
		console.log(input.toLowerCase());
        getIt = true
	}
	const sliceWord = input.slice(0, 1);
	const sliceWord2 = input.slice(1);
	if (
		sliceWord === input[0].toLowerCase() &&
		sliceWord2 === sliceWord2.toUpperCase()
	) {
		const firsLetter = sliceWord.toUpperCase();
		const remainLetters = sliceWord2.toLowerCase();
		const word = firsLetter.concat(remainLetters);
		console.log(word);
        getIt = true
	}if(!getIt) {
        console.log(input.toLowerCase())
    }
}

processData("lOcK");


 