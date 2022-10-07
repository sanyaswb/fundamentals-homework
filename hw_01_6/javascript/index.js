const input = require('./system/input');
const finish = require('./system/finish');

async function main() {
	const message = await input('Enter your message here:');

	console.log('' + message);

	finish();
}

main();


