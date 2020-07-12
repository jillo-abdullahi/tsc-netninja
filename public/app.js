"use strict";
// working with dom elements
var anchor = document.querySelector('a');
if (anchor) {
    console.log(anchor.href);
}
// looks like the two form definitions below do the same thing.
// const form = document.querySelector('form');
// console.log(form?.children)
var form = document.querySelector(".new-item-form");
// console.log(form?.children)
// grab all input fields
var type = document.querySelector("#type");
var toFrom = document.querySelector("#tofrom");
var input = document.querySelector("#details");
var amount = document.querySelector("#amount");
//add event listeners
form.addEventListener('submit', function (e) {
    e.preventDefault();
    console.log(type.value, toFrom.value, input.value, amount.valueAsNumber);
});
// working with classes
var Invoice = /** @class */ (function () {
    function Invoice(client, detail, amount) {
        this.client = client;
        this.detail = detail;
        this.amount = amount;
    }
    Invoice.prototype.format = function () {
        return this.client + " owes $" + this.amount + " for " + this.detail;
    };
    return Invoice;
}());
var invOne = new Invoice("Marion", "outdoor plumbing", 100);
var invTwo = new Invoice("Luigi", "new racing cart", 799);
console.log(invOne.format(), "=======", invTwo.format());
// Using strict types with this class
var invoices = [];
invoices.push(invOne);
invoices.push(invTwo);
console.log("these are new invoices", invoices);
//modify some class object attributes since everything is public at the moment
invOne.client = "Harry Potter";
invTwo.amount = 599;
console.log(invOne, invTwo);
