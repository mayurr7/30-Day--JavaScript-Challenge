//Areithmatic oprations

console.log(5+6);
console.log(5-6);
console.log(5*6);
console.log(5/6);
console.log(5%6);


//Assignment operators
console.log();

let a =1;
let b = 12;
console.log(a += b);

let c =1;
let d = 12;
console.log(a -= b);

//Comparison operator
let num1 = 22;
let num2 = 21;

if(num1 > num2){
    console.log(num1, 'is greater');
}else if(num1 < num2){
    console.log(num1, 'is small');
}



if(a == b){
    console.log('equale');
}


//ternary  operator

const checkNumber =  (number) => {
    return number >= 0 ? 'positive' : 'negative';
}

let number = -5;
console.log(`the ${number} is ${checkNumber(number)}`);
