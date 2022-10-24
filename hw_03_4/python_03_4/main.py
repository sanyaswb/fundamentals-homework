print('Введіть рік: ')
year = int(input())

if year % 4 == 0 and year % 100 != 0 or year % 400 == 0:
	print('рік високосний')
else:
	print('рік невисокосний')