//Lab 1 Task 3
/*jshint esversion: 6 */
str = prompt("Введите текст для 3 задания");
function range(start, stop) { //Массив заданного диапазона единиц кода UTF-16.
    let result1 = [];
    for (let index = start.charCodeAt(0),end = stop.charCodeAt(0); index <= end; index++){
      result1.push(String.fromCharCode(index));
    }
    return result1.join('');
  }
  function Rnd(){
    return Math.floor(Math.random()*(150 - 50) + 50);//Math.random()*(max - min) + min)
  }
  function formir(len, max){//формирование CryptR
    let arr = [];//кол-во элементов массива CryptR зависит от max
    for(let i = 0; i < max; i++){
      let arr1 = []; let k = 0;
      for(let j = 0; k < len; j++){
        rnd = Rnd();//строка без повт. символов
        if(arr1.includes(rnd)){
          rnd = Rnd();
        } else {
          arr1.push(rnd);
          k++;
        }
     }
    arr[i] = arr1;
   }
   return arr;
  }
  function maxNum(str){//max повторяющихся символов
    let kmax = 0;
    for (let i = 0; i < str.length; i++){
      let s1 = str[i];
      let k2 = 0;
      for (let j = 0; j < str.length; j++){
        let s2 = str[j];
        if(s1 === s2){
          k2++;
          if(kmax <= k2){
              kmax = k2;
            }
        }
      }
    }
   return kmax;
  }
    function perestsimvENC(str, mass1, mass2){//шифрование
        let result = [];
        for (let i = 0; i < str.length; i++){
          let s1 = str[i]; let povtsim = 0;
          for (let j = 0; j < i; j++){
            let s2 = str[j];
            if(s1 === s2){povtsim++;}
          }
            let index = mass1.indexOf(str.charAt(i));
            let mass22 = mass2[povtsim];//передаем строку CryptRand в соотв. с повт. символа
            result.push(mass22[index]);
        }
        return result.join('-');
      }
      function perestsimvDEC(str, mass1, mass2, mass3){//дешифрование
          let result = [];
          for (let i = 0; i < str.length; i++){
            let s1 = str[i]; let povtsim = 0;
            for (let j = 0; j < i; j++){
              let s2 = str[j];
              if(s1 === s2){povtsim++;}
            }
              let mass33 = mass3[povtsim];//передаем строку CryptRand в соотв. с повт. символа
              let index;
              for(let j = 0; j < mass33.length; j++){
                if(mass33[j] == mass1[i]){index = j;}
              }
              result.push(mass2[index]);
          }
          return result.join('');
        }
  let crypt = '';
  let cryptRand = [];
//   let str ='ABCDABCDEFGDBCADZ';
  let max = maxNum(str);
  let encrypt = ''; let decrypt = '';
  console.log('Открытый текст :', str);
  console.log('Максимальное повторение символов:', max);
  crypt+= range('A','Z');
  console.log('Crypt  :', crypt);
  cryptRand  = formir(crypt.length, max);
  console.log('CryptRand:');
  console.log('__________________________________________________________');
  for (let i = 0; i < cryptRand.length; i++) {console.log(`Строка № ${i}`,'|', cryptRand[i].join('-'),'|');}
  console.log('__________________________________________________________');
  encrypt = perestsimvENC(str, crypt, cryptRand);//шифрование
  decrypt = perestsimvDEC(str, encrypt.split('-'), crypt, cryptRand);//дешифрование
  //вывод результата
  console.log('Открытый текст     :', str);
  console.log('Зашифрованный текст:', encrypt);
  console.log('Дешифрованный текст:', decrypt);
    
      