const input = require('./system/input');
const finish = require('./system/finish');

async function main() {
	const userData = {
		surname: 'Doe',
		name: 'John',
		middleName: 'John',
		numberPhone: '+380655555555',
		mail: 'mail@gmail.com'
	};

	const product = {
		name: 'Apple',
		price: '899$',
		amount: 1
	};

	console.log(typeof userData);
	console.log(typeof userData.surname);
	console.log(typeof product.amount);

	finish();
}

main();


