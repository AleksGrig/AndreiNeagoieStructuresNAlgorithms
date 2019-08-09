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

const reverse5 = str => str.split('').reverse().join('');

function reverse4(str) {
  return [...str].reverse().join('');
}

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

function reverseNumber(num) {
  let positive = num >= 0 ? true : false;
  num = positive ? num : -1 * num; 
  let res = 0;
  let reversedNumber = 0;
  while(num !== 0) {
    res = num % 10;
    num = Math.floor(num / 10);
    reversedNumber = reversedNumber * 10 + res;
  }
  return positive ? reversedNumber : -1 * reversedNumber;
}

function reverseNumber2(num) {
  let str = "";
  str += num;
  return str.split('').reverse().join('');
}

console.log(reverse5('alex'));
console.log(reverse2('Hi there!'));
console.log(reverse3('peace!'));
console.log(reverse4('World!'));
console.log(reverseString('peace!!!'));
console.log(reverseStringRecursive('Aurelius'));
console.log(reverseNumber(12345));
console.log(reverseNumber2(567));