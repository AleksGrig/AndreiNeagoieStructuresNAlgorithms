function reverse1(str){
    //Check input first
    if(!str || str.length < 2 || typeof str != 'string'){
        return 'Wrong input';
    } 
   const backwards = [];
   
   for(let i = 0; i < str.length; i++){
       backwards[i] = str[str.length - 1 - i];
   }
   
   return backwards.join('');
}

function reverse2(str){
    return str.split('').reverse().join('');
}

const reverse3 = str => [...str].reverse().join('');

function reverseString(str) {
    let arrayStr = str.split("");
    let reversedArray = [];
    while(arrayStr.length > 0) {
        reversedArray.push(arrayStr.pop());        
    }    
    return reversedArray.join("");
}

function reverseStringRecursive (str) {
    if (str === "") {
      return "";
    } else {
      return reverseStringRecursive(str.substr(1)) + str.charAt(0);
    }
  }

console.log(reverse1('alex'));
console.log(reverse2('Hi there!'));
console.log(reverse3('peace!'));
console.log(reverseString('peace!!!'));
console.log(reverseStringRecursive('Aurelius'));