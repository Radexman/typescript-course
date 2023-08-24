const echo = <T>(arg: T): T => arg;

const isObj = <T>(arg: T): boolean => {
	return typeof arg === 'object' && !Array.isArray(arg) && arg !== null;
};

console.log(isObj(true));
console.log(isObj('John'));
console.log(isObj([1, 2, 3]));
console.log(isObj({ name: 'John' }));
console.log(isObj(null));

// const isTrue = <T>(arg: T): { arg: T; is: boolean } => {
// 	if (Array.isArray(arg) && !arg.length) {
// 		return { arg, is: false };
// 	}
// 	if (isObj(arg) && !Object.keys(arg as keyof T).length) {
// 		return { arg, is: false };
// 	}
// 	return { arg, is: !!arg };
// };

type BoolCheck<T> = {
	value: T;
	is: boolean;
};

// const isTrue = <T>(arg: T): BoolCheck<T> => {
// 	if (Array.isArray(arg) && !arg.length) {
// 		return { value, is: false };
// 	}
// 	if (isObj(arg) && !Object.keys(arg as keyof T).length) {
// 		return { value, is: false };
// 	}
// 	return { value, is: !!arg };
// };

type HasID = {
	id: number;
};

const processUser = <T extends HasID>(user: T): T => {
	return user;
};

console.log(processUser({ id: 1, name: 'Dave' }));
// console.log(processUser({ name: 'Dave' }));

const getUsersProperty = <T extends HasID, K extends keyof T>(users: [], key: K): T[K][] => {
	return users.map((user) => user.[key]);
};
