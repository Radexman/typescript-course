// Classes

class Coder {
	secndLang!: string;

	constructor(
		public readonly name: string,
		public music: string,
		private age: number,
		protected lang: string = 'Typescript'
	) {
		this.name = name;
		this.music = music;
		this.age = age;
		this.lang = lang;
	}

	greet() {
		return `Hello, my name is ${this.name} an I'am a ${this.lang} coder.`;
	}

	public getAge() {
		return `Hello, I'm ${this.age}.`;
	}
}

const coderOne = new Coder('Radek', 'Metal', 24);
console.log(coderOne.greet());
console.log(coderOne.getAge());

class WebDev extends Coder {
	constructor(
		public computer: string,
		name: string,
		music: string,
		age: number
	) {
		super(name, music, age);
		this.computer = computer;
	}

	public getLang() {
		return `I write ${this.lang}`;
	}
}

const coderTwo = new WebDev('HP', 'Dave', 'Rock', 42);
console.log(coderTwo.greet());

type Musician = {
	name: string;
	instrument: string;
	play(action: string): string;
};

class Guitarist implements Musician {
	name: string;
	instrument: string;

	constructor(name: string, instrument: string) {
		this.name = name;
		this.instrument = instrument;
	}

	play(action: string) {
		return `${this.name} ${action.toLowerCase()} the ${this.instrument}`;
	}
}

const newGuitarist = new Guitarist('Mick Thompson', 'Electric Guitar');
console.log(newGuitarist.play('Downpicks'));

class Peeps {
	static count = 0;

	static getCount(): number {
		return Peeps.count;
	}

	public id: number;

	constructor(public name: string) {
		this.name = name;
		this.id = ++Peeps.count;
	}
}

const John = new Peeps('John');
const Steve = new Peeps('Steve');
const Amy = new Peeps('Amy');

console.log(John.id);
console.log(Amy.id);
console.log(Steve.id);
console.log(Peeps.count);

class Bands {
	private dataState: string[];

	constructor() {
		this.dataState = [];
	}

	public get data(): string[] {
		return this.dataState;
	}

	public set data(value: string[]) {
		if (Array.isArray(value) && value.every((el) => typeof el === 'string')) {
			this.dataState = value;
			return;
		} else {
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
