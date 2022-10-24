#include <iostream>
#include <string>

int main() {
	std::string str = "Hello, World";
	std::cout << "Введіть текст: ";
	std::cin >> str;
	int num = 0;

	if (str != "цьому") {
		std::cout << str << std::endl;
		str = " три одиниці";
		std::cout << str << std::endl;
		std::cout << "Дано число: " << num << std::endl;
		num = 111;
		std::cout << "Число 0 змінено на: " << num << std::endl;
		std::string strNum = std::to_string(num) + str;
		std::cout << "Число 111 переведено в строку та добалений текст до: " << strNum;
	} else {
		std::cout << "ви ввели секретний код";
	}

	return 0;
}
