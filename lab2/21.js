//Lab 2 Task 1
/*jshint esversion: 6 */
let str = prompt('Введите сообщение');
let key = prompt('Введите ключ');
function range(start, stop) { //Массив заданного диапазона единиц кода UTF-16.
    let result = [];
    for (let index = start.charCodeAt(0),end = stop.charCodeAt(0); index <= end; index++){
      result.push(String.fromCharCode(index));
    }
    return result.join('');
  }
  function Rnd(max, min){
    return Math.floor(Math.random()*(max - min + min));//Math.random()*(max - min) + min)
  }
  function formir(l, alphabet){
    let result = [];
    for(i = 0; i < l; i++){
      let r = Rnd('Я'.charCodeAt(0), 'А'.charCodeAt(0)) % 25;
      result[i] = alphabet[r];
    }
    return result.join('');
  }
  function perestsimv(str, mass1, mass2){
    let result = [];//шифрование/дешифрование
    for (let i = 0; i < str.length; i++){
        s1 = mass1.indexOf(str[i]).toString(2); //двоичн. из числа
        s2 = mass1.indexOf(mass2[i]).toString(2);
        let s012 = (('0b'+ s1)^('0b'+ s2)).toString(2);//XOR
        let s12 = parseInt(s012, 2); //число из строки
        if (s12 > 31){
          result.push(mass1[s12 - 31]);
          }else{
          result.push(mass1[s12]);
        }
      }
    return result.join('');
  }
  let crypt = range('А','Я');
  let len = str.length;
  str = str.toUpperCase();
  //let key = formir(len, crypt);
  let encrypt = perestsimv(str.split(''), crypt.split(''), key.split(''));
  let decrypt = perestsimv(encrypt.split(''), crypt.split(''), key.split(''));
  
  //вывод результата
  console.log('_______________________________');
  console.log('|','   Открытый текст   |', str,' |',"Длина текста = " + len + ".");
  console.log('|','       Ключ         |', key,' |',"Длина ключа  = " + key.length + ".");
  console.log('|','Зашифрованный текст |', encrypt,' |',"Длина зашифр. текста  = " + encrypt.length + ".");
  console.log('|','Дешифрованный текст |', decrypt,' |',"Длина дешифр. текста  = " + decrypt.length + ".");
  