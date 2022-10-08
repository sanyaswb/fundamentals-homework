const input = require('./system/input');
const finish = require('./system/finish');

async function main() {
	const name = await input('Enter your name');
	console.log('Hello, ' + name);
	const drink = await input('What drink do you what?');
	const count = await input('How many drinks do you want?');
	console.log('choose ' + count + ' of Alex ' + drink);
	finish();
}

main();


