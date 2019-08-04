function binarySearch(array, value) {
    if(array.length > 0) {
        return _binarySearch(array, 0, array.length - 1, value);
    } else {
        return false;
    }
}

function _binarySearch(array, firstIndex, lastIndex, value) {
    if(lastIndex - firstIndex < 2) {
        if (array[firstIndex] === value || array[lastIndex] === value) {
            return true;
        } else {
            return false;
        }
    } else {
        let middleIndex = Math.floor((firstIndex + lastIndex) / 2);
        if(value > array[middleIndex]) {
            return _binarySearch(array, middleIndex + 1, lastIndex, value);
        } else if(value < array[middleIndex]) {
            return _binarySearch(array, firstIndex, middleIndex - 1, value);
        } else {
            return true;
        }
    }
}

function binarySearch2(array, value) {
    let firstIndex = 0;
    let lastIndex = array.length;
    while(firstIndex <= lastIndex) {
        if(lastIndex - firstIndex < 2) {
            if (array[firstIndex] === value || array[lastIndex] === value) {
                return true;
            } else {
                return false;
            }
        } else {
            let middleIndex = Math.floor((firstIndex + lastIndex) / 2);
            if(value > array[middleIndex]) {
                firstIndex = middleIndex + 1;
            } else if(value < array[middleIndex]) {
                lastIndex = middleIndex - 1;
            } else {
                return true;
            }
        }
    }
    return false;
}

let array = [0, 1, 3, 4, 5, 6, 7, 15, 56];
console.log(binarySearch2(array, 0));