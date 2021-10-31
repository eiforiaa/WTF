//Lab 2 Task 3
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
  /*function Rnd(max, min){
    return Math.floor(Math.random()*(max - min + min));//Math.random()*(max - min) + min)
  };
  function formir(l, crypt){
    let result = [];
    for(i = 0; i < l; i++){
      let r = Rnd('Я'.charCodeAt(0), 'А'.charCodeAt(0)) % 25;
      result[i] = crypt[r];
    }
    return result.join('');
  };*/
  function perestsimvXOR(str, mass1, mass2){
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
  function perestsimvENC(str, mass1, mass2){
    let result = [];//шифрование
    for (let i = 0; i < str.length; i++){
        s1 = mass1.indexOf(str[i]);
        s2 = mass1.indexOf(mass2[i]);
        let s12;
        s12 = (s1 + s2) % 26;
        result.push(mass1[s12]);
        }
    return result.join('');
  }
  function perestsimvDEC(str, mass1, mass2){
    let result = [];//дешифрование
    for (let i = 0; i < str.length; i++){
        s1 = mass1.indexOf(str[i]);
        s2 = mass1.indexOf(mass2[i]);
        let s12;
          if ((s1 - s2) < 0){
            s12 = (s1 - s2 + 26) % 26;
            }else{
            s12 = ( s1 - s2 ) % 26;
          }
          result.push(mass1[s12]);
      }
    return result.join('');
  }
  let crypt = range('А','Я');
  let len = str.length;
  str = str.toUpperCase();
  //let key = formir(len, crypt);
  //XOR
  let encrypt1 = perestsimvXOR(str.split(''), crypt.split(''), key.split(''));
  //ОБ
  let encrypt2 = perestsimvENC(encrypt1.split(''), crypt.split(''), key.split(''));
  let decrypt2 = perestsimvDEC(encrypt2.split(''), crypt.split(''), key.split(''));
  //XOR
  let decrypt1 = perestsimvXOR(decrypt2.split(''), crypt.split(''), key.split(''));
  
  
  //вывод результата
  console.log('___________________________________________');
  console.log('|','   Открытый текст   |', str,' |',"Длина текста = " + str.length + ".");
  console.log('|','       Ключ         |', key,' |',"Длина ключа  = " + key.length + ".");
  console.log('XOR:');
  console.log('|','Зашифрованный текст |', encrypt1,' |',"Длина зашифр. текста  = " + encrypt1.length + ".");
  console.log('ОБ:');
  console.log('|','Зашифрованный текст |', encrypt2,' |',"Длина зашифр. текста  = " + encrypt2.length + ".");
  console.log('|','Дешифрованный текст |', decrypt2,' |',"Длина дешифр. текста  = " + decrypt2.length + ".");
  console.log('XOR:');
  console.log('|','Дешифрованный текст |', decrypt1,' |',"Длина дешифр. текста  = " + decrypt1.length + ".");
  
    