// Type Assertions

const mainHeading = document.getElementById('main-heading') as HTMLElement;

type One = string;
type Two = string | number;
type Three = 'hello';

// Convert to more or less speific
let a: One = 'hello';
let b = a as Two; // less specific
let c = a as Three; // more sppecific

let d = <One>'world';
let e = <string | number>'world';

const addOrConcat = (a: number, b: number, c: 'add' | 'concat'): number | string => {
	if (c === 'add') return a + b;
	return '' + a + b;
};

const myVal: string = addOrConcat(2, 2, 'concat') as string;

// Be carefull! Typescript sees no problem - but a string is returned
const nexVal: number = addOrConcat(2, 2, 'concat') as number;

10 as unknown as string;

// The DOM
const img = document.querySelector('img') as HTMLImageElement;
const myImg = document.getElementById('img') as HTMLImageElement;
const nextImg = <HTMLImageElement>document.getElementById('img');

img.src;
myImg.src;
nextImg.src;
