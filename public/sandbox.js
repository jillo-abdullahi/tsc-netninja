"use strict";
let names = ['luigi', 'mario', 'yoshi', true, 7];
names.push(7);
names.push('some');
names[0] = 9;
//objects
let ninja = {
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
let character;
let age;
let isLoggedIn;
age = 30;
isLoggedIn = false;
// let ninjas: string[];
// ninjas = ["marion","jillo"]
// console.log(ninjas)
// ninjas.push("JILL");
//union types
let mixed = [];
mixed.push("yellow");
mixed.push(20);
mixed.push(true);
console.log(mixed);
let uid;
uid = 20;
uid = "yellow";
//objects
let ninjaOne = { name: "jill" };
ninjaOne = {
    name: "Jillo",
    age: 23
};
let ninjaTwo;
ninjaTwo = {
    name: "Jillo",
    age: 23,
    beltColor: "red"
};
console.log(ninjaTwo);
// using any type; back to Javascript
let wizards = 25;
console.log(wizards);
wizards = "hufflepuff";
console.log(wizards);
wizards = { name: "harry", age: 10, skills: ["Quidditch", "patronas"] };
console.log(wizards);
//using any type with arrays
let mix = [];
mix.push("harry");
mix.push(23);
mix.push(true);
console.log("mix", mix);
mix = ["harry", false, 23, null];
console.log("new mix", mix);
//using any type with objects
let witches;
witches = { name: "jillo", age: 34, skills: ["some", "skill"] };
console.log(witches);
witches = { name: 23, age: "harry", skills: true };
console.log("witches are not bad", witches);
// using functions
// let greeting = () => {
//     console.log("hell0, world");
// }
let greeting;
greeting = () => {
    console.log("hello, again");
};
greeting();
let sum = (a, b, c = 8) => {
    console.log(a * b);
    console.log(c);
};
sum(5, 10, "20");
// function return types:
let modul = (a, b) => {
    return a % b;
};
let result = modul(400, 55);
console.log(result);
// let findUser = (user: {name: string, uid: number | string})=> {
//     return user
// }
let findUser = (user) => {
    return user;
};
let userResult = findUser({ name: "harry", uid: "82943894" });
console.log(userResult);
// function signatures. Found this a bit redundant at the moment.
