"use strict";
// Type Assertions
const mainHeading = document.getElementById('main-heading');
// Convert to more or less speific
let a = 'hello';
let b = a; // less specific
let c = a; // more sppecific
let d = 'world';
let e = 'world';
const addOrConcat = (a, b, c) => {
    if (c === 'add')
        return a + b;
    return '' + a + b;
};
const myVal = addOrConcat(2, 2, 'concat');
// Be carefull! Typescript sees no problem - but a string is returned
const nexVal = addOrConcat(2, 2, 'concat');
10;
// The DOM
const img = document.querySelector('img');
const myImg = document.getElementById('img');
const nextImg = document.getElementById('img');
img.src;
myImg.src;
nextImg.src;
//# sourceMappingURL=index.js.map