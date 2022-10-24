const input = require('./system/input');
const finish = require('./system/finish');

async function main() {
	const year = await input('Введіть рік:');
	if (year % 4 === 0 && year % 100 !== 0 || year % 400 === 0) {
		console.log(' рік високосний');
	} else {
		console.log(' рік невисокосний');
	}

	finish();
}

main();


