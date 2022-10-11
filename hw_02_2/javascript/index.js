const input = require('./system/input');
const finish = require('./system/finish');

async function main() {
	const a = await input();
	const b = await input();
	let c = (Number(+a + +b));
	console.log('add: ' + c);

	c = a - b;
	console.log('subtract: ' + c);

	c = a * b;
	console.log('multiply: ' + c);

	c = a / b;
	console.log('divide: ' + c);

	c = a % b;
	console.log('remainder: ' + c);

	c = Math.floor(a / b);
	console.log('less: ' + c);

	c = Math.ceil(a / b);
	console.log('most of: ' + c);

	c = a / b;
	console.log('nearest integer: ' + +c.toFixed(1));

	finish();
}

main();


