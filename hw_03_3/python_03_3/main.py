print('Введіть логін: ')
login = input()
print('Введіть пароль: ')
password = input()

serverLogin = 'admin'
serverPassword = '@dm1n'

if login == serverLogin and password == serverPassword:
    print('Вітаю', login)
else:
    print('Логін або пароль введено неправильно')
