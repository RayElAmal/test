//this is a test javascript file

let firstName = "Ray";
let lastName = "ElAmal";

let message = "Hello World, my name is:";

let person = {
    name: "Josh",
    age: 20
};

console.log(message + ' ' + firstName + ' ' + lastName);

console.log(person);

let cup = {
    design: "zigzags",
    weight: 10,
    material: "plastic"
};

// Dot notation --> this is one way to access and read an object
cup.weight = 20; // in this example you migh have added some milk into the cup so now its heavier!

// Bracket notation --> this is another way to access and read an object
cup['weight'] = 10; // drank all the milk

// reading an object with both ways
console.log(cup.weight);
console.log(cup['weight']);