import { Invoice } from "./classes/invoice.js";

// working with dom elements
let anchor = document.querySelector('a');

if (anchor) {
    console.log(anchor.href);
}

// looks like the two form definitions below do the same thing.
// const form = document.querySelector('form');
// console.log(form?.children)

const form = document.querySelector(".new-item-form") as HTMLFormElement;
// console.log(form?.children)

// grab all input fields
const type = document.querySelector("#type") as HTMLSelectElement;
const toFrom = document.querySelector("#tofrom") as HTMLInputElement;
const input = document.querySelector("#details") as HTMLInputElement;
const amount = document.querySelector("#amount") as HTMLInputElement;

//add event listeners
form.addEventListener('submit', (e: Event) => {
    e.preventDefault();

    console.log(
        type.value,
        toFrom.value,
        input.value,
        amount.valueAsNumber
    )
})

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
    console.log("Client",inv.client)
    // console.log("Detail",inv.detail)
    console.log("Amount", inv.amount)
    console.log("format", inv.format());
})


