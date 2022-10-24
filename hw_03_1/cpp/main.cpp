#include <iostream>
#include <string>

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