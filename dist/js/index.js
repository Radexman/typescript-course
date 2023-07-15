"use strict";
// Classes
class Coder {
    constructor(name, music, age, lang = 'Typescript') {
        this.name = name;
        this.music = music;
        this.age = age;
        this.lang = lang;
        this.name = name;
        this.music = music;
        this.age = age;
        this.lang = lang;
    }
    greet() {
        return `Hello, my name is ${this.name} an I'am a ${this.lang} coder.`;
    }
    getAge() {
        return `Hello, I'm ${this.age}.`;
    }
}
const coderOne = new Coder('Radek', 'Metal', 24);
console.log(coderOne.greet());
console.log(coderOne.getAge());
class WebDev extends Coder {
    constructor(computer, name, music, age) {
        super(name, music, age);
        this.computer = computer;
        this.computer = computer;
    }
    getLang() {
        return `I write ${this.lang}`;
    }
}
const coderTwo = new WebDev('HP', 'Dave', 'Rock', 42);
console.log(coderTwo.greet());
class Guitarist {
    constructor(name, instrument) {
        this.name = name;
        this.instrument = instrument;
    }
    play(action) {
        return `${this.name} ${action.toLowerCase()} the ${this.instrument}`;
    }
}
const newGuitarist = new Guitarist('Mick Thompson', 'Electric Guitar');
console.log(newGuitarist.play('Downpicks'));
class Peeps {
    static getCount() {
        return Peeps.count;
    }
    constructor(name) {
        this.name = name;
        this.name = name;
        this.id = ++Peeps.count;
    }
}
Peeps.count = 0;
const John = new Peeps('John');
const Steve = new Peeps('Steve');
const Amy = new Peeps('Amy');
console.log(John.id);
console.log(Amy.id);
console.log(Steve.id);
console.log(Peeps.count);
class Bands {
    constructor() {
        this.dataState = [];
    }
    get data() {
        return this.dataState;
    }
    set data(value) {
        if (Array.isArray(value) && value.every((el) => typeof el === 'string')) {
            this.dataState = value;
            return;
        }
        else {
            throw new Error('Param is not an array of strings');
        }
    }
}
const MyBands = new Bands();
MyBands.data = ['Neil Young', 'Led Zeppelin'];
console.log(MyBands.data);
MyBands.data = [...MyBands.data, 'ZZ Top'];
console.log(MyBands.data);
MyBands.data = ['Van Helen', 5150];
//# sourceMappingURL=index.js.map