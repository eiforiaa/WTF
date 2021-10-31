//Lab 1 Task 2
/*jshint esversion: 6 */
function range(start, stop) { //Массив заданного диапазона единиц кода UTF-16.
    let result1 = [];
    for (let index = start.charCodeAt(0),end = stop.charCodeAt(0); index <= end; index++){
      result1.push(String.fromCharCode(index));
    }
    return result1.join('');
  }
  function rangeInd(start, stop) { //Массив индексов заданного диапазона единиц кода UTF-16.
    let result2 = []; let k = 0;
    for (let index = start.charCodeAt(0),end = stop.charCodeAt(0); index <= end; index++){
      result2[k++] = index;
    }
    return result2;
  }
  function shuffle(arr){ 
      let j, temp;
      for(let i = arr.length - 1; i > 0; i--){
          j = Math.floor(Math.random()*(i + 1));
          temp = arr[j];
          arr[j] = arr[i];
          arr[i] = temp;
      }
      return arr;
  }
  function perestsimv(str, mass1, mass2){
      let result = [];
      for (let i = 0; i < str.length; i++){//шифрование/дешифрование
        let index = mass1.indexOf(str.charAt(i));
        result.push(mass2.charAt(index));
      }
      return result.join('');
    }
    let Crypto = ''; let cryptoInd = []; let alpRand = '';
let str = prompt("Введите сообщение для 2 задания");
let encrypt = ''; let decrypt = '';
Crypto += range('A','z');
Crypto += range('А','я');
console.log('Crypto  :', Crypto);
cryptoInd = cryptoInd.concat(rangeInd('A','z'));
cryptoInd = cryptoInd.concat(rangeInd('А','я'));
shuffle(cryptoInd);
cryptRand  = String.fromCharCode.apply(null, cryptoInd);
console.log('cryptoR :', cryptRand);
encrypt = perestsimv(str, Crypto, cryptRand);//шифрование
decrypt = perestsimv(encrypt, cryptRand, Crypto);//дешифрование
//вывод результата
console.log('Открытый текст     :', str);
console.log('Зашифрованный текст:', encrypt);
console.log('Дешифрованный текст:', decrypt);

  