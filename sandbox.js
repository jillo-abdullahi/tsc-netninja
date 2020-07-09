var names = ['luigi', 'mario', 'yoshi', true, 7];
names.push(7);
names.push('some');
names[0] = 9;
//objects
var ninja = {
    name: 'mario',
    belt: 'black',
    age: 30
};
ninja.name = "Jillo";
// ninja.skills = ["fighthing", "seeing"]
// ninja = {
//     name: "Jane",
//     belt: "red",
//     age: 43,
//     skills: ["Skiing","bungee"]
// }
// explicit types
var character;
var age;
var isLoggedIn;
age = 30;
isLoggedIn = false;
// let ninjas: string[];
// ninjas = ["marion","jillo"]
// console.log(ninjas)
// ninjas.push("JILL");
//union types
var mixed = [];
mixed.push("yellow");
mixed.push(20);
mixed.push(true);
console.log(mixed);
var uid;
uid = 20;
uid = "yellow";
//objects
var ninjaOne = { name: "jill" };
ninjaOne = {
    name: "Jillo",
    age: 23
};
var ninjaTwo;
ninjaTwo = {
    name: "Jillo",
    age: 23,
    beltColor: "red"
};
console.log(ninjaTwo);
