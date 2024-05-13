// Написать функцию fold, которая делает сверстку строки:
// aaabbccda -> a3b2c2da

const fold = (str) => {
	let updStr = '';
	let index = 0;
	let numOfLetters = 0;
	let prevLetter = '';

	while(index <= str.length) {
		if (str[index] !== prevLetter && numOfLetters > 1) {
			updStr += prevLetter + String(numOfLetters);
			numOfLetters = 0;
		} else if (str[index] !== prevLetter) {
			updStr += prevLetter;
			numOfLetters = 0;
		}

        prevLetter = str[index];
		numOfLetters ++;
		index++;
	}

	return updStr;

}

console.log(fold('aaabbccda')); //a3b2c2da