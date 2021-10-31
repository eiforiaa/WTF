//Lab 1 Task 7
/*jshint esversion: 6 */
let str = prompt("Введите сообщение для 7 задания");
function range(start, stop) { //Массив заданного диапазона единиц кода UTF-16.
  let result = [];
  for (let index = start,end = stop; index <= end; index++){
    result.push(String.fromCharCode(index));
  }
  return result.join('');
}
function perestsimv(str, mass1, k){
  let result = [];
  let cryptzdvig = [];
  let k1 = k;
  for(let i = 0; i < mass1.length; i++){//формирование сдвинутого на key позиций массива
    cryptzdvig[i]= mass1.charAt(k1);
    if(k1 >= mass1.length - 1){k1 = k1 - mass1.length;} // выход за пределы алфавита, начинаем с начала
    k1++;
  }
  for (let j = 0; j < str.length; j++){//шифрование/дешифрование
    let index = mass1.indexOf(str.charAt(j));
    if(mass1.indexOf(str.charAt(j)) == -1){
        result.push(str.charAt(j));
    }//добавляем символы
    result.push(cryptzdvig[index]);
}
return result.join('');
}
let crypt = range(97, 122);
let key = 13;
str = str.toLowerCase();
let encrypt = perestsimv(str, crypt, key);
let decrypt = perestsimv(encrypt, crypt, key);
//вывод результата
console.log('Открытый текст:', str);
console.log('Зашифрованный текст:', encrypt);
console.log('Дешифрованный текст:', decrypt);
