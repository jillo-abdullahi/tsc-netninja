import { Invoice } from "./classes/Invoice.js";
import { Payment } from "./classes/Payment.js";
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
console.log(invOne.format(), "=======", invTwo.format());
// Using strict types with this class
let invoices = [];
invoices.push(invOne);
invoices.push(invTwo);
console.log("these are new invoices", invoices);
//modify some class object attributes since everything is public at the moment
// invOne.client = "Harry Potter";
invTwo.amount = 599;
console.log(invOne, invTwo);
// accessing object attributes
invoices.forEach(inv => {
    console.log("Client", inv.client);
    // console.log("Detail",inv.detail)
    console.log("Amount", inv.amount);
    console.log("format", inv.format());
});
const me = {
    name: "Shaun",
    age: 39,
    speak(text) {
        console.log(text);
    },
    spend(num) {
        return num;
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
let someone;
const greetPerson = (person) => {
    console.log("Hello", person.name);
};
greetPerson(me);
// interfaces with classes continued.
let docOne;
let docTwo;
docOne = new Invoice("Yoshi", "web work", 599);
docTwo = new Payment("Mario", "plumbing work", 600);
// array of interfaces
let docs = [];
docs.push(docOne);
docs.push(docTwo);
console.log(docs);
const form = document.querySelector(".new-item-form");
// console.log(form?.children)
// grab all input fields
const type = document.querySelector("#type");
const toFrom = document.querySelector("#tofrom");
const details = document.querySelector("#details");
const amount = document.querySelector("#amount");
//add event listeners
// list template instance
const ul = document.querySelector('ul');
const list = new ListTemplate(ul);
form.addEventListener('submit', (e) => {
    e.preventDefault();
    let doc;
    if (type.value === 'invoice') {
        doc = new Invoice(toFrom.value, details.value, amount.valueAsNumber);
    }
    else {
        doc = new Payment(toFrom.value, details.value, amount.valueAsNumber);
    }
    list.render(doc, type.value, 'start');
});
//GENERICS
const addUID = (obj) => {
    let uid = Math.floor(Math.random() * 100);
    return Object.assign(Object.assign({}, obj), { uid });
};
let addOne = addUID({ name: "Yoshi", age: 40 });
console.log(addOne.age);
// let addTwo = addUID("name")
//ENUMS
var ResourceTypes;
(function (ResourceTypes) {
    ResourceTypes[ResourceTypes["BOOK"] = 0] = "BOOK";
    ResourceTypes[ResourceTypes["AUTHOR"] = 1] = "AUTHOR";
    ResourceTypes[ResourceTypes["FILM"] = 2] = "FILM";
    ResourceTypes[ResourceTypes["DIRECTOR"] = 3] = "DIRECTOR";
    ResourceTypes[ResourceTypes["PERSON"] = 4] = "PERSON";
})(ResourceTypes || (ResourceTypes = {}));
const docThree = {
    uid: 1,
    resourceName: "person",
    resourceType: ResourceTypes.AUTHOR,
    data: { name: "steve" }
};
const docFour = {
    uid: 2,
    resourceName: "Someone",
    resourceType: ResourceTypes.DIRECTOR,
    data: ["bread", "toiletroll"]
};
console.log(docThree, docFour);
