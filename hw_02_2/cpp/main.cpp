#include <iostream>
#include <string>

int main() {
	int a, b;
	std::cin >> a >> b;

	int c = a + b;
	std::cout << "add: ";
	std::cout << c << std::endl;

	c = a - b;
	std::cout << "subtract: ";
	std::cout << c << std::endl;

	c = a * b;
	std::cout << "multiply: ";
	std::cout << c << std::endl;

	c = a / b;
	std::cout << "divide: ";
	std::cout << c << std::endl;

	c = a % b;
	std::cout << "remainder: ";
	std::cout << c << std::endl;

	std::cout << "float: ";
	float d = float(a) / b;
	std::cout << d;

	return 0;
}
