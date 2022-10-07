#include <iostream>
#include <string>
#include <typeinfo>

int main() {
	std::string surname = "Doe";
    std::string name = "John";
    std::string middleName = "John";
    std::string numberPhone = "+380668534640";
    std::string mail = "mail@gmail.com";
    std::string product = "Apple";
    std::string priceApple = "899$";
    int amountApple = 1;

	std::cout << typeid(surname).name() << endl;
	std::cout << typeid(amountApple).name() << endl;

	return 0;
}
