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
