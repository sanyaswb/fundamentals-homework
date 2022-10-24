#include <iostream>
#include <string>

int main() {
	int year;
	std::cout << "Введіть рік: ";
	std::cin >> year;

	if (year % 4 == 0 && year % 100 != 0 || year % 400 == 0) {
		std::cout << year << " рік високосний";
	} else {
		std::cout << year << " рік невисокосний";
	}

	return 0;
}
