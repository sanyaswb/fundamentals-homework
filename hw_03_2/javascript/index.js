const input = require('./system/input');
const finish = require('./system/finish');

async function main() {
	// 1. Дано чотиризначне число, перевірити чи є сума його цифр парним числом

	let num = await input('Введіть число:');
	let result = 0;

	for (let i = 0; i < num.length; i++) {
		result += +num[i];
	}

	if (result % 2 == 0) {
		console.log('Сума цифр: ' +  num + ' = ' + result + ' парне число');
	} else {
		console.log('Сума цифр: ' +  num + ' = ' + result + ' непарне число');
	}

	finish();
}
main();

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

// 3. Відомі дві швидкості: одна в кілометрах за годину, інша - в метрах за секунду. Яка з швидкостей більше?

async function main() {
	let firstSpeed = await input('Введіть швидкість в км за годину: ');
	let lastSpeed = await input('Введіть швидкість в метрах за секунду: ');
	let transferredFirstSpeed = Math.floor(((+firstSpeed * 1000) / 60) / 60);
	let transferredLastSpeed = Math.floor(((lastSpeed * 60) * 60) / 1000);
	if (transferredFirstSpeed > +lastSpeed) {
		console.log('Швидкість в км/год більша!');

	} else if (+lastSpeed === transferredFirstSpeed) {
		console.log('Швидкість однакова!');

	} else {
		console.log('Швидкість в м/сек більша!');
	}

	console.log('Якщо рухатись зі швидкістю: ' + firstSpeed + ' км/год' + '\n' +
							'То транспорт подолає: ' + transferredFirstSpeed + ' м/сек');
	console.log('В той час коли інший транспорт подолає ' + lastSpeed + ' м/сек що рівнозначно: ' + transferredLastSpeed + ' км/год');

	finish();
}

main();

// 4. Напишіть програму, яка запитує два цілих числа. Якщо добуток чисел перевищує їх суму, надрукувати добуток чисел, у протилежному випадку - вивести їх суму.

async function main() {
	let numOne = await input('Введіть перше число: ');
	let numTwo = await input('Введіть друге число: ');
	let multiply = +numOne * +numTwo;
	let add = +numOne + +numTwo;
	if (multiply > add) {
		console.log(numOne + ' * ' + numTwo + ' = ' + multiply + ' добуток більший ніж сума ' + numOne + ' + ' + numTwo + ' = ' + add);
	} else {
		console.log(numOne + ' + ' + numTwo + ' = ' + add + ' сума більша ніж добуток ' + numOne + ' * ' + numTwo + ' = ' + multiply);
	}
	finish();
}

main();