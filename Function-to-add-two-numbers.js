//function with two argumetns
function addNumbers(num1, num2){
    let sum = num1+num2;
    console.log(`Sum: ${sum}`);
}
addNumbers(5,4);
addNumbers(10,15);

function subtractNumbers(num1,num2)
{
    let difference = num1 - num2;
    console.log(`Difference: ${difference}`);
}
subtractNumbers(10,5);
subtractNumbers(20,10);

function Multiplication(num1,num2)
{
    let product = num1*num2;
    console.log(`Product: ${product}`);
}
Multiplication(5,4);
Multiplication(10,15);

function divideNumbers(num1, num2) {
    if (num2 === 0) {
        console.log("Error: Division by zero is not allowed.");
        return;
    }
    let quotient = num1 / num2;
    console.log(`Quotient: ${quotient}`);
}
divideNumbers(10, 2);
divideNumbers(10, 0);
