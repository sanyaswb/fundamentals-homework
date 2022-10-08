#include <iostream>
#include <string>

int main() {
	std::cout << "Enter your name";
	std::string name;
	std::cin >> name;
	std::cout << "Hello, " << name << std::endl;
	std::cout << "What drink do you want?" << std::endl;
	std::string drink;
	std::cin >> drink;
	std::cout << "How many drinks do you want?" << std::endl;
	int count;
	std::cin >> count;
	std::cout << name << " choose " << count << " of " << drink;
	return 0;
}
