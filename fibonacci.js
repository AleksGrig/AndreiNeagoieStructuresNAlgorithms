function fibonacciRecursion(number) {
    if(number < 2) {
        return number;
    }
    return fibonacciRecursion(number - 1) + fibonacciRecursion(number - 2);
}

function fibonacciMemoized() {
    let list = {};
    return function fibonacci(n) {
        if(n in list) {
            return list[n];
        } else {
            if(n < 2) {
                list[n] = n;
            } else {
                list[n] = fibonacci(n - 1) + fibonacci(n - 2);
            }
            return list[n];
        }
    }
}

function fibonacciIterative(number) {
    if(number === 0) {
        return 0;
    } else if(number === 1) {
        return 1;
    } else {
        let firstNum = 0;
        let secondNum = 1;
        let count = 2;
        while(count < number) {
            let thirdNum = firstNum + secondNum; 
            firstNum = secondNum;
            secondNum = thirdNum;
            count++;
        }
        return firstNum + secondNum;
    }
}

function fibonacciIterative2(number) {
    let result = [0, 1];
    for(let i = 2; i <= number; i++) {
        result.push(result[i - 1] + result[i - 2]);
    }
    return result[number];
}

console.log(fibonacciRecursion(14));
console.log(fibonacciIterative(14));
console.log(fibonacciIterative2(14));

const memoized = fibonacciMemoized();
console.log(memoized(14));