function display(){
    console.log("This will be executed.");

    return "Retunrning from function.";

    console.log("This will not be executed.");
}
let message = display();
console.log(message); // Output: Returning from function.
// The line after return will not be executed, so it won't print anything.
// Output: This will be executed.
