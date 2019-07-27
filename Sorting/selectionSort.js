function selectionSort(array) {
    for(let i = 0; i < array.length; i++) {
        let minIndex = i;
        for(let j = i + 1; j < array.length; j++) {
            if(array[j] < array[i]) {
                minIndex = j;
            }
        }
        let temp = array[i];
        array[i] = array[minIndex];
        array[minIndex] = temp;
    }
    return array;
}

let array = [4, 10, 6, 7, 0, 3];
console.log(selectionSort(array));