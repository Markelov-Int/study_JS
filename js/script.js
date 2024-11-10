"use strict";

// let obj = {
//     name: "John",
//     age: 15,
//     isMarried: false
// };

// obj["b"] = "he";

// console.log(obj.b)
// console.log(obj['b'])

//////////////////// ______alert__________///////

//alert(1)

// const result = confirm("Are u here?")
// console.log(result)

// const answer = +prompt("Do u have 18 e o?", "18");
// console.log(answer + 6);

// let answer = [];

// answer[0] = prompt("Ваше имя?", "")
// answer[1] = prompt("Ваша фамилия?", "")
// answer[2] = +prompt("Сколько вам лет?", "")

// console.log(typeof(answer));

/////////////////////////////////// ИНТЕРПОЛЯЦИЯ /////////////////

// let a = "John";

// alert(`Привет, ${a}`);


///////////////////////////////////// ИНКРЕМЕНТ-ДЕКРЕМЕНТ //////////////

// let a = 10;
// console.log(a++);
// console.log(a);

// 1

// let numberOfFilms = prompt("Сколько фильмов вы уже посмотрели?", "");
// const personalMovieDB = {
//     count : numberOfFilms,
//     movies: {},
//     actors: {},
//     genres: [],
//     privat: false
// };
// let lastFilm = prompt("Один из последних просмотренных фильмов?", "");
// let value = +prompt("Оцените его", "");
// let lastFilm2 = prompt("Один из последних просмотренных фильмов?", "");
// let value2 = +prompt("Оцените его", "");
// personalMovieDB.movies[lastFilm] = value;
// personalMovieDB.movies[lastFilm2] = 2;

// 10

// console.log(personalMovieDB)


/////// CONDITIONS

// if (4 == 9) {
//     console.log("Ok!");
// } else if (4 < 9){
//     console.log("error");
// } else {
//     console.log("gey")
// }

/// TERN OPERATOR
//(4 === 4) ? console.log("Ok!") : console.log("error");


// SWITCH

// const num = 50;

// switch (num) {
//     case 49:
//         console.log("false");
//         break;
//     case 50:
//         console.log("true");
//         break;
//     default:
//         console.log("Next time");
//         break;
// }

// console.log(1 === "1")

// let hamburger;
// const fries = NaN;
// const cola = 0;
// const nuggets = 2;


// if (hamburger && cola || fries === 3 && nuggets) {
//    console.log('Done!')
// } else {
//     console.log("gey");
// }


/////////////////// WHILE 


// let num = 10;

// while (num <= 15) {
//     console.log(num);
//     num++;
// }

// for (let i = 0; i < 10; i++){
//     if (i % 2 === 1){
//         console.log(i);
//     }

    
// }

// let z = "";
// for (let i = 0; i < 7; i++){
//     console.log(z);
//     z += "*" ;   
// }

// let res = '';
// let len = 8;

// for (let i = 1; i < len; i++){
//     for (let j = 0; j < i; j++){
//         res+="*";
//     }
//     res +="\n";
// }

// console.log(res);

// first: for (let i = 0; i < 3; i++){
//     console.log(`First level: ${i}`);
//     for (let j = 0; j < 3; j++){
//         console.log(`Second level: ${j}`);
//         for (let k = 0; k < 4; k++){
//             if (k === 3) break first;
//             console.log(`Third level: ${k}`);
//         }
//     }
// }


// TASK 1

// for (let i = 5; i <=10; i++){
//     console.log(i)
// }

// TASK 2

// for (let i = 20; i >= 10; i--){
//     if (i === 13) break ;
//     console.log(i);
// }

// TASK 3

// for (let i = 2; i <=10; i++){
//     if (i % 2 === 0){
//         console.log(i);
//     }
// }

// TASK 4

// for (let i = 2; i <= 16; i++) {
//     if (i % 2 === 0) {
//         continue;
//     } else {
//         console.log(i);
//     }
// }

// let i = 2;
// while (i <= 16){
//     i++;
//     if (i % 2 === 0) {
//         continue;
//     } else {
//         console.log(i);
//     }
// }




// TASK 5
//  let arr = [];
//  for (let i = 5; i <= 10; i++){
//     arr.push(i);
//  }
//  console.log(arr);


// ADVANCED TASK1

// const arr = [3, 5, 8, 16, 20, 23, 50];
// const result = [];

// for(let i = 0; i < arr.length; i++){
//     result.push(arr[i]);
// }
// console.log(result);


// ADVANCED TASK2

// const data = [5, 10, 'Shopping', 20, 'Homework'];
// for(let i = 0; i < data.length; i++){
//    if (typeof data[i] === "number"){
//     data[i] *= 2;
//    } else{
//     data[i] += " - done";
//    }
// }   
// console.log(data);

// ADVANCED TASK3

// const data = [5, 10, 'Shopping', 20, 'Homework'];
// const result = [];

// for(let i = data.length - 1; i >= 0; i--){
//     result.push(data[i]);
// }
// console.log(result);

//THE HIGHEST LEVEL TASK1

// const lines = 5;
// let result = '';

// for(let i = 0; i < lines; i++){
//     for(let j = 0; j < lines - i; j++){
//         result += " ";
//     }
//     for(let j = 0; j < 2 * i + 1; j++){
//         result += "*";
//     }
//     result += "\n";
// }

// console.log(result)

//TASK 

// let numberOfFilms = prompt("Сколько фильмов вы уже посмотрели?", "");
// const personalMovieDB = {
//     count:numberOfFilms,
//     movies: {},
//     actors: {},
//     genres: [],
//     privat: false
// };

// for (let i = 0; i < 2; i++){
//     const a = prompt("Один из последних просмотренных фильмов?", ""),
//           b = +prompt("Оцените его", "");
//     if (a != "" && b != "" && a != null && b != null && a.length < 50){
//         personalMovieDB.movies[a] = b;
//         console.log("done");
//     } else{
//         console.log("error");
//         i--;
//     }
// }

// if (personalMovieDB.count < 10){
//     console.log("You watched quit a bit films!");
// } else if (personalMovieDB.count > 10 && personalMovieDB.count < 30){
//     console.log("You are a cool viewer");
// } else if (personalMovieDB.count > 30){
//     console.log("You are a film-lover!");
// } else{
//     console.log("Error");
// }

// console.log(personalMovieDB);


//// FUNCTIONS

// function showFirstMessage(){
//     console.log("HI");
// }

// showFirstMessage();

// let num = 10;
// function showFirstMessage(){
//     let num = 50;
//     return num;
// }

// const a = showFirstMessage();
// console.log(a); // 50


//TASK1

// function sayHello(name) {
//    return "Привет, " + name ;
// }

// console.log(sayHello("Антон"));

////TASK2

// function returnNeighboringNumbers(num) {
//     let res = [num-1, num, num+1]
//     return res
// }

// console.log(returnNeighboringNumbers(3));

////TASK3

// function getMathResult(a, b) {

//     for (let i = a; i <= b; i*b){
//         if (typeof b !== "number" ){
//             return a;
//         } else{    
//             return i * b + "---";
//         }
//     }
// }

// console.log(getMathResult(3, 5));

// function getMathResult(a, b) {
//     if (typeof b !== "number" || b <=0){
//         return a;
//     } else{
//         let res = "";
//         for (let i = 1; i <= b; i++){
//             res += a * i;
//             if( i < b){
//                 res += "---";
//             }
//         }
//         return res;
//     }
// }

// console.log(getMathResult(5, 3)); // "5---10---15"

// let a = "gewfg ggweqwr";
// console.log(a.slice(1, 5));



// let numberOfFilms;

// function start(){
//     numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?", "");

//     while(numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms) ){
//         numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?", "");
//     }
// }

// start();

// const personalMovieDB = {
//     count:numberOfFilms,
//     movies: {},
//     actors: {},
//     genres: [],
//     privat: false
// };


// function rememberMovie(){
//     for (let i = 0; i < 2; i++){
//         const a = prompt("Один из последних просмотренных фильмов?", "").trim(),
//               b = +prompt("Оцените его", "");
//         if (a != "" && b != "" && a != null && b != null && a.length < 50){
//             personalMovieDB.movies[a] = b;
//             console.log("done");
//         } else{
//             console.log("error");
//             i--;
//         }
//     }
// }
// rememberMovie();

// function detectMovieLevel(){
//     if (personalMovieDB.count < 10){
//         console.log("You watched quit a bit films!");
//     } else if (personalMovieDB.count > 10 && personalMovieDB.count < 30){
//         console.log("You are a cool viewer");
//     } else if (personalMovieDB.count > 30){
//         console.log("You are a film-lover!");
//     } else{
//         console.log("Error");
//     }
// }

// detectMovieLevel()

// function showMyDB(){
//     if(personalMovieDB.privat === false){
//         console.log(personalMovieDB);
//     }
// }
// showMyDB();



// function writeYourGenres(){
//     for (let i = 1; i<=3; i++){
//         const answer = prompt(`Your favorite Genres by number: ${i} `, "");
//         personalMovieDB.genres.push(answer);
//     };
//     console.log(personalMovieDB);
// }

// writeYourGenres();


/// ADVANDED TASK1 

// function calculateVolumeAndArea(number) {
//     let V = number * number * number;
//     let S = number * number * 6;

//     if( Number.isInteger(number) && number >= 0 ){
//         console.log(`Объем куба: ${V}, площадь всей поверхности: ${S}`);
//     } else {
//         console.log("При вычислении произошла ошибка");
//     }
// }

// calculateVolumeAndArea(5);
// calculateVolumeAndArea(15);
// calculateVolumeAndArea(15.5);
// calculateVolumeAndArea('15');
// calculateVolumeAndArea(-15);

//V = a * a * a;
//S = a * a *6;


/// ADVANDED TASK2 

// function getCoupeNumber(number) {
//     if( typeof(number) !== "number" || number < 0 || !Number.isInteger(number)){
//         return "Ошибка. Проверьте правильность введенного номера места";
//     }

//     if(number === 0 || number > 36){
//         return "Таких мест в вагоне не существует";
//     }

//     return Math.ceil(number / 4);
// }


// console.log(getCoupeNumber(33));
// console.log(getCoupeNumber(7));
// console.log(getCoupeNumber(300));
// console.log(getCoupeNumber(0));
// console.log(getCoupeNumber(7.7));
// console.log(getCoupeNumber(-10));
// console.log(getCoupeNumber("Hello"));



////// CALLBAVK FUNC

// function learnJS(lang, callback){
//     console.log(`Я учу ${lang}`);
//     callback();
// }

// function done(){
//     console.log("Я прошел этот урок! Callback отработал");
// }

// learnJS("JavaScript", done);


// 2 способ
// learnJS("JavaScript", function(){
//     console.log("Я прошел этот урок!");
// });




                        ////   Objects  ///


// let options = {
//     name: "test",
//     width: 1024,
//     height: 1024,
//     color: {
//         border: "black",
//         color: "red"
//     }
// }
// // console.log(options.name);


// for (let key in options){
//     if(typeof(options[key]) === "object"){
//         for(let i in options[key]){
//             console.log(` Ключ ${i} Значениие ${options[key][i]}`);
//         }
//     } else{
//         console.log(` Ключ ${key} Значениие ${options[key]}`)
//     }

// }


// const arr = {
//     a: 15,
//     b: 12
// };

// function copy(mainObj){
//     let objCopy = {};

//     for(let i in mainObj){
//         objCopy[i] = mainObj[i];
//     }
//     return objCopy;
// };

// const numbers = {
//     c: 15,
//     v:32,
//     w:{
//         r:12,
//         s: 2
//     }
// };

// const newNumb = copy(numbers);

// newNumb.c = 99;
// newNumb.w.r = 99; // Меняется у всех, тк поверхностная копия

// console.log(newNumb, numbers);


/// Objects TASK1

// const personalPlanPeter = {
//     name: "Peter",
//     age: "29",
//     skills: {
//         languages: ['ru', 'eng', 'ua'],
//         programmingLangs: {
//             js: '20%',
//             php: '10%'
//         },
//         exp: '1 month'
//     },

//     showAgeAndLangs: function(plan){
//         let age = plan.age;
//         let langs = plan.skills.languages.join(" ").toUpperCase();
//         for(let i in plan){
//             return `Мне ${age} и я владею языками ${langs}`;
//         }
//     }

// };

// console.log(personalPlanPeter.showAgeAndLangs(personalPlanPeter));


// MY SOLUTION TASK2
// function showProgrammingLangs(plan) {
//     let res = plan.skills.programmingLangs;

//     if (Object.keys(res).length === 0){
//         console.log("error");
//     } else{
//         for(let key in res){ 
//             console.log(`Язык ${key} изучен на ${res[key]}`);
//         }
//     }
// }

// showProgrammingLangs(personalPlanPeter);



// SOLUTION WITH RETURN

// function showProgrammingLangs(plan) {

//     let str = ""; 
    
//     let res = plan.skills.programmingLangs;

//     if (Object.keys(res).length === 0){
//         console.log("error");
//     } else{
//         for(let key in res){ 
//             str += `Язык ${key} изучен на ${res[key]}\n`;
//         }
//         return str;
//     }
// }

// console.log(showProgrammingLangs(personalPlanPeter));


// function showExperience(plan) {
//     const exp = plan.skills.exp;
//     return exp;
// }

// console.log(showExperience(personalPlanPeter));




/// MASSIVE TASK1

// const family = [];

// function showFamily(arr) {
//     let str = `Семья состоит из: `;
//     if (arr.length === 0){
//         return "Семья пуста";
//     } else{
//         family.forEach(function(item){
//             str += `${item} `;
//         });
//         return str;
//     }

// };
// console.log(showFamily(family));


/// MASSIVE TASK2

// const favoriteCities = ['liSBon', 'ROME', 'miLan', 'Dublin'];

// function standardizeStrings(arr) {
//     arr.forEach(function(item){
//         console.log(item.toLowerCase());
//     });
// }
// standardizeStrings(favoriteCities);


/// MASSIVE TASK3

// const someString = 'This is some strange string';

// function reverse(str) {
//     let string = "";
//     if(typeof(str) !== "string"){
//         return "Ошибка!";
//     } else{
//         for(let i = str.length-1; i >= 0; i--){
//             string += str[i];
//         }
//         return string;
//     }

// }
// console.log(reverse(someString));


/// MASSIVE TASK4

// const baseCurrencies = ['USD', 'EUR'];
// const additionalCurrencies = ['UAH', 'RUB', 'CNY'];

// function availableCurr(arr, missingCurr) {
//     let str = 'Доступные валюты:\n';
    
//     if(arr.length === 0){
//         return "Нет доступных валют";
//     }

//     for(let i = 0; i < arr.length; i++){
//         if (arr[i] === missingCurr){
//             continue;
//         } 
        
//         str += `${arr[i]}\n`;
//     }
//     return str;
// }

// console.log(availableCurr([...baseCurrencies, ...additionalCurrencies], "CNY"));



//PRACTICE

// let str = ["per","Mov","MovieDB"];

// function check(string){
//     let res = "";
//     if(string.length === 0) {
//         return "Ask again";
//     } else{
//         string.forEach(function(item, i){
//             res += `любимый жанр ${i+1} это - ${item}\n`;
//         });
//         return res;
//     };
// };

// console.log(check(str));


// ADVANCED TASK1

// const shoppingMallData = {
//     shops: [
//         {
//             width: 10,
//             length: 5
//         },
//         {
//             width: 15,
//             length: 7
//         },
//         {
//             width: 20,
//             length: 5
//         },
//         {
//             width: 8,
//             length: 10
//         }
//     ],
//     height: 5,
//     moneyPer1m3: 30,
//     budget: 50000
// }

//FIRSTSOLUTION

// function isBudgetEnough(data) {
//     let res = 0;
//     let {shops} = shoppingMallData;
//     for(let i in shops){
//         res += shops[i].width * shops[i].length;
//     }

//     let fullS = res * data.height;
//     let payed = fullS * data.moneyPer1m3;

//     console.log(`Общая площадь всех магазинов равна: ${res} м3`);
//     console.log(`Общая площадь тц равна: ${fullS} м3`)
//     console.log(`Вся стоимость за отопление равна: ${payed}`)

//     if(payed > data.budget){
//         return "Бюджета недостаточно";
//     } else{
//         return "Бюджета достаточно";
//     }
// };

// console.log(isBudgetEnough(shoppingMallData));
//     function isBudgetEnough(data) {
//     let res = 0;
//     for(let i in data){
//         if(typeof(data[i]) === "object"){
//             for(let j in data[i]){
//                 res += data[i][j].width * data[i][j].length;
//             }
//         }
       
//     }
//     let fullS = res * data.height;
//     let payed = fullS * data.moneyPer1m3;
    
//     console.log(`Общая площадь всех магазинов равна: ${res} м3`);
//     console.log(`Общая площадь тц равна: ${fullS} м3`)
//     console.log(`Вся стоимость за отопление равна: ${payed}`)

//     if(payed > data.budget){
//         return "Бюджета достаточно";
//     } else{
//         return "Бюджета недостаточно";
//     }
// };
// console.log(isBudgetEnough(shoppingMallData));


//Общая площадь всех магазинов 285;
//Общая площадь тц 1425;

//Вся стоимость за отопление 1425 * 30 = 42750;




// ADVANCED TASK2

// const students = ['Peter', 'Andrew', 'Ann', 'Mark', 'Josh', 'Sandra', 'Cris', 'Bernard', 'Takesi', 'Sam', 'Samwqwq'];

// function sortStudentsByGroups(arr) {
//     arr.sort();

//     let a = [];
//     let b = [];
//     let c = [];
//     let d = [];
    
//     for(let i = 0; i<arr.length; i++){
//         if (i < 3) {
//             a.push(arr[i]);
//         } else if (i < 6) {
//             b.push(arr[i]);
//         } else if (i < 9) {
//             c.push(arr[i]);
//         } else {
//             d.push(arr[i]);
//         }
//     }

//     return [a,b,c, `Оставшиеся студенты: ${d.length === 0 ? '-' : d.join(', ')}`]


// }
// console.log(sortStudentsByGroups(students));

//arr[0], arr[1], arr[2];