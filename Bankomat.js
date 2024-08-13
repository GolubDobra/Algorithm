
const limits = {
	5000: 5,
	1000: 5,
	500: 5,
	100: 5,
	231: 13,
	54: 1,
	3: 5,
}


function atm(sum, limits) {
	const result = {};

	let sortingLimits = Object.keys(limits).map(Number).sort((a, b) => b - a); // [5000, 1000, 500, 100, ...]
 
	for (let sortingLimit of sortingLimits) {
		const count = Math.min(Math.floor(sum/sortingLimit), limits[sortingLimit]);

		if(count > 0) {
			limits[sortingLimit] = limits[sortingLimit] - count;
			result[sortingLimit] = count;
			sum = sum - (count * sortingLimit);
		}

		if(!sum) {
			break;
		}
	}

	if(Object.keys(result).length == 0) {
		console.log('Error');
		return
	}

	return result;
}


// atm(15600, limits); -> {5000: 3, 500: 1, 100: 1}

console.log(atm(15600, limits));
console.log(limits);
