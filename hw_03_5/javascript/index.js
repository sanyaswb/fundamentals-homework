const input = require('./system/input');
const finish = require('./system/finish');

async function main() {
	let message = await input('Enter your message here:');
	let num = 5;

	if (num > 0) {
		message = 'змінено текст ';
		num = num + 5;
		message = message + num;
	}
	console.log(num);
	console.log(message);

	finish();
}

main();


