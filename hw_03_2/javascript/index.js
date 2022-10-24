const input = require('./system/input');
const finish = require('./system/finish');

// async function main() {
// 	// 1. Дано чотиризначне число, перевірити чи є сума його цифр парним числом
//
// 	let num = await input('Введіть число:');
// 	let result = 0;
//
// 	for (let i = 0; i < num.length; i++) {
// 		result += +num[i];
// 	}
//
// 	if (result % 2 == 0) {
// 		console.log('Сума цифр: ' +  num + ' = ' + result + ' парне число');
// 	} else {
// 		console.log('Сума цифр: ' +  num + ' = ' + result + ' непарне число');
// 	}
//
// 	finish();
// }
// main();

// 2. Чи є квиток щасливим?

async function main() {
	let num = await input('Введіть номер вашого квитка:');
	let halfOfNum = 0;
	let firstHalf = 0;
	let lastHalf = 0;

	if (num.length % 2 === 0) {
		halfOfNum = num.length / 2;
	} else {
		num = num += '0';
		halfOfNum = num.length / 2;
	}

	for (let i = 0; i < halfOfNum; i++) {
		firstHalf += +num[i];
	}

	for (let i = halfOfNum; i < num.length; i++) {
		lastHalf += +num[i];
	}

	console.log('Ваш номер: ' + num);

	if (firstHalf === lastHalf) {
		console.log('Ваш квиток: щасливий!');
	} else {
		console.log('Ваш квиток: нещасливий');
	}

	finish();
}

main();

