//Lab 1 Task 6
//npm install readline-sync
//chcp 65001
/*jshint esversion: 6 */
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
    for (let j = 0; j < str.length; j++){//шифрование
      let index = mass1.indexOf(str.charAt(j));
      if(mass1.indexOf(str.charAt(j)) == -1){
          result.push(str.charAt(j));
        }//добавляем символы
      result.push(cryptzdvig[index]);
    }
    return result.join('');
  }
  const readline = require('readline-sync');
  let str = "Pbatenghyngvbaf! Vg'f n Pnrfne pvcure!";
  str = str.toLowerCase();
  let crypt = range(97, 122);
  let key = readline.question("Введите предполагаемый ключ: ");
  let encrypt = perestsimv(str, crypt, key);
  //вывод результата
  console.log('Открытый текст:', str);
  console.log(`Предполагаемый ключ: ${key}`);
  console.log('Зашифрованный текст:', encrypt);
    

