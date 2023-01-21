// Follow along with the examples here
function doNothing() {

}

function sayHello(){
    console.log("Hello!");
}

function sayHelloToGuadalupe() {
    console.log("Hello, Guadalupe!");
}

function sayHelloToLiz(){
    console.log("Hello, Liz!");
}

function doSomething (thing){
    console.log(thing);
}

//Understanding arguments and parameters
function sayHelloTo(firstName){
    console.log(`Hello, ${firstName}`);
}

function say(greeting,firstName){
    console.log(`${greeting},${firstName}!`);
}

function add(num1,num2){
    return num1 + num2;
}

function say(greeting, firstName) {
    console.log("I was called!");
    return `${greeting}, ${firstName}!`;
    
  }

  console.log(say("Howdy", "partner"));

const message = `The sum of your numbers is : ${add(2,4)}`;
console.log(message);

console.log(add(1,2));



say("Goodbye", "Roy");

sayHelloTo("Guadalupe");
sayHelloTo("Jane");
sayHelloTo("R2-D2");
sayHelloTo(1);


sayHello();
sayHelloToGuadalupe();
sayHelloToLiz();
doSomething("anything");
