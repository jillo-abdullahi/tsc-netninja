"use strict";
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
// using any type; back to Javascript
var wizards = 25;
console.log(wizards);
wizards = "hufflepuff";
console.log(wizards);
wizards = { name: "harry", age: 10, skills: ["Quidditch", "patronas"] };
console.log(wizards);
//using any type with arrays
var mix = [];
mix.push("harry");
mix.push(23);
mix.push(true);
console.log("mix", mix);
mix = ["harry", false, 23, null];
console.log("new mix", mix);
//using any type with objects
var witches;
witches = { name: "jillo", age: 34, skills: ["some", "skill"] };
console.log(witches);
witches = { name: 23, age: "harry", skills: true };
console.log("witches are not bad", witches);
// using functions
// let greeting = () => {
//     console.log("hell0, world");
// }
var greeting;
greeting = function () {
    console.log("hello, again");
};
greeting();
var sum = function (a, b, c) {
    if (c === void 0) { c = 8; }
    console.log(a * b);
    console.log(c);
};
sum(5, 10, "20");
// function return types:
var modul = function (a, b) {
    return a % b;
};
var result = modul(400, 55);
console.log(result);
// let findUser = (user: {name: string, uid: number | string})=> {
//     return user
// }
var findUser = function (user) {
    return user;
};
var userResult = findUser({ name: "harry", uid: "82943894" });
console.log(userResult);
