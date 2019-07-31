function quickSort(array) {
    if(array.length < 2) {
        return array;
    } else {
        return _quickSort(array, 0, array.length - 1);
    }
}

function _quickSort(array, left, right) {
    if(left < right) {
        let partitionIndex = _partition(array, left, right);
        _quickSort(array, left, partitionIndex - 1);
        _quickSort(array, partitionIndex + 1, right);
    }
    return array;
}

function _partition(array, left, right) {
    let pivot = right;
    while(left < pivot) {
        if(array[left] <= array[pivot]) {
            left++;
        } else {
            _swap(array, left, pivot - 1);
            _swap(array, pivot - 1, pivot);
            pivot--;
        }
    }
    return pivot;
}

function _swap(array, index1, index2) {
    let temp = array[index1];
    array[index1] = array[index2];
    array[index2] = temp;
}

let array = [4, 5, 6, 7, 0, 3, 2, 15, 1];
console.log(quickSort(array));