function processData(input) {
	const strToArr = input.split("\n");
	let biggestDistance = 0;
	strToArr.shift();

    const newArr = strToArr.map((numbers) => {
        
    })

    console.log(newArr)

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
