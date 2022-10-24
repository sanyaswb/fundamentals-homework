
# 1. Дано чотиризначне число, перевірити чи є сума його цифр парним числом

# print('Введіть число:')
# num = (input())
# initialNum = num
# result = 0
#
# for i in range(len(num)):
# 	num = int(num)
# 	r = num % 10
# 	result += r
# 	num = num // 10
#
# if result % 2 == 0:
# 	print('Сума чисел', initialNum, '=', result, 'число: парне')
# else:
# 	print('Сума чисел', initialNum, '=', result, 'число: непарне')

# 2. Чи є квиток щасливим?

num = input('Введіть номер вашого квитка: ')
halfOfNum = 0
firstHalf = 0
lastHalf = 0

if len(num) % 2 == 0:
	halfOfNum = round(len(num) / 2)
else:
	num = num + '0'
	halfOfNum = round(len(num) / 2)

for i in range(halfOfNum):
	firstHalf += int(num[i])

for i in range(halfOfNum, round(len(num))):
	lastHalf += int(num[i])

print('Ваш номер:', num)

if firstHalf == lastHalf:
	print('Ваш квиток: щасливий!')
else:
	print('Ваш квиток: нещасливий')


