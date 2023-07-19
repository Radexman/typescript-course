// Index Signatures

// type TransactionObj = {
// 	Pizza: number;
// 	Books: number;
// 	Job: number;
// };

type TransactionObj = {
	[index: string]: number;
};

const todaysTransactions: TransactionObj = {
	Pizza: -10,
	Books: -5,
	Job: 50,
};

console.log(todaysTransactions.Pizza);
console.log(todaysTransactions['Pizza']);

const prop = 'Pizza';
console.log(todaysTransactions[prop]);

const todaysNet = (transactions: TransactionObj): number => {
	let total = 0;
	for (const transaction in transactions) {
		total += transactions[transaction];
	}
	return total;
};

console.log(todaysNet(todaysTransactions));
