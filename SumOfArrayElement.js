// Написать функцию подсчета всех чисел в массиве. Элементом массива может быть другой массив или число.


const array = [1,5,[5,[6,6,4,[65]]]] // 92

function total(array) { // подсчитывает сумму всех чисел

    let sum = 0;

    for (let i = 0; i < array.length; i++) {
        if (Array.isArray(array[i])) {
            sum += total(array[i]);
        } else {
            sum += array[i];
        }
    }
    
    return sum;
}


console.log('total = ', total(array));


// O(n) -- временная сложность
// О(1) -- сложность по памяти