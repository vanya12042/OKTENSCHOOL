// // --створити масив та вивести його в консоль:
// // - з 5 числових значень
// let arrNum = [14, 21, 13, 34, 55];
// console.log(arrNum);
//
// // - з 5 стічкових значень
// let arrStr = ['Hello', 'Ok10', 'School', 'World', 'OK_ten'];
// console.log(arrStr);
//
//
// // - з 5 значень стрічкового, числового та булевого типу
// let array = ['One', 'Two', 1, true, 51];
// console.log(array);
//
// // -- Створити пустий масив. Наповнити його будь-якими значеннями звертаючись до конкретного індексу. Вивести в консоль
// let arrayInput = [];
// arrayInput[1] = 10;
// arrayInput[3] = 10;
// arrayInput[5] = 10;
// console.log(arrayInput);
//
// // - За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом всередині
// for (let i = 0; i < 10; i++) {
//     document.write(`<div>` + 'TEXT ' + `</div>`);
// }
//
// // - За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом і індексом всередині
// for (let i = 0; i < 10; i++) {
//     document.write(`<div>` + 'TEXT ' + (i + 1) + `</div>`);
// }
//
// // - За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом всередині.
// for (let i = 0; i < 10; i++) {
//     document.write(`<h1>` + 'TEXT ' + (i + 1) + `</h1>`);
// }
//
// // - За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом і індексом всередині.
// for (let i = 0; i < 10; i++) {
//     document.write(`<div>` + 'TEXT ' + (i + 1) + `</div>`);
// }
//
// // - Створити масив з 10 числових елементів. Вивести в консоль всі його елементи в циклі.
// let arrayTenElement = [1, 2, 3, 4, 5, 65, 63, 45, 55, 65];
// for (let item of arrayTenElement) {
//     console.log(item);
// }
//
// // - Створити масив з 10 строкрових елементів. Вивести в консоль всі його елементи в циклі.
// let arrayTenStr = ['hello','what?','name','father','mother','Ok10', 'Homework', 'classwork', 'title', 'description'];
// for (let item of arrayTenStr) {
//     console.log(item);
// }
//
// // - Створити масив з 10 елементів будь-якого типу. Вивести в консоль всі його елементи в циклі.
// let arrayTenAll = [true, 0,'name',4442,'mother',false, 'Homework', 12.44, 'title', 4151];
// for (let item of arrayTenAll) {
//     console.log(item);
// }
//
// // - Створити масив з 10 елементів числового, стірчкового і булевого типу. За допомогою if та typeof вивести тільки булеві елементи
// let arrayTenTypeOf = [true, 0,'name',4442,'mother',false, 'Homework', 12.44, 'title', 4151];
// for (let item of arrayTenTypeOf) {
//     if(typeof item == "boolean")
//     console.log(item);
// }
// //
// // - Створити масив з 10 елементів числового, стірчкового і булевого типу. За допомогою if та typeof вивести тільки числові елементи
// let arrayTenTypeOf = [true, 0,'name',4442,'mother',false, 'Homework', 12.44, 'title', 4151];
// for (let item of arrayTenTypeOf) {
//     if(typeof item == "number")
//     console.log(item);
// }

// // - Створити масив з 10 елементів числового, стрічкового і булевого типу. За допомогою if та typeof вивести тільки рядкові елементи
// let arrayTenTypeOf = [true, 0,'name',4442,'mother',false, 'Homework', 12.44, 'title', 4151];
// for (let item of arrayTenTypeOf) {
//     if(typeof item == "string")
//         console.log(item);
// }

// // - Створити порожній масив. Наповнити його 10 елементами (різними за типами) через звернення до конкретних індексів. Вивести в консоль всі його елементи в циклі.
// let arrayElement10 = [];
// arrayElement10[0] = 'Hello';
// arrayElement10[1] = 1;
// arrayElement10[2] = 41;
// arrayElement10[3] = true;
// arrayElement10[4] = false;
// arrayElement10[5] = 'Good';
// arrayElement10[6] = 'Int';
// arrayElement10[7] = 'Hello';
// arrayElement10[8] = 'First';
// arrayElement10[9] = 'Name';
// for (let item of arrayElement10){
//     console.log(item);
// }

// // - Створити цикл for на 10  ітерацій з кроком 1. Вивести поточний номер кроку через console.log та document.write
// for (let i = 0; i < 10; i++){
//     console.log('Step: ' + i);
//     document.write(`<h5>`+ 'Step: ' + i +`</h5>`);
// }

// // - Створити цикл for на 100 ітерацій з кроком 1. Вивести поточний номер кроку через console.log та document.write
// for (let i = 0; i < 100; i++){
//     console.log('Step: ' + i);
//     document.write(`<h5>`+ 'Step: ' + i +`</h5>`);
// }

// // - Створити цикл for на 100 ітерацій з кроком 2. Вивести поточний номер кроку через console.log та document.write
// for (let i = 0; i < 100; i = i + 2){
//     console.log('Step: ' + i);
//     document.write(`<h5>`+ 'Step: ' + i +`</h5>`);
// }

// // - Створити цикл for на 100 ітерацій. Вивести тільки парні кроки. через console.log + document.write
// for (let i = 0; i < 100; i++){
//     if (i % 2 === 0) {
//     console.log('Step: ' + i);
//     document.write(`<h5>`+ 'Step: ' + i +`</h5>`);
//     }
// }

// // - Створити цикл for на 100 ітерацій. Вивести тільки непарні кроки. через console.log + document.write
// for (let i = 0; i < 100; i++){
//     if (i % 2 === 1) {
//     console.log('Step: ' + i);
//     document.write(`<h5>`+ 'Step: ' + i +`</h5>`);
//     }
// }

// // - Відтворити роботу годинника, відрахувавши 2 хвилини (2 цикли! 1й - хвилини, 2й - секунди)
// for (let minuts = 0; minuts < 60; minuts++) {
//     console.log(minuts);
//     if (minuts === 2){
//         break;
//     }
//     for (let seconds = 0; seconds < 60; seconds++) {
//         console.log(seconds);
//     }
// }

// // - Відтворити роботу годинника, відрахувавши  2 години  (3 цикли! 1й - години, 2й - хвилини, 3й - секунди)
// for (let hour = 0; hour < 60; hour++) {
//     if (hour === 2) {
//         break;
//     }
//     for (let minuts = 0; minuts < 60; minuts++) {
//         console.log(minuts);
//         for (let seconds = 0; seconds < 60; seconds++) {
//             console.log(seconds);
//         }
//     }
// }

// // Додатково

// // - Дано масив: [ 'a', 'b', 'c'] . За допомогою циклу for зібрати всі букви в слово.
// let arrayLet = ['a', 'b', 'c'];
// let letter = '';
// for (let i = 0; i < arrayLet.length; i++) {
//     letter = letter + arrayLet[i];
// }
//
// console.log(letter);

// // - Дано масив: [ 'a', 'b', 'c'] . За допомогою циклу while зібрати всі букви в слово.
// let arrayLet = ['a', 'b', 'c'];
// let letter = '';
// let i = 0;
// while (i < arrayLet.length){
//     letter = letter + arrayLet[i];
//     i++;
// }
// console.log(letter);

// // - Дано масив: [ 'a', 'b', 'c'] . За допомогою циклу for of зібрати всі букви в слово.
// let arrayLet = ['a', 'b', 'c'];
// let letter = '';
// for (let index of arrayLet) {
//     letter = letter + index;
// }
// console.log(letter);

// // - Дан масив ['a', 'b', 'c']. Додайте йому в кінець елементи 1, 2, 3 за допомогою циклу.
// let arrayLetter = ['a', 'b', 'c'];
// let arrayNum = [1, 2, 3];
// for (let i = 0; i < arrayNum.length; i++) {
//     arrayLetter.push(arrayNum[i]);
// }
// console.log(arrayLetter);

// // - Дан масив [1, 2, 3]. Зробіть з нього новий масив [3, 2, 1].
// let arrayAddNum = [1, 2, 3];
// for (let i = arrayAddNum.length; i >= 0; i--) {
//     console.log(arrayAddNum[i]);
// }
//
// // OR
//
// console.log(arrayAddNum.reverse());

// // // - Дан масив [1, 2, 3]. Додайте йому в кінець елементи 4, 5, 6.
// let arrayAddNum = [1, 2, 3];
// let num = 4;
// for (let i = arrayAddNum.length; i < 6; i++) {
//     arrayAddNum[i] = num;
//     num++;
// }
// console.log(arrayAddNum);
//
// // OR
//
// arrayAddNum = [1, 2, 3];
// let arrayNum = [4, 5, 6];
// console.log(arrayAddNum.concat(arrayNum));
//
// // OR
//
// for (let i = 0; i < arrayNum.length; i++) {
//     arrayAddNum.push(arrayNum[i]);
// }
// console.log(arrayAddNum);

// // - Дан масив [1, 2, 3]. Додайте йому в початок елементи 4, 5, 6.
// let numArrayFirst = [1, 2, 3];
// let numArraySecond = [4, 5, 6];
// console.log(numArrayFirst);
// for (let i = 2; i >= 0; i--) {
//     numArrayFirst.unshift(numArraySecond[i]);
// }
// console.log(numArrayFirst);

// // - Дан масив ['js', 'css', 'jq']. Виведіть на екран перший елемент за допомогою shift()
// let arrayCode = ['js', 'css', 'jq'];
// console.log(arrayCode.shift(0));

// // - Дан масив ['js', 'css', 'jq']. Виведіть на екран останній елемент за допомогою pop()
// let arrayCode = ['js', 'css', 'jq'];
// console.log(arrayCode.pop(2));

// // - Дан масив [1, 2, 3, 4, 5]. За допомогою методу/функції slice перетворіть масив в [4, 5].
// let arrayNumbers = [1, 2, 3, 4, 5];
// console.log(arrayNumbers.slice(3,5));

// // - Дан масив [1, 2, 3, 4, 5]. За допомогою методу/функції slice перетворіть масив в [1,2].
// let arrayNumbers = [1, 2, 3, 4, 5];
// console.log(arrayNumbers.slice(0,2));

// // - Дан масив [1, 2, 3, 4, 5]. За допомогою методу/функції splice перетворіть масив в [1, 4, 5].
// let arrayNumbers = [1, 2, 3, 4, 5];
// arrayNumbers.splice(1,2 );
// console.log(arrayNumbers);

// // - Дан масив [1, 2, 3, 4, 5]. За допомогою методу/функції splice зробіть з нього масив [1, 2, 3, 'a', 'b', 'c', 4, 5].
// let arrayNumbers = [1, 2, 3, 4, 5];
// arrayNumbers.splice(3, 0, 'a', 'b', 'c');
// console.log(arrayNumbers);

// // - Дан масив [1, 2, 3, 4, 5]. За допомогою методу/функції splice зробіть з нього масив [1, 'a', 'b', 2, 3, 4, 'c', 5, 'e'].
// let arrayNumbers = [1, 2, 3, 4, 5];
// arrayNumbers.splice(1,0,'a', 'b')
// arrayNumbers.splice(6,0,'c');
// arrayNumbers.splice(9,0,'e');
// console.log(arrayNumbers);

// // - Взяти масив з 10 чисел або створити його. Вивести в консоль тільки ті елементи, значення яких є парними.
// let arrayTenNum = [];
// for (let i = 0; i < 10; i++) {
//     arrayTenNum[i] = Math.floor(Math.random() * 10);
// }
// console.log(arrayTenNum);
// for (let i = 0; i < 10; i++) {
//     if (arrayTenNum[i] % 2 === 0) {
//         console.log(arrayTenNum[i]);
//     }
// }

// // - Взяти масив з 10 чисел або створити його. Створити 2й порожній масив. За допомогою будь-якого циклу та push () скопіювати значення одного масиву в інший
// let arrayTenNum1 = [];
// let arrayTenNum2 = [];
// for (let i = 0; i < 10; i++) {
//     arrayTenNum1[i] = Math.floor(Math.random() * 10);
// }
// console.log(arrayTenNum1);
// for (let i = 0; i < arrayTenNum1.length; i++) {
// arrayTenNum2.push(arrayTenNum1[i])
// }
// console.log(arrayTenNum2);

// // - Взяти масив з 10 чисел або створити його. Створити 2й порожній масив. За допомогою будь-якого циклу скопіювати значення одного масиву в інший.
// let arrayTenNum1 = [];
// let arrayTenNum2 = [];
// let i = 0;
// for (let i = 0; i < 10; i++) {
//     arrayTenNum1[i] = Math.floor(Math.random() * 10);
// }
// console.log(arrayTenNum1);
// while (i < arrayTenNum1.length) {
//     arrayTenNum2.push(arrayTenNum1[i])
//     i++;
// }
// console.log(arrayTenNum2);

// // ===============================================================================

// // зробити масив з 10 чисел [2,17,13,6,22,31,45,66,100,-18]та:
// let ArrayNumbers = [2, 17, 13, 6, 22, 31, 45, 66, 100, -18];
// //     1. перебрати його циклом while
// let i = 0;
// while (i < ArrayNumbers.length) {
//     console.log(ArrayNumbers[i]);
//     i++;
// }
// //     2. перебрати його циклом for
// for (let index = 0; index < ArrayNumbers.length; index++) {
//     console.log(ArrayNumbers[index]);
// }
// // //     3. перебрати циклом while та вивести  числа тільки з непарним індексом
// i = 0;
// while (i < ArrayNumbers.length) {
//     if (ArrayNumbers[i] % 2 === 1) {
//         console.log(ArrayNumbers[i]);
//     }
//     i++;
// }
// // // 4. перебрати циклом for та вивести  числа тільки з непарним індексом
// for (let index = 0; index < ArrayNumbers.length; index++) {
//     if (ArrayNumbers[index] % 2 === 1) {
//         console.log(ArrayNumbers[index]);
//     }
// }
// // // 5. перебрати циклом while та вивести  числа тільки парні  значення
// i = 0;
// while (i < ArrayNumbers.length) {
//     if (ArrayNumbers[i] % 2 === 0) {
//         console.log(ArrayNumbers[i]);
//     }
//     i++;
// }
// // // 6. перебрати циклом for та вивести  числа тільки парні  значення
// for (let index = 0; index < ArrayNumbers.length; index++) {
//     if (ArrayNumbers[index] % 2 === 0) {
//         console.log(ArrayNumbers[index]);
//     }
// }
// // // 7. замінити кожне число кратне 3 на слово "okten"
// for (let index = 0; index < ArrayNumbers.length; index++) {
//     if (ArrayNumbers[index] % 3 === 0) {
//         ArrayNumbers[index] = 'okten';
//     }
// }
// console.log(ArrayNumbers);
// // // 8. вивести масив в зворотньому порядку.
// console.log(ArrayNumbers.reverse());
// // // 9. всі попередні завдання (окрім 8), але в зворотньому циклі (с заду на перед)
// while (i < ArrayNumbers.length) {
//     console.log(ArrayNumbers[i]);
//     i++;
// }

// //     2. перебрати його циклом for
// for (let index = ArrayNumbers.length-1; index >= 0; index--) {
//     console.log(ArrayNumbers[index]);
// }
// //     3. перебрати циклом while та вивести  числа тільки з непарним індексом
// i = ArrayNumbers.length-1;
// while (i >= 0) {
//     if (ArrayNumbers[i] % 2 === 1) {
//         console.log(ArrayNumbers[i]);
//     }
//     i--;
// }
// // 4. перебрати циклом for та вивести  числа тільки з непарним індексом
// for (let index = ArrayNumbers.length-1; index >= 0; index--) {
//     if (ArrayNumbers[index] % 2 === 1) {
//         console.log(ArrayNumbers[index]);
//     }
// }
// // // 5. перебрати циклом while та вивести  числа тільки парні  значення
// i = ArrayNumbers.length-1;
// while (i >= 0) {
//     if (ArrayNumbers[i] % 2 === 0) {
//         console.log(ArrayNumbers[i]);
//     }
//     i--;
// }
// // // 6. перебрати циклом for та вивести  числа тільки парні  значення
// for (let index = ArrayNumbers.length-1; index >=0 ; index--) {
//     if (ArrayNumbers[index] % 2 === 0) {
//         console.log(ArrayNumbers[index]);
//     }
// }
// // // 7. замінити кожне число кратне 3 на слово "okten"
// for (let index = ArrayNumbers.length-1; index >=0 ; index--) {
//     if (ArrayNumbers[index] % 3 === 0) {
//         ArrayNumbers[index] = 'okten';
//     }
// }
// console.log(ArrayNumbers);
// // // 8. вивести масив в зворотньому порядку.
// for (let index = ArrayNumbers.length-1; index >=0 ; index--) {
//     console.log(ArrayNumbers[index]);
// }

// // створити пустий масив та
// let ArrayEmpty = [];
// let ParityCount;
// let i = 0;
// // //     - заповнити його 50 парними числами за допомоги циклу.
// while (ArrayEmpty.length < 50) {
//     ParityCount = Math.floor(Math.random() * 11);
//     if (ParityCount % 2 === 0) {
//         ArrayEmpty[i] = ParityCount;
//         i++;
//     }
// }
// console.log(ArrayEmpty);
// // // - заповнити його 50 непарними числами за допомоги циклу.
// i = 0;
// ArrayEmpty = [];
// while (ArrayEmpty.length < 50) {
//     ParityCount = Math.floor(Math.random() * 11);
//     if (ParityCount % 2 === 1) {
//         ArrayEmpty[i] = ParityCount;
//         i++;
//     }
// }
// console.log(ArrayEmpty);
//
// // // 3. используя Math.random заполнить массив из ???(сколько хотите) элементов.
// ArrayEmpty = [];
// for (let c = 0; c < 100; c++) {
//     ArrayEmpty[c] = Math.floor(Math.random() * 11);
// }
// console.log(ArrayEmpty);
//
//
// // //     диапазон рандома 8 до 732. (но сначала пробуйте БЕЗ ДИАПАЗОНА!)
// ArrayEmpty = [];
// for (let c = 0; c < 100; c++) {
//     ArrayEmpty[c] = Math.floor(Math.random() * (733 - 8) + 8);
// }
// console.log(ArrayEmpty);
//
// // // 2. вывести на консоль  каждый третий елемент
// i = 0;
// while (i < ArrayEmpty.length){
//     console.log(ArrayEmpty[i])
//     i +=3
// }
// // // 3. вывести на консоль  каждый третий елемент
// // // но при условии что его значение является парным.
// i = 0;
// while (i < ArrayEmpty.length){
//     if (ArrayEmpty[i] % 2 === 0){
//     console.log(ArrayEmpty[i])
//     }
//     i +=3
// }
// // // 4. вывести на консоль  каждый третий елемент
// // // но при условии что он имеет парное значение и
// // // записать их в другой массив.
// let ArrNext = [];
// i = 0;
// while (i < ArrayEmpty.length){
//     if (ArrayEmpty[i] % 2 === 0){
//         ArrNext.push(ArrayEmpty[i])
//     }
//     i +=3
// }
// console.log(ArrNext);
// // // 5. Вывести каждый елемент массива у которого соседний с права элемент - парный
// for (let c = 0; c < ArrayEmpty.length; c++){
//     if (ArrayEmpty[c] % 2 === 0) {
//         console.log(ArrayEmpty[c-1]);
//     }
// }
// // // 5 масив з числами [100,250,50,168,120,345,188], Які характеризують вартість окремої покупки. обрахувати середній чек.
// let ArrNumSum = [100,250,50,168,120,345,188];
// let sum = 0;
// for (let j = 0; j < ArrNumSum.length; j++){
//     sum =+ ArrNumSum[j];
// }
// console.log(Math.round(sum / ArrNumSum.length));
// // // 3 створити масив з рандомними значеннями, помножити всі його елементи на 5 та перемістити їх в інший масив.
// let ArrayRand = [];
// let ArrayX = [];
// for (let k = 0; k < 10; k++) {
//     ArrayRand[k] = Math.floor(Math.random() * 20);
// }
// console.log(ArrayRand);
// for (let k = 0; k < 10; k++) {
//     ArrayRand[k] = ArrayRand[k] * 5;
// }
// console.log(ArrayRand);
// for (let k = 0; k < 10; k++) {
//     ArrayX[k] = ArrayRand[k];
//     delete ArrayRand[k];
// }
// console.log(ArrayRand);
// console.log(ArrayX);
// // // 4 створити масив з будь якими значеннями (стрінги, числа, і тд...). пройтись по ньому, і якщо об'єкт є числом,
// // // додати його в інший масив.
// let ArrayObject = ['Hello', 'Green', 414, true, false, 2.443, 0];
// let ArrayObjectNumbers = [];
// for (let k = 0; k <ArrayObject.length; k++){
//     if (typeof ArrayObject[k] === 'number'){
//         ArrayObjectNumbers.push(ArrayObject[k]);
//     }
// }
// console.log(ArrayObjectNumbers);
