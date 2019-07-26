function findFactorialRecursive(number) {
    if(number < 2) {
        return 1;
    }
    return number * findFactorialRecursive(number - 1);
}

function findFactorialIterative(number) {
    let result = 1;
    while(number > 1) {
        result *= number--;
    }
    return result;
}

console.log(findFactorialRecursive(5));
console.log(findFactorialIterative(5));