const rl = require('./system');

const input = (message = '') => {
	if (message) {
		message = '\x1b[33m' + message + ' \x1b[33m';
	}

	return new Promise(res => {
		rl.question(message, (answer) => {
			console.log('\x1b[0m');

			res(answer);
		});
	});
};

module.exports = input;