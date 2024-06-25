const sum = (...numbers) => {
    let sum = 0;
    for (let index = 0; index < numbers.length; index++) {
        sum += numbers[index];

    }
    return sum
}

console.log(sum(1, 2));
console.log(sum(1, 2, 3));
console.log(sum(4, 4, 4, 4, 4, 4, 45));