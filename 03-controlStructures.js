//day 3 - control structures

//if-else statement
//task 1
function checkNum(number){
        if(number > 0){
            console.log('number is positive');
        }else if(number < 0) {
            console.log('number is negative ');
        }else console.log('number is zero');
}

checkNum(0);
checkNum(1);
checkNum(-88);

//task 2

const checkEligibility = (age) =>{
        if(age >= 18){
            console.log('you are eligibe for vote');
        }else{
            console.log('you are not eligible for vote');
        }
};

checkEligibility(22);
checkEligibility(12);


///activity 3

function checkDay(dayOfNumber){
    let day;
    switch (dayOfNumber) {
        case 0:
            day = "Sunday";
            break;
        case 1:
            day = "Monday";
            break;
        case 2:
            day = "Tuesday";
            break;
        case 3:
            day = "Wednesday";
            break;
        case 4:
            day = "Thursday";
            break;
        case 5:
            day = "Friday";
            break;
        case 6:
            day = "Saturday";
            break;
    
        default:
            day = 'invalid number';
            break;
    }
    return day;
}

console.log(checkDay(5));

//check leap year

function checkYear(year){
    if(year %  4 === 0){
        if(year % 100 === 0){
            if(year % 400 === 0){
                console.log('yes');
            }else console.log("no");
        }else console.log('yes');
        
    }else console.log("no");
}

checkYear(2028);