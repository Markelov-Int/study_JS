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



let numberOfFilms;

function start(){
    numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?", "");

    while(numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms) ){
        numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?", "");
    }
}

start();

const personalMovieDB = {
    count:numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};


function rememberMovie(){
    for (let i = 0; i < 2; i++){
        const a = prompt("Один из последних просмотренных фильмов?", ""),
              b = +prompt("Оцените его", "");
        if (a != "" && b != "" && a != null && b != null && a.length < 50){
            personalMovieDB.movies[a] = b;
            console.log("done");
        } else{
            console.log("error");
            i--;
        }
    }
}
rememberMovie();

function detectMovieLevel(){
    if (personalMovieDB.count < 10){
        console.log("You watched quit a bit films!");
    } else if (personalMovieDB.count > 10 && personalMovieDB.count < 30){
        console.log("You are a cool viewer");
    } else if (personalMovieDB.count > 30){
        console.log("You are a film-lover!");
    } else{
        console.log("Error");
    }
}

detectMovieLevel()

function showMyDB(){
    if(personalMovieDB.privat === false){
        console.log(personalMovieDB);
    }
}
showMyDB();



function writeYourGenres(){
    for (let i = 1; i<=3; i++){
        const answer = prompt(`Your favorite Genres by number: ${i} `, "");
        personalMovieDB.genres.push(answer);
    };
    console.log(personalMovieDB);
}

writeYourGenres();