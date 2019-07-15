function firstRecurringElement(input) {
    for(let i = 0; i < input.length - 1; i++) {
        for(let j = i + 1; j < input.length; j++) {
            if(input[i] === input[j]) {
                return input[i];
            }
        }
    }
    return undefined;
}

function firstRecurringElementB(input) {
    let map = {};
    for(let i = 0; i < input.length; i++) {
        if(map[input[i]] !== undefined) {
            return input[i];
        } else {
            map[input[i]] = i; //assignment doesn't matter 
        }
    }
    return undefined;
}

function firstRecurringElementC(input) {
    for(let i = 1; i < input.length; i++) {
        for(let j = 0; j + i < input.length; j++) {
            if(input[j] === input[j + i]) {
                return input[i];
            }
        }
    }
    return undefined;
}

function firstRepeat(array) {
    for (let i = 1; i < array.length; i++) {
      for (let j = 0; j < i; j++) {
        if (array[j] === array[i]) {
          return array[j];
        }
      }
    }
    return undefined;
  }

console.log(firstRecurringElementC([1, 5, 5, 1, 6]));
console.log(firstRepeat([1, 5, 5, 1, 6]));