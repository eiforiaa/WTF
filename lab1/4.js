//Lab 1 Task 4
/*jshint esversion: 6 */
let str = prompt("Введите сообщение для 4 задания");
function range(start, stop) { //Массив заданного диапазона единиц кода UTF-16.
    let result1 = [];
    for (let index = start.charCodeAt(0),end = stop.charCodeAt(0); index <= end; index++){
      result1.push(String.fromCharCode(index));
    }
    return result1.join(' ');
  }
  function rangeInd(start, stop) { //Массив индексов заданного диапазона единиц кода UTF-16.
    let result2 = []; let k = 0; let buff = stop.charCodeAt(0);
    for (let index = start.charCodeAt(0),end = stop.charCodeAt(0); index <= end; index++){
      let index2 = [];
      index2.push(index,buff);
      result2[k++] = index2;
      buff = index;
    }
    return result2;
  }
  function shuffle(arr){ //Random.
      let j, temp;
      for(let i = arr.length - 1; i > 0; i--){
          j = Math.floor(Math.random()*(i + 1));
          temp = arr[j];
          arr[j] = arr[i];
          arr[i] = temp;
      }
      return arr;
  }
  function AIndToChar(arr){ //массив перемешанных индексов в символы
    let result = [];
    for(let i = 0; i < arr.length; i++){
      let arr1 = arr[i];
      result[i] = String.fromCharCode(arr1[0]) + String.fromCharCode(arr1[1]);
    }
    return result;
  }
  function perestsimvENC(str, str2, mass2){
    let result = [];
    for (let i = 0; i < str.length; i++){//шифрование
      let index = str2.indexOf(str.charAt(i));
      result.push(mass2[index]);
    }
    return result;
}
function perestsimvDEC(mass1, mass2, str1){
  let result = [];
  for (let i = 0; i < mass1.length; i++){//дешифрование
    let index = mass2.indexOf(mass1[i]);
    result.push(str1.charAt(index));
  }
  return result;
}
let crypt = ''; let cryptInd = []; let cryptRand = '';
let encryptMas = []; let decryptMas = [];
str = str.toUpperCase();
let str1 = (str.match(/.{1,1}/g)).join(' ');
crypt += range('A','Z');
console.log('Crypt  :', crypt);
crypt = crypt.replace(/\s+/g, '');
cryptInd = cryptInd.concat(rangeInd('A','Z'));
shuffle(cryptInd);
cryptRand = AIndToChar(cryptInd);
console.log('CryptR :', cryptRand.join(' '));
encryptMas = perestsimvENC(str, crypt, cryptRand);//шифрование
decryptMas = perestsimvDEC(encryptMas, cryptRand, crypt);//дешифрование
//вывод результата
console.log('__________________________________________________________');
console.log('Открытый текст     :', str1);
console.log('Зашифрованный текст:', encryptMas.join(' '));
console.log('Дешифрованный текст:', decryptMas.join(' '));
  