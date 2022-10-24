const input = require('./system/input');
const finish = require('./system/finish');

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


