//Написать функцию check, которая проверяет строку на правильную скобочную последовательность
// Варианты скобок: []{}()
// Примеры скобочных последовательностей:

// {[()]} - правильная
// [(]) - не правильная
// ()()[{}] - правильная
// ((()) - не правильная


// сигнатура функции
// check(str: string): boolean


// First variant
// TODO: find mistake
function check(str) {
	if (str.length%2 !== 0) {
	    return false;
	}
	let checkRez = true;
	const arr = [];

	const pattern = {
		'}': '{',
		']': '[',
		')': '(',
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

// Second variant
var isValid = function(s) {
    const pattern = {
        '}': '{',
        ')': '(',
        ']': '[',
    }

    const stack = [];

    for (index in s) {
        if (Object.values(pattern).includes(s[index])) {
            stack.push(s[index]);
        } else if (Object.keys(pattern).includes(s[index])) {
            if (stack.length === 0 || pattern[s[index]] !== stack.pop()) {
                return false 
            }
        }
    }
    return stack.length === 0;
};
							
console.log('check', check('[]{}()')); 		// true
console.log('check', check('{[()]}')); 		// true
console.log('check', check('[(])')); 		// false
console.log('check', check('()()[{}]')); 	// true
console.log('check', check('((())')); 		// false
console.log('check', check('('));			// false



