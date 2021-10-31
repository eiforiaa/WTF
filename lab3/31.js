//Lab 3
/*jshint esversion: 6 */

const crypto = require('crypto');
const algorithm = 'des-ecb'; // Задаем алгоритм
const key = Buffer.from("e0e276d0143890d3", "hex");

const cipher = crypto.createCipheriv(algorithm, key, null);
let encrypted = cipher.update("ГруничеваМалинЯковлева", 'utf8', 'hex');
encrypted += cipher.final('hex');

const decipher = crypto.createDecipheriv(algorithm, key, null);
let decrypted = decipher.update(encrypted, 'hex', 'utf8');
decrypted += decipher.final('utf8');



console.log("------------------------------------------------");
console.log("Алгоритм: DES ");
console.log("------------------------------------------------");
console.log("Секретный ключ: ", key);
console.log("Зашифрованное сообщение - ", encrypted);
console.log("Расшифрованное сообщение - ", decrypted);
console.log("------------------------------------------------");
