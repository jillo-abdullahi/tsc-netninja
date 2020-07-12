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
