import { Invoice } from "./classes/Invoice.js";
import { Payment } from "./classes/Payment.js";
import { HasFormatter } from "./interfaces/HasFormatter.js"
import { ListTemplate } from "./classes/ListTemplate.js";

// working with dom elements
let anchor = document.querySelector('a');

if (anchor) {
    console.log(anchor.href);
}

// looks like the two form definitions below do the same thing.
// const form = document.querySelector('form');
// console.log(form?.children)

const invOne = new Invoice("Marion", "outdoor plumbing", 100);
const invTwo = new Invoice("Luigi", "new racing cart", 799);

console.log(invOne.format(), "=======", invTwo.format())

// Using strict types with this class
let invoices: Invoice[] = [];
invoices.push(invOne);
invoices.push(invTwo);


console.log("these are new invoices", invoices)

//modify some class object attributes since everything is public at the moment
// invOne.client = "Harry Potter";
invTwo.amount = 599;

console.log(invOne, invTwo)

// accessing object attributes
invoices.forEach(inv => {
    console.log("Client", inv.client)
    // console.log("Detail",inv.detail)
    console.log("Amount", inv.amount)
    console.log("format", inv.format());
})

// interfaces

//Defining an interface.
interface IsPerson {
    name: string;
    age: number;
    speak(a: string): void;
    spend(b: number): number;
}

const me: IsPerson = {
    name: "Shaun",
    age: 39,
    speak(text: string): void {
        console.log(text)
    },
    spend(num: number): number {
        return num
    }
};
// me.name = "Shaun";
// me.age = 29;
// me.speak = (text: string) => {
//     console.log(text)
// }
// me.spend = (num: number) => {
//     return num;
// }


console.log("this is me", me);

let someone: IsPerson;
const greetPerson = (person: IsPerson) => {
    console.log("Hello", person.name);
}

greetPerson(me)


// interfaces with classes continued.
let docOne: HasFormatter;
let docTwo: HasFormatter;

docOne = new Invoice("Yoshi", "web work", 599);
docTwo = new Payment("Mario", "plumbing work", 600);

// array of interfaces
let docs: HasFormatter[] = [];
docs.push(docOne);
docs.push(docTwo);

console.log(docs);


const form = document.querySelector(".new-item-form") as HTMLFormElement;
// console.log(form?.children)

// grab all input fields
const type = document.querySelector("#type") as HTMLSelectElement;
const toFrom = document.querySelector("#tofrom") as HTMLInputElement;
const details = document.querySelector("#details") as HTMLInputElement;
const amount = document.querySelector("#amount") as HTMLInputElement;

//add event listeners
// list template instance
const ul = document.querySelector('ul')!;
const list = new ListTemplate(ul);

form.addEventListener('submit', (e: Event) => {
    e.preventDefault();

    let values: [string, string, number]
    values = [toFrom.value, details.value, amount.valueAsNumber]

    let doc: HasFormatter;
    if (type.value === 'invoice') {
        doc = new Invoice(...values)
    } else {
        doc = new Payment(...values)
    }

    list.render(doc, type.value, 'start')
});

//GENERICS
const addUID = <T extends { name: string }>(obj: T) => {
    let uid = Math.floor(Math.random() * 100);
    return { ...obj, uid }
}

let addOne = addUID({ name: "Yoshi", age: 40 });
console.log(addOne.age);
// let addTwo = addUID("name")

//ENUMS
enum ResourceTypes { BOOK, AUTHOR, FILM, DIRECTOR, PERSON }

//GENERICS with interfaces
interface Resource<T> {
    uid: number;
    resourceName: string;
    resourceType: ResourceTypes;
    data: T;
}

const docThree: Resource<object> = {
    uid: 1,
    resourceName: "person",
    resourceType: ResourceTypes.AUTHOR,
    data: { name: "steve" }
}

const docFour: Resource<string[]> = {
    uid: 2,
    resourceName: "Someone",
    resourceType: ResourceTypes.DIRECTOR,
    data: ["bread", "toiletroll"]

}

console.log(docThree, docFour)

// TUPLES

//arrays are flexible
let arr = ['ryu',333, true];
arr[0] = false;
arr[1] = "Yoshi";
arr = [30, false, "Yoshi"]

// in a tuple, types are fixed.
let tup:  [string, number, boolean] = ['ryu',333, true];
tup[0] = "false"

let student: [string, number];
student = ["Chun-li", 234234]


















