//Lab 1 Task 5
/*jshint esversion: 6 */
let str = prompt("Введите сообщение для 5 таска");
function range(start, stop) { // Алфавит
    let result1 = [];
    for (let index = start.charCodeAt(0),end = stop.charCodeAt(0); index <= end; index++){
      result1.push(String.fromCharCode(index));
    }
    return result1.join('');
  }
  function Reverse(mass){ // ПЕРЕСТАНОВКА
    let result = [];
    for (let i = 0; i < row; i++){
      k = mass[i].toString();
      result[i] = k.split('').reverse().join('');//abcABC--->CBAcba
    }
    return (result);
  }
  function fmass(str){ // Массив arr из str (для перестановки)
    let k = 0; let arr = [];
    if(str.length%6 != 0){
      let row = str.length%6;
      for(let i = 0; i < 6 - row; i++){
        str += "1";
      }
    }
    row = str.length/6;
    for (let i = 0; i < row ; i++){ //формирование массива arr из введенной строки str
          arr[i] = str.substring(k, k + 6);
          k += 6;
    }
    return arr;
  }
  function rangeInd(start, stop) { //Массив индексов алфавита
    let result2 = []; let k = 0;
    for (let index = start.charCodeAt(0),end = stop.charCodeAt(0); index <= end; index++){
      result2[k++] = index;
    }
    return result2;
  }
  function shuffle(arr){ //Random (для перемешивания индексом алфавита)
      let j, temp;
      for(let i = arr.length - 1; i > 0; i--){
          j = Math.floor(Math.random()*(i + 1));
          temp = arr[j];
          arr[j] = arr[i];
          arr[i] = temp;
      }
      return arr;
  }
  function perestsimv(str, mass1, mass2){ // МОНОАЛФАВИТНЫЙ ШИФР
      let result = [];
      for (let i = 0; i < str.length; i++){//шифрование/дешифрование Моноалфавитный шифр
        let index = mass1.indexOf(str.charAt(i));
        result.push(mass2.charAt(index));
      }
      return result.join('');
    }
    function maxNum(str){//max повторяющихся символов
      let kmax = 0;
      for (let i = 0; i < str.length; i++){
        let s1 = str[i];let k2 = 0;
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
   function perestsimvENC(str, mass1, mass2){ //ОДНОЗВУЧНЫЙ ПОДСТАНОВОЧНЫЙ ШИФР
       let result = [];
       for (let i = 0; i < str.length; i++){ //шифрование
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
     function perestsimvDEC(str, mass1, mass2, mass3){ //ОДНОЗВУЧНЫЙ ПОДСТАНОВОЧНЫЙ ШИФР
         let result = [];
         for (let i = 0; i < str.length; i++){ //дешифрование
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
//  let str ='AAABBBCCCddeeffzzz'; // исходное сообщение
 let crypt = ''; let cryptInd = []; let cryptRand = '';
 let encrypt1 = ''; let decrypt1 = '';
 let encrypt2 = ''; let decrypt2 = '';
 str = str.toUpperCase();
 let arr = fmass(str);//формирование массива для перестановки
 crypt += range('A','Z'); //алфавит для моноалфавитного шифра
 cryptInd = cryptInd.concat(rangeInd('A','Z')); //алфавит индексов для моноалфавитного шифра
 shuffle(cryptInd); // перемешиваем индексы алфавита
 cryptRand  = String.fromCharCode.apply(null, cryptInd); // рандомный алфавит для моноалфавитного шифра
 let max = maxNum(str); //подсчет повторяющихся символов для днозвучого подстановочного шифра
 cryptRand1  = formir(crypt.length, max); //рандомный алфавит для днозвучого подстановочного шифра
 
 encrypt1 = Reverse(arr); //шифрование перестановкой
 encrypt2 = perestsimv(encrypt1.join(''), crypt, cryptRand);//шифрование моноалфавитный шифр
 encrypt3 = perestsimvENC(encrypt2, crypt, cryptRand1);//шифрование однозвучный подстановочный шифр
 decrypt3 = perestsimvDEC(encrypt2, encrypt3.split('-'), crypt, cryptRand1);//дешифрование однозвучный подстановочный шифр
 decrypt2 = perestsimv(decrypt3, cryptRand, crypt);//дешифрование моноалфавитный шифр
 let decrypt2arr = fmass(decrypt2);//формирование массива для перестановки
 decrypt1 = Reverse(decrypt2arr); //дешифрование перестановкой
 //вывод результата
 console.log('__________________________________________________________');
 console.log('Crypt  :', crypt);
 console.log('CryptR :', cryptRand);
 console.log('CryptRand1:');
 for (let i = 0; i < cryptRand1.length; i++) {console.log(`Строка № ${i}`,'|', cryptRand1[i].join('-'),'|');}
 console.log('__________________________________________________________');
 
 console.log('------------------------------------------------ Открытый текст:', str);
 console.log('1 этап --------------------- Зашифрованный текст (Перестановка):', encrypt1.join(''));
 console.log('2 этап ------ Зашифрованный текст (Простой подстановочный шифр):', encrypt2);
 console.log('3 этап - Зашифрованный текст (Однозвучный подстановочный шифр) :', encrypt3);
 console.log('1 этап - Дешифрованный текст (Однозвучный подстановочный шифр) :', decrypt3);
 console.log('2 этап ------ Дешифрованный текст:(Простой подстановочный шифр):', decrypt2);
 console.log('3 этап --------------------  Дешифрованный текст (Перестановка):', decrypt1.join(''));
  
  