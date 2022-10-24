print('Введіть текст: ')
st = input()
print('Введіть число: ')
num = int(input())

if num > 0:
    print('Дано:', '\n', str, '\n', num)
    st = 'текст змінено'
    print('в змінній st', st, '\n')
    num = 111
    print('ваша змінна num змінена на: ', num, '\n')
    num = str(num)
    print('Переведено зінну num з типу число в тип строка', '\n')
    stNum = st + " " + num
    print('сума змінних st і num = ', stNum)

