const input = require('./system/input');
const finish = require('./system/finish');

// n учнів ділять k яблук порівну, остача - залишається в корзині.
// Скільки яблук дістанеться кожному учню? Скільки яблук залишається в корзині?

async function main() {
	const students = await input('Введіть кількість учнів:');
	const apples = await input('Введіть кількість яблук:');
	let remainder;
	let result;

	remainder = apples % students;
	result = apples / students;

	console.log('Дано: \n'
		+ 'Кількість студентів: ' + students + '\n'
		+ 'Кількість яблук: ' + apples + '\n'
		+ 'Залишиться в корзині: ' +  remainder + '\n'
		+ 'У кожного учня буде по: ' + Math.floor(result) + ' яблук');

	finish();
}

main();

// •Дано натуральне число. Вывести його останню цифру

 async function main() {
	let num = await input('Введіть натуральне число');
	num = num %  10;
	console.log(num);

	finish();
}

 main();

// •Дано додатнє п’ятизначне число. Вивести число навпаки

async function main() {
	let  num  = await input('Введіть число');
	let res = 0;

	while (num > 0) {
		let buffer = num % 10;
		num = Math.floor(num / 10);
		res *= 10;
		res = res + buffer;
	}

	console.log(res);

	finish();
}

main();

//  •Дано натуральне число n. Вывести наступне після нього ПАРНЕ число

async function main()  {
	let num = await input('Введіть число');
	if (num % 2 === 0) {
		num = +num + 2;
		console.log(num);
	} else {
		num = +num + 1;
		console.log(num);
	}

	finish();
}

main();

// Фірма для співробітників орендує двомісні офіси в бізнес-центрі. Відома кількість
// співробітників у кожному з трьох підрозділів. Вивести найменшу кількість кабінетів, яку потрібно орендувати для них.

async function main() {
	let subdivisionOne = await input('Введіть число працівників першого підрозділу: ');
	let subdivisionTwo = await input('Введіть число працівників другого підрозділу: ');
	let subdivisionThree = await input('Введіть число працівників третього підрозділу: ');

	console.log('Число працівників першого підрозділу: ' + subdivisionOne, '\n' +
							'Число працівників другого підрозділу: ' + subdivisionTwo, '\n' +
							'число працівників третього підрозділу: ' + subdivisionThree, '\n');

	let sum = +subdivisionOne + +subdivisionTwo + +subdivisionThree;

	console.log('Сума працівників всіх підрозділів: ' +  sum);

	sum = Math.round(sum / 2);

	console.log('Мінімальна кількість офісів для всіх працівників: ' + sum);

	finish();
}

main();