// Implementation works for integers ranging from 0 to 100
function countingSort(array) {
    let sortedArray = new Array(array.length);
    let countingArray = new Array(101).fill(0);
    for(let i = 0; i < array.length; i++) {
        countingArray[array[i]] += 1;        
    }
    for(let i = 1; i < countingArray.length; i++) {
        countingArray[i] = countingArray[i - 1] + countingArray[i];
    }
    for(let i = array.length - 1; i >= 0; i--) {
        sortedArray[--countingArray[array[i]]] = array[i];
    }
    return sortedArray;
}

let array = [4, 5, 6, 7, 0, 3, 15, 2, 1, 10, 5, 0, 66];
console.log(countingSort(array));