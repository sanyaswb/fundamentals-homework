#include <iostream>
#include <string>

// 1. Дано чотиризначне число, перевірити чи є сума його цифр парним числом

//int main() {
//  std::string num;
//	std::cout << "Введіть число: ";
//	std::cin >> num;
//	int result = 0;
//
//	for (int i = 0; i < num.length(); i++) {
//		result += ((int)num[i] - 48);
//	}
//
//	if (result % 2 == 0) {
//		std::cout << "Сума чисел " << num << " = " << result << " парна";
//	} else {
//		std::cout << "Сума чисел " << num << " = " << result << " непарна";
//	}
//
//	return 0;
//}

//2. Чи є квиток щасливим?

int main() {
	std::string num;
	std::cout << "Введіть номер вашого квитка: ";
	std::cin >> num;
	int halfOfNum = 0;
	int firstHalf = 0;
	int lastHalf = 0;

	if (num.length() % 2 == 0) {
		halfOfNum = num.length() / 2;
	} else {
		num = num += "0";
		halfOfNum = num.length() / 2;
	}

	for (int i = 0; i < halfOfNum; i++) {
		firstHalf += int(num[i]);
	}

	for (int i = halfOfNum; i < num.length(); i++) {
		lastHalf += int(num[i]);
	}

	std::cout << "Ваш номер: " << num << std::endl;

	if (firstHalf == lastHalf) {
		std::cout << "Ваш квиток: щасливий!";
	} else {
		std::cout << "Ваш квиток: нещасливий!";
	}

	return 0;
}