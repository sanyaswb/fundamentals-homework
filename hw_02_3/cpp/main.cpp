#include <iostream>
#include <string>
#include <cmath>
#include <vector>

// n учнів ділять k яблук порівну, остача - залишається в корзині.
// Скільки яблук дістанеться кожному учню? Скільки яблук залишається в корзині?

//int main() {
//	int students;
//	int apples;
//
//	std::cin >> students;
//	std::cin >> apples;
//
//	int remainder = apples % students;
//	int result = apples / students;
//
//	std::cout
//			<< "Дано: " << std::endl
//			<< "Учнів: " <<  students << std::endl
//			<< "Яблук: " <<  apples << std::endl
//			<< "Залишок в корзині: " <<  remainder << std::endl
//			<< "Кожному учню дістанеться: " << floor(result);
//
//	return 0;
//}
//
// •Дано натуральне число. Вывести його останню цифру
//
//int main() {
//	long long number;
//	std::cout << "Введіть натуральне число" << std::endl;
//	std::cin >> number;
//	number = number % 10;
//
//	std::cout << number;
//}
//
//Дано додатнє п’ятизначне число. Вивести число навпаки
//
//using namespace std;
//
//int main() {
//
//	long long n;
//	std::cout << "Введіть число: " << std::endl;
//	std::cin >> n;
//
//	long long res = 0;
//
//	while(n > 0) {
//		int lastDigit = n % 10;
//		n = n / 10;
//		res *= 10;
//		res = res + lastDigit;
//	}
//
//	std::cout << res;
//	return 0;
//}
//
//  •Дано натуральне число n. Вывести наступне після нього ПАРНЕ число
//
//int main() {
//	int num;
//	std::cout << "Введіть число: " << std::endl;
//	std::cin >> num;
//	if (num % 2 == 0) {
//		num = num + 2;
//		std::cout << num << std::endl;
//	} else {
//		num = num + 1;
//		std::cout << num << std::endl;
//	}
//
//	return 0;
//}

// Фірма для співробітників орендує двомісні офіси в бізнес-центрі. Відома кількість
// співробітників у кожному з трьох підрозділів. Вивести найменшу кількість кабінетів, яку потрібно орендувати для них.

int main() {
	int subdivisionOne, subdivisionTwo, subdivisionThree;

	std::cout << "Введіть кількість працівників першого підрозділу: ";
	std::cin >> subdivisionOne;
	std::cout << "Введіть кількість працівників другого підрозділу: ";
	std::cin >> subdivisionTwo;
	std::cout << "Введіть кількість працівників третього підрозділу: ";
	std::cin >> subdivisionThree;

	double sum = subdivisionOne + subdivisionTwo + subdivisionThree;

	std::cout << "Загальна кількість працівників всіх підрозділів: " << sum << std::endl;

	sum = ceil(sum / 2);

	std::cout << "Мінімальна кількість кабінетів для всіх співробітників: " << sum;

	return 0;
}












//<iostream>– библиотека, в которой содержатся потоки ввода и вывода cin и cout.
//<iomanip>– библиотека, в которой содержится модификатор setw. С его помощью можно, например, установить ширину поля для каждой координаты вектора, или элемента матрицы.
//<cmath>– в этой библиотеке содержатся тригонометрические функции, логарифмы, модули и другие функции, предназначенные для выполнения простейших математических операций.
//<cstddef>– библиотека, в которой содержится указатель NULL.
//<cstdlib>– содержит в себе функции, занимающиеся выделением памяти, контроль процесса выполнения программы, преобразования типов и другие.
//<fstream>– содержит в себе потоки ifstream и ofstream, которые организовывают чтение/запись из/в файл(а).
//<cstring>– содержит в себе функции для работы со строками, такие как strlen
// (вычисление длины строки), strcpy (копирование строки), strcat (объединение строк), strcmp (сравнение строк) и некоторые другие.cv
