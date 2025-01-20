//Write a function createHelloWorld. It should return a new function that always returns "Hello World".
const createHelloWorld = () => {
    let greeting = "Hello World";
   return function(){
        return greeting;
    }
}