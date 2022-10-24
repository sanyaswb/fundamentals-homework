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

