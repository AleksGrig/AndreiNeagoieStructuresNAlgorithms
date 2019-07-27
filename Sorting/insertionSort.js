function insertionSort(array) {
    for(let i = 1; i < array.length; i++) {
        let j = i - 1;
        let k = i;
        if(array[k] < array[j]) {
            console.log('Enter 2-nd loop');
        }
        while(array[k] < array[j] && j >= 0) {
            let temp = array[j];
            array[j--] = array[k];
            array[k--] = temp;        
        }
    }
    return array;
}

let array = [4, 5, 6, 7, 0, 3];
console.log(insertionSort(array));