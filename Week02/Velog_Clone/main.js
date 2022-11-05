const $$ = (selector) => document.querySelectorAll(selector);
const $ = (selector) => document.querySelector(selector);

const dropDownContent = $('nav .dropdown-content');

let currentBoxName = $('.drop-box p');

function setCurrentBoxName(name) {
    currentBoxName.innerHTML = name;
}

function dropMenu() {
    dropDownContent.classList.toggle('hidden');
}
