n = int(input())
s = n % 10 + (n // 10) % 10 + (n // 100) % 10 + (n // 1000) % 10 + (n // 10000)
print(s)

# n = 12345
# s = 15
# (12345 // 10 = 1234) + (12345 % 10 = 5) = 1239

# % - оставляет последнюю одну цифру из всего введенного числа если % на 10
# 2 цифры если % на 100 и т.д.
# // - убирает последнюю одну цифру из всего введенного числа если // на 10
# 2 цифры если // на 100 и т.д.

# v = 12
# (12 % 10 = 2) + (12 // 10 = 1) = 3
# x = 3


