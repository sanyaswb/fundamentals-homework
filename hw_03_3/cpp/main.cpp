#include <iostream>
#include <string>

int main() {
	std::string login, password;
	std::cout << "Введіть логін: ";
	std::cin >> login;
	std::cout << "Введіть пароль: ";
	std::cin >> password;
	std::string serverLogin = "admin", serverPassword  = "@dm1n";

	if (login == serverLogin && password == serverPassword) {
		std::cout << "Вітаю " << login << "!" << " вхід успішний";
	} else {
		std::cout << "Ви ввели невірний логін або пароль!";
	}

	return 0;
}
