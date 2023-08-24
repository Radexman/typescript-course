"use strict";
const echo = (arg) => arg;
const isObj = (arg) => {
    return typeof arg === 'object' && !Array.isArray(arg) && arg !== null;
};
console.log(isObj(true));
console.log(isObj('John'));
console.log(isObj([1, 2, 3]));
console.log(isObj({ name: 'John' }));
console.log(isObj(null));
const processUser = (user) => {
    return user;
};
console.log(processUser({ id: 1, name: 'Dave' }));
// console.log(processUser({ name: 'Dave' }));
const getUsersProperty = (users, key) => {
    return users.map((user) => user.[key]);
};
//# sourceMappingURL=index.js.map