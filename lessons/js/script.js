"use strict";

// const numberOfFilms = +prompt('сколько фильмов вы уже посмотрели?', '');

// const personalMovieDB = {
//     count: numberOfFilms,
//     movies: {} ,
//     actors: {} ,
//     genres: [] ,
//     privat: false 
// };

// const a = prompt('Один из последних просмотренных фильмов', ''), 
//       b = prompt('На сколько оцените его?', ''),
//       c = prompt('Один из последних просмотренных фильмов', ''), 
//       d = prompt('На сколько оцените его?', '');

//       personalMovieDB.movies[a] = b;
//       personalMovieDB.movies[c] = d;

//       console.log(personalMovieDB);

// let title = 20;
// if (20 < 25) {
//     console.log('ok');
// } else {
//     console.log('not ok');
// }

// const num = 20;
// (num !== 20) ? console.log('ok') : console.log('not ok');

// const num = 20;

// switch (num) {
//     case 49: 
//         console.log('not ok');
//         break;
//     case 100:
//         console.log('not ok2');
//         break;
//     case 2111:
//         console.log('ok');
//         break;
//     default: 
//         console.log('all not ok');
//         break;
// }



// const sigaretAviable = confirm('Єсть курыть?');
// if (sigaretAviable) {
//     let sigaretNumber = prompt('Скока у тебе сіг єсть?', '');
//     console.log(`У мене є ${sigaretNumber} сіг`);
// }   else if (!sigaretAviable) {
//     console.log('тишо ти голова');
// }

// for (let i = 0; i < 3; i++) {
//     alert( `number ${i}!` );
//   }


// let num;

// do {
//   num = prompt("Введите число больше 100?", 0);
// } while (num <= 100 && num);

// let result = '';
// const length = 7;

// for (let i = 1; i < length; i++) {
//     for (let j = 0; j < i; j++)
//     {result +='*';}

//     result += '\n';
// }
    
//     console.log(result);



// ______________________
// for (let i = 2; i <= 16; i++) {
//     if (i % 2 === 0) {
//         continue;
//     } else {
//         console.log(i);
//     }
// }

// ________________________-

// const arrayOfNumbers = [];

//     for (let i = 5; i < 11; i++) {
//         arrayOfNumbers[i - 5] = i;
//     }

//     console.log(arrayOfNumbers);



// Заполните новый массив (result) числами из старого (arr). 
// Количество элементов в массиве можно получить как arr.length, 
// а к элементам обращаемся все так же: arr[0], arr[1] и тд.
// Должен получиться точно такой же массив

// const arr = [3, 5, 8, 16, 20, 23, 50];
//     const result = [];

//     for (let i = 0; i < arr.length; i++) {
//         result[i] = arr[i];
//     }

//     console.log(result);
//     return result;


// _______________________
// Вывести на екран пирамиду из шести уровней.

// let result = '';
// const lines = 7;
//     for (let i = 1; i < lines; i++) {
//         for (let j = 0; j < i; j++) {
//             result += '*';
//         }

//         result += '\n';
//     }

// console.log(result);







// 1) Автоматизировать вопросы пользователю про фильмы при помощи цикла

// 2) Сделать так, чтобы пользователь не мог оставить ответ в виде пустой строки,
// отменить ответ или ввести название фильма длинее, чем 50 символов. Если это происходит - 
// возвращаем пользователя к вопросам опять

// 3) При помощи условий проверить  personalMovieDB.count, и если он меньше 10 - вывести сообщение
// "Просмотрено довольно мало фильмов", если от 10 до 30 - "Вы классический зритель", а если больше - 
// "Вы киноман". А если не подошло ни к одному варианту - "Произошла ошибка"

// 4) Потренироваться и переписать цикл еще двумя способами*/



// const numberOfFilms = +prompt('сколько фильмов вы уже посмотрели?', '');

// const personalMovieDB = {
//     count: numberOfFilms,
//     movies: {} ,
//     actors: {} ,
//     genres: [] ,
//     privat: false 
// };

//       for (let i = 0; i < 2; i++) {
//         const a = prompt('Один из последних просмотренных фильмов', ''), 
//               b = prompt('На сколько оцените его?', '');

//         if (a != null && b != null && a != '' && b != '' && a.length < 50) {
//             personalMovieDB.movies[a] = b;
//             console.log('done');
//         } else {
//             console.log('error');
//             i--;
//         }         
  
//       }

//       if (personalMovieDB.count < 10) {
//         console.log('Просмотрено довольно мало фильмов');
//       } else if (personalMovieDB.count >= 10 && personalMovieDB.count <= 30) {
//         console.log('Вы классический зритель');
//       } else if (personalMovieDB.count > 30) {
//         console.log('Вы киноман');
//       } else {
//         console.log('Произошло вафление');
//       }

//       console.log(personalMovieDB);


// _______________________

// Создайте функцию, которая будет считать курс валюты со скидкой.
// let usd = 37;
// let discount = 0.9;

// function convert (a, b) {
//     return a * b;
// }

// function promotion (result) {
//     console.log(result * discount); 
// }

// const res = convert(500, usd);
// promotion(res);


// Создайте функцию, которая принимает в себя 1 аргумент в виде целого числа и возвращает массив из трех чисел: 
// одно на 1 меньше, сам аргумент, и число на 1 больше.
// Пример: вызов функции returnNeighboringNumbers(5) возвращает массив в виде [4, 5, 6].

// function returnNeighboringNumbers(num) {
//     return [num - 1 , num , num + 1];
// }
// returnNeighboringNumbers();




let numberOfFilms;

    function start () {
        numberOfFilms = +prompt('сколько фильмов вы уже посмотрели?', '');

        while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
            numberOfFilms = +prompt('сколько фильмов вы уже посмотрели?', '');
        }
    }

start();

const personalMovieDB = {
    count: numberOfFilms,
    movies: {} ,
    actors: {} ,
    genres: [] ,
    privat: false 
};


function rememberMyFilms() {
    for (let i = 0; i < 2; i++) {
        const a = prompt('Один из последних просмотренных фильмов', '').trim(), 
              b = prompt('На сколько оцените его?', '');

        if (a != null && b != null && a != '' && b != '' && a.length < 50) {
            personalMovieDB.movies[a] = b;
            console.log('done');
        } else {
            console.log('error');
            i--;
        }         
  
      }
}

rememberMyFilms();

function detectPersonalLevel () {
    if (personalMovieDB.count < 10) {
        console.log('Просмотрено довольно мало фильмов');
      } else if (personalMovieDB.count >= 10 && personalMovieDB.count <= 30) {
        console.log('Вы классический зритель');
      } else if (personalMovieDB.count > 30) {
        console.log('Вы киноман');
      } else {
        console.log('Произошло вафление');
      }
}

detectPersonalLevel();

function showMyDB (hidden) {
    if (!hidden) {
        console.log(personalMovieDB);
    }
}

     showMyDB(personalMovieDB.privat);

     function writeYourGenres () {
        for (let i = 1; i <= 3; i++) {
            const genre = prompt(`Ваш любимый жанр под номером ${i}`);
            personalMovieDB.genres[i - 1] = genre;
        }
     }

     writeYourGenres();

