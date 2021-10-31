//Lab 1 Task 1
/*jshint esversion: 6 */
let str = prompt("Введите текст для шифрования");
function Reverse(mass){
    
  let result = [];
  for (let i = 0; i < row; i++){
    k = mass[i].toString();
    result[i] = k.split('').reverse().join(''); //abcABC--->CBAcba
  }
  return (result); //(result.reverse()) abcABC...ВжНЖ22--->ВжНЖ22...abcABC
}
// let str = prompt("Введите значение");
let row = 0;
let k = 0; let arr = [];
let encryptMas = ''; let decryptMas = '';
if(str.length%6 != 0){
  row = str.length%6;
  for(let i = 0; i < 6 - row; i++){
    str += "1";
  }
}
row = str.length/6;
for (let i = 0; i < row ; i++){ //формирование массива arr из введенной строки str
      arr[i] = str.substring(k, k + 6);
      k += 6;
}
encryptMas = Reverse(arr); //шифрование
decryptMas = Reverse(encryptMas); //дешифрование
//вывод результата
console.log('__________________________________________________');
console.log('           | Open:         Encrypt:      Decrypt: |');
console.log('__________________________________________________');
for (let i = 0; i < arr.length; i++) {
console.log("Строка №" + arr[i] + "_____" + encryptMas[i] + "____" + decryptMas[i]);
console.log("__________________________________________________\n");
console.log('Открытый текст:', str);
console.log('Зашифрованный текст:', encryptMas.join(''));
console.log('Дешифрованный текст:', decryptMas.join(''));
}


//Lab 1 Task 2
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
function perestsimv(str, mass1, mass2){
    let result = [];
    for (let i = 0; i < str.length; i++){//шифрование/дешифрование
      let index = mass1.indexOf(str.charAt(i));
      result.push(mass2.charAt(index));
    }
    return result.join('');
  }
