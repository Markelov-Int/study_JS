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

let numberOfFilms = prompt("Сколько фильмов вы уже посмотрели?", "");
const personalMovieDB = {
    count : numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};
let lastFilm = prompt("Один из последних просмотренных фильмов?", "");
let value = +prompt("Оцените его", "");
let lastFilm2 = prompt("Один из последних просмотренных фильмов?", "");
let value2 = +prompt("Оцените его", "");
personalMovieDB.movies[lastFilm] = value;
personalMovieDB.movies[lastFilm2] = 2;

10

console.log(personalMovieDB)