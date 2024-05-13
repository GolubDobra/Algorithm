// Написать функцию findNum которая принимает на вход два аргумента: массив отсортированных чисел и число num.
// Функция должна возвращать true если в массиве присутствует число num, иначе false.

// Найти позицию элемента


const findNum = (arr, num) => {
	let leftEP = 0;
    let rightEP = arr.length - 1;
    let position = -1;
    let result = false;
    let middle;

	while (!result && leftEP <= rightEP) {
		middle = Math.floor((leftEP+rightEP)/2);

		if (arr[middle] === num) {
			position = middle;
			result = true;
		} else if (arr[middle] < num) {
			leftEP = middle + 1;
		} else {
			rightEP = middle - 1;
		}
	}

	return { result, position };
}

findNum([1, 2, 3, 4, 5], 5); // true, 4
findNum([1, 3, 5], 3); // true, 1
findNum([1, 3, 5], 7); // false, -1