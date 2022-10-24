const input = require('./system/input');
const finish = require('./system/finish');

async function main() {
	const login = await input('Введіть логін: ');
	const password = await input('Введіть пароль: ');
	const serverLogin = 'abraCadabra';
	const serverPassword = 'as12Ad3r';

	if (login === serverLogin && password === serverPassword) {
		console.log('Бажаю здоров`я ' + login);
	} else {
		console.log('Ви ввели невірний логін або пароль');
	}

	finish();
}

main();


