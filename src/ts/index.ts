const favoriteFruits: string[] = ['apple', 'banana', 'strawberry'];

const addFruit = (fruit: string) => {
	favoriteFruits.push(fruit);
};

addFruit('Cherry');

console.log(favoriteFruits);
