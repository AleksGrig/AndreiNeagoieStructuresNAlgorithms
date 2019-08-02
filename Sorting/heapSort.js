function heapSort(array) {
    array = _buildHeap(array);
    for(let i = 0; i < array.length; i++) {
        _swap(array, 0, array.length - 1 - i);
        _heapDown(array, array.length - 2 - i);
    }
    return array;
}

function _swap(array, index1, index2) {
    let temp = array[index1];
    array[index1] = array[index2];
    array[index2] = temp;
}

function _buildHeap(array) {
    let heap = [];
    for(let i = 0; i < array.length; i++) {
        heap.push(array[i]);
        _heapUp(heap);
    }
    return heap;
}

function _heapUp(array) {
    let childIndex = array.length - 1;
    let parentIndex = Math.floor((childIndex - 1) / 2);
    while(parentIndex >= 0 && array[childIndex] > array[parentIndex]) {
        _swap(array, childIndex, parentIndex);
        childIndex = parentIndex;
        parentIndex = Math.floor((parentIndex - 1) / 2);
    }
}

function _heapDown(array, last) {
    let parentIndex = 0;
    let leftChild = parentIndex * 2 + 1;
    let rightChild = parentIndex * 2 + 2;
    while(rightChild <= last && (array[parentIndex] < array[leftChild] 
        || array[parentIndex] < array[rightChild])) {
            if(array[parentIndex] < array[leftChild] && array[parentIndex] < array[rightChild]) {
                let maxChild = array[leftChild] >= array[rightChild] ? leftChild : rightChild;
                _swap(array, parentIndex, maxChild);
                parentIndex = maxChild;
            } else if(array[parentIndex] < array[leftChild]) {
                _swap(array, parentIndex, leftChild);
                parentIndex = leftChild;
            } else {
                _swap(array, parentIndex, rightChild);
                parentIndex = rightChild;
            }
            leftChild = parentIndex * 2 + 1;
            rightChild = parentIndex * 2 + 2;
        }
    if(leftChild === last && array[parentIndex] < array[leftChild]) {
        _swap(array, parentIndex, leftChild);
    }    
    return array;
}


let array = [4, 5, 6, 7, 0, 3, 15, 2, 1, 10];
console.log(heapSort(array));