function mergeSort(array) {
    if(array.length === 1) {
        return array;
    }
    let mid = Math.round(array.length / 2);
    let left = array.slice(0, mid);
    let right = array.slice(mid);
    console.log('Left half: ' + left);
    console.log('Right half: ' + right);
    return merge(mergeSort(left), mergeSort(right));
}

function merge(left, right) {
    array = [];
    let i = 0;
    let j = 0;
    while(i < left.length && j < right.length) {
        if(left[i] <= right[j]) {
            array.push(left[i++]);
        } else {
            array.push(right[j++]);
        }
    }
    while(i < left.length) {
        array.push(left[i++]);
    }
    while(j < right.length) {
        array.push(right[j++]);
    }
    console.log('Merge: ' + array);
    return array;
}

let array = [4, 5, 6, 7, 0, 3, 2];
console.log(mergeSort(array));