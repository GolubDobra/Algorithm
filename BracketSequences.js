//Написать функцию check, которая проверяет строку на правильную скобочную последовательность
// Варианты скобок: []{}()
// Примеры скобочных последовательностей:

// {[()]} - правильная
// [(]) - не правильная
// ()()[{}] - правильная
// ((()) - не правильная


// сигнатура функции
// check(str: string): boolean

function check(str) {
	if (str.length%2 !== 0) {
	    return false;
	}

	let checkRez = true;
	const arr = [];
	const pattern = {
		'}': '{',
		']': '[',
	}

	for (let i = 0; i < str.length; i++) {
		if(i > 0 && i%2 !== 0) {
			if(arr[arr.length - 1] !== pattern[str[i]]) {
				checkRez = true ;
				break;
			} else {
				checkRez = false;
			}
			
		}
		arr.push();
	}

	return checkRez;

}
							
console.log('check', check('[]{}()')); 		// true
console.log('check', check('{[()]}')); 		// true
console.log('check', check('[(])')); 		// false
console.log('check', check('()()[{}]')); 	// true
console.log('check', check('((())')); 		// false
console.log('check', check('('));			// false

