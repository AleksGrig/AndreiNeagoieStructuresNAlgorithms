class HashTable {
    constructor(size) {
        this.data = new Array(size);
    }

    _hash(key) {
        let hash = 0;
        for(let i = 0; i < key.length; i++) {
            hash = (hash + key.charCodeAt(i) * i) % this.data.length;
        } 
        return hash;
    }

    set(key, value) {
        let index = this._hash(key);
        if(!this.data[index]){
            this.data[index] = [];
        } 
        this.data[index].push([key, value]);
        return this.data;
    }

    get(key) {
        let index = this._hash(key);
        if(this.data[index]) {
            for(let i = 0; i < this.data[index].length; i++) {
                if(this.data[index][i][0] === key) {
                return this.data[index][i][1];
                }
            }
        }
        return undefined;
    }
}

const myHashTable = new HashTable(50);
myHashTable.set('orange', 10000);
console.log(myHashTable.set('apples', 666));
console.log(myHashTable.get('cakes'));
