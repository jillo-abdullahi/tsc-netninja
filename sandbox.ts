let names = ['luigi', 'mario', 'yoshi', true,7];

names.push(7)
names.push('some')
names[0] = 9


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
let character: string;
let age: number;
let isLoggedIn: boolean;

age = 30;
isLoggedIn = false;


// let ninjas: string[];
// ninjas = ["marion","jillo"]
// console.log(ninjas)

// ninjas.push("JILL");

//union types
let mixed: (string|number|boolean)[] = [];
mixed.push("yellow")
mixed.push(20);
mixed.push(true)

console.log(mixed)

let uid: number|string;
uid = 20;
uid = "yellow"

//objects
let ninjaOne: object = {name: "jill"};
ninjaOne = {
    name: "Jillo",
    age: 23
}

let ninjaTwo: {
    name: string,
    age: number,
    beltColor: string
}

ninjaTwo = {
    name: "Jillo",
    age: 23,
    beltColor: "red"
}

console.log(ninjaTwo)
