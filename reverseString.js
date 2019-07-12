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

console.log(reverse1('alex'));
console.log(reverse2('Hi there!'));
console.log(reverse3('peace!'));