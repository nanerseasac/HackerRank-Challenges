function processData(input) {
	const strToArr = input.split("\n");
	let biggestDistance = 0;
	strToArr.shift();

	const newArr = strToArr.map((numbers) => {
		const [x, y] = numbers.split(" ").map(Number);
		return [x, y];
	});

	for (let i = 0; i < newArr.length; i++) {
		for (let j = i + 1; j < newArr.length; j++) {
			const calcD = Math.sqrt(
				(newArr[j][0] - newArr[i][0]) ** 2 + (newArr[j][1] - newArr[i][1]) ** 2
			)
			if (biggestDistance < calcD) {
				biggestDistance = calcD;
			}
		}
	}

	console.log(biggestDistance);
}
processData(`3
0 0
0 3
4 0`);

// const distance = (x1, x2, y1, y2) => {
// 	const calcD = Math.sqrt((x2 - x1) ** 2 + (y2 - y1) ** 2);

// 	return calcD;
// };

// | x1  | x2  | y1  | y2  |
// | :-: | :-: | :-: | :-: |

// 3
// 0 0
// 0 3
// 4 0
// Sample Output 0

// 5.0
// Sample Input 1

// 5
// 3.56 17
// -5.1 36.3
// 0.0002 -2
// 5 5
// -9.01 -17.7

