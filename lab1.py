def encryptFunction(text, key):
    rail = [['' for i in range(len(text))]
    j in range(key)]
    dir_down = False
    row, col = 0, 0

        for i in range(len(text)):
            if (row == 0) or (row == key - 1):
                dir_down = not dir_down

            rail[row][col] = text[i]
            col += 1

            if dir_down:
                row += 1
            else:
                row -= 1

        result = []
        for i in range(key):
            for j in range(len(text)):
                if rail[i][j] != '':
                    result.append(rail[i][j])
        return ("".join(result))


    def decryptFunction(cipher, key):
        rail = [['' for i in range(len(cipher))]
                j in range(key)]

        dir_down = False
        row, col = 0, 0

        for i in range(len(cipher)):
            if (row == 0) or (row == key - 1):
                dir_down = not dir_down

            rail[row][col] = '*'
            col += 1

            if dir_down:
                row += 1
            else:
                row -= 1

        index = 0
        for i in range(key):
            for j in range(len(cipher)):
                if ((rail[i][j] == '*') and (index < len(cipher))):
                    rail[i][j] = cipher[index]
                    index += 1

        result = []
        dir_down = False
        row, col = 0, 0
        for i in range(len(cipher)):
            if (row == 0) or (row == key - 1):
                dir_down = not dir_down

            if (rail[row][col] != '*'):
                result.append(rail[row][col])
                col += 1

            if dir_down:
                row += 1
            else:
                row -= 1

        return ("".join(result))


    if __name__ == "__main__":
        print('ЗАШИФРОВКА СООБЩЕНИЯ:')
        print(
            encryptFunction("Криптографические методы и средства обеспечения информационной безопасности инфокоммуникаций",
                            4) + '•')
        print(encryptFunction("crypted text", 2) + '•')
        print(encryptFunction("crypted text", 8) + '•' + '\n')

        print('ДЕШИФРОВКА СООБЩЕНИЙ:')
        print(
            decryptFunction("Кгем дочиаоосфуирорчс еыиес бее нмцнйзпотномнцйитаикетд ртаепняфрин еаниикмиапфиосвсиообс ок",
                            4))
        print(decryptFunction("cytdtxrpe et", 2))
        print(decryptFunction("crypttxeedt ", 8))

    rusAlphabet = 'абвгдеёжзийклмнопрстуфхцчшщъыьэюя '
    cipherAlphabet = '!@#$%^&*()+=,-./|}{[]:;"<>?«»←→≠±•'

    def encryptFunction(text):
        inputText = text.lower()
        result = []
        for i in range(0, len(text)):
            result.append(cipherAlphabet[rusAlphabet.find(inputText[i])])

        return ''.join(result)


    def decryptFunction(text):
        inputText = text.lower()
        result = []
        for i in range(0, len(text)):
            result.append(rusAlphabet[cipherAlphabet.find(inputText[i])])

        return ''.join(result)


    print('ШИФРОВАННОЕ СООБЩЕНИЕ:')
    print(encryptFunction('Криптографические методы и средства обеспечения информационной безопасности инфокоммуникаций'))

    print('ДЕШИФРОВАННОЕ СООБЩЕНИЕ:')
    print(decryptFunction('=})|[/$}!:)<^{=)^•-^[/%»•)•{}^%{[#!•/@^{|^<^.)±•).:/}-!")/../+•@^(/|!{./{[)•).:/=/--].)=!")+'))

    rusAlphabet = 'абвгдеёжзийклмнопрстуфхцчшщъыьэюя '
    eqAlpha = 'аеорсух'

    dictionary = {x: [ord(x)] for x in rusAlphabet}
    dictionary['а'] = [ord('а'), ord('a')]
    dictionary['е'] = [ord('е'), ord('e')]
    dictionary['о'] = [ord('о'), ord('o')]
    dictionary['р'] = [ord('р'), ord('p')]
    dictionary['с'] = [ord('с'), ord('c')]
    dictionary['у'] = [ord('у'), ord('y')]
    dictionary['х'] = [ord('х'), ord('x')]


    def encryptFunction(text):
        inputText = text.lower()
        result = []
        index = ''
        for i in range(0, len(text)):
            if inputText[i] in eqAlpha:
                number = random.random()
                index = dictionary[inputText[i]][1] if number > 0.5 else dictionary[inputText[i]][0]
            else:
                index = dictionary[inputText[i]][0]
            result.append(str(index))
        return ' '.join(result)


    def decryptFunction(text):
        inputText = text.lower().split(' ')
        result = []
        symbol = ''
        for i in range(0, len(inputText)):
            for key, value in dictionary.items():
                if value.count(int(inputText[i])) > 0:
                    symbol = key
                    result.append(symbol)
        return ''.join(result)


    print('ШИФРОВАНИЕ:')
    cipher1 = encryptFunction("тархун")
    cipher2 = encryptFunction("тархун")
    cipher3 = encryptFunction("тархун")
    print(f'шифрование 1: {cipher1}')
    print(f'шифрование 2: {cipher2}')
    print(f'шифрование 3: {cipher3}')

    print('ДЕШИФРОВАНИЕ:')
    print(f'дешифрование 1: {decryptFunction(cipher1)}')
    print(f'дешифрование 2: {decryptFunction(cipher2)}')
    print(f'дешифрование 3: {decryptFunction(cipher3)}')

    from re import findall

    cryptMode = input('\nВведите "1" чтобы зашифровать сообщение, "2" чтобы расшифровать:\n>> ').upper()
    startMessage = list(input("Введите сообщение:\n>> ").upper())
    matrixKey = matrixKey = [
        ['C', 'R', 'Y', 'P', 'T'],
        ['O', 'A', 'B', 'D', 'E'],
        ['F', 'G', 'H', 'I', 'K'],
        ['L', 'M', 'N', 'Q', 'S'],
        ['U', 'V', 'W', 'X', 'Z']
    ];
    addSymbol = 'X'


    def regular(text):
        template = r"[A-Z]{2}"
        return findall(template, text)


    def encryptDecrypt(mode, message, final=""):
        if mode == '1':
            for symbol in message:
                if symbol not in [chr(x) for x in range(65, 91)]:
                    message.remove(symbol)
            for index in range(len(message)):
                if message[index] == 'J': message[index] = 'I'
            for index in range(1, len(message)):
                if message[index] == message[index - 1]:
                    message.insert(index, addSymbol)
            if len(message) % 2 != 0:
                message.append(addSymbol)

        binaryList = regular("".join(message))
        for binary in range(len(binaryList)):
            binaryList[binary] = list(binaryList[binary])
            for indexString in range(len(matrixKey)):
                for indexSymbol in range(len(matrixKey[indexString])):
                    if binaryList[binary][0] == matrixKey[indexString][indexSymbol]:
                        y0, x0 = indexString, indexSymbol
                    if binaryList[binary][1] == matrixKey[indexString][indexSymbol]:
                        y1, x1 = indexString, indexSymbol
            for indexString in range(len(matrixKey)):
                if matrixKey[y0][x0] in matrixKey[indexString] and matrixKey[y1][x1] in matrixKey[indexString]:

                    if mode == '1':
                        x0 = x0 + 1 if x0 != 4 else 0
                        x1 = x1 + 1 if x1 != 4 else 0
                    else:
                        x0 = x0 - 1 if x0 != 0 else 4
                        x1 = x1 - 1 if x1 != 0 else 4

            y0, y1 = y1, y0
            binaryList[binary][0] = matrixKey[y0][x0]
            binaryList[binary][1] = matrixKey[y1][x1]
        for binary in range(len(binaryList)):
            for symbol in binaryList[binary]:
                final += symbol
        return final


    print("Результат обработки:", encryptDecrypt(cryptMode, startMessage), '\n')
    A = 'абвгдеёжзийклмнопрстуфхцчшщъыьэюя' * 2


    def f(text, k, op):
        k *= len(text) // len(k) + 1
        text = text.lower()
        return ''.join([A[A.index(j) + int(k[i]) * op] for i, j in enumerate(text)])


    def encrypt(message, key):
        return f(message, key, 1)


    def decrypt(ciphertext, key):
        return f(ciphertext, key, -1)


    while True:
        print('Введите 1 чтобы зашифровать сообщение, 2 чтобы расшифровать и 3 чтобы выйти')
        menu = input('>>> ')
        if menu == '3':
            break
        elif menu == '1':
            message = input('Введите строку: ')
            key = input('Введите ключ: ')
            print(encrypt(message, key))
        elif (menu == '2'):
            ciphertext = input('Введите строку: ')
            key = input('Введите ключ: ')
            print(decrypt(ciphertext, key))

    alphabet1 = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
    alphabet2 = 'abcdefghijklmnopqrstuvwxyz'
    message = "Pbatenghyngvbaf! Vg'f n Pnrfne pvcure!"
    doCont = True
    key = 0

    while doCont:
        output = ''
        for letter in message:
            if letter in alphabet1:
                t = alphabet1.find(letter)
                new_key = (t - key) % len(alphabet1)
                output += alphabet1[new_key]
            elif letter in alphabet2:
                t = alphabet2.find(letter)
                new_key = (t - key) % len(alphabet2)
                output += alphabet2[new_key]
            else:
                output += letter
        print('Результат: ' + output + ' Ключ:', key)
        doCont_flag = input('Остановить? (y/n)\n>> ')
        doCont = False if doCont_flag == 'y' else True
        key += 1

    print('Результат: ' + output + ' Ключ:', key)

    alphabet1 = 'АБВГДЕЁЖЗИЙКЛМНОПРСТУФХЦЧШЩЪЫЬЭЮЯ'
    alphabet2 = 'абвгдеёжзийклмнопрстуфхцчшщъыьэюя'
    while True:
        print('\n Введите 1 чтобы зашифровать сообщение, 2 чтобы расшифровать и 3 чтобы выйти')
        menu = input('>>> ')
        if menu == '3':
            break
        elif not (menu == '1' or menu == '2'):
            continue
        output = ''
        message = input('Введите строку: ')
        key = 13
        if menu == '2':
            key *= -1
        for letter in message:
            if letter in alphabet1:
                t = alphabet1.find(letter)
                new_key = (t + key) % len(alphabet1)
                output += alphabet1[new_key]
            elif letter in alphabet2:
                t = alphabet2.find(letter)
                new_key = (t + key) % len(alphabet2)
                output += alphabet2[new_key]
            else:
                output += letter
        print('Результат: ' + output)
