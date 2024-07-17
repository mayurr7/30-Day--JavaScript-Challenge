function checkNum(number){
    if(number % 2 == 0){
        console.log(`${number} is even num `);
    }else{
        console.log(`${number} is odd num`);
    }
}
checkNum(5)
checkNum(20);

console.log();

function squre(number){
    console.log(number * number);
}
squre(2);

console.log("find max of two num");
function findMax(num1, num2){
        let max = num1;
        if(num2 > max){
            console.log(`${num2} is max`);
        }else console.log(`${num1} is max`);
}
findMax(12,1);
findMax(0,-7);


console.log("concate string");
function concatString(str1, str2){
    console.log(str1.concat(str2));
}
concatString('may', 'ur');

console.log('arrow func sum of two num ');

const sumOfNum = (a, b) => {
    console.log(a + b);
}

sumOfNum(1,1);
console.log(typeof sumOfNum);

console.log("higher orde function");

