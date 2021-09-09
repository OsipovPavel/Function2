// Факториал числа
// function factorial(x) {
//     if (x === 1) return x;
//     return x * factorial(x-1);
// }

// let userNumber = 5; +prompt('Введите число');
// document.getElementById('app1').innerHTML = `Факториал числа <b>${userNumber}</b> равен <b>${factorial(userNumber)}</b>`;

// Вывод чисел в разных порядках
// функция пряямого порядка
// function lineNumber(firstNumber, lastNumber) {
//     if (firstNumber === lastNumber) return firstNumber;
//     return firstNumber + ', ' + lineNumber(firstNumber+1, lastNumber);
// }
// let startNumber = +prompt('Введите начальное число диапазона');
// let finishNumber = +prompt('Введите конечное число диапазона');
// document.getElementById('app2').innerHTML = `Все числа диапазона <i>${startNumber}</i>, <i>${finishNumber}</i>: <i>${lineNumber(startNumber, finishNumber)}</i>`;

// // функция обратного порядка

// function reverseNumber(lastNumber, firstNumber) {
//     if (lastNumber === firstNumber) return lastNumber;
//     return lastNumber + ', ' + reverseNumber(lastNumber-1, firstNumber);
// }
// document.getElementById('app3').innerHTML = `Все числа диапазона <i>${startNumber}</i>, <i>${finishNumber}</i> в обратном порядке: <i>${reverseNumber(finishNumber, startNumber)}</i>`;

// число задом на перед

// function reversNumber (num, rez=0) {
//     if (num<10) return rez*10+num;
//     return reversNumber(Math.floor(num/10), rez*10+num % 10);
// }
// let bigNumber = +prompt('Введите многозначное число')
// document.getElementById('app4').innerHTML = `число, обратное числу <b>${bigNumber}</b> - это <b>${reversNumber(bigNumber)}</b>`; 

// функция для комментирования суммы цифр числа

// function sumNumber (num) {
//         if (num<10) return num;
//         return sumNumber(Math.floor(num/10)) + num % 10;
//     }
//     let smallNumber = +prompt('Введите многозначное число')
//     document.getElementById('app5').innerHTML = `Сумма цифр числа <b>${smallNumber}</b> - это <b>${sumNumber(smallNumber)}</b>`

// функция колва скобок от заданног числа

// function superNumber (num) {
//     if (num===1) return '()'
//     return '(' + superNumber (num-1) + ')';
// }
// let bracket = prompt('Введите число');
// document.getElementById('app6').innerHTML = `количество скобок <b>${superNumber(bracket)}</b> от введеного вами числа <b>${bracket}</b>`