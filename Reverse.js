// Написать функцию, переворачивающую массив

const reverseArr = (arr) => {
	if(arr.length<= 1) {
		return arr
	}

	let endEl = arr.length - 1;
	let startEl = 0;

	while(endEl > startEl) {
		const el = arr[startEl];
		arr[startEl] = arr[endEl];
		arr[endEl] = el;

		endEl--;
		startEl++;
	}

	return arr;

}

console.log(reverseArr([1, 2, 3, 4, 5, 6]));
console.log(reverseArr([5]));
console.log(reverseArr([]));
console.log(reverseArr(['3', 45, '2', 'dfdfg', 23]));
