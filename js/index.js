"useStrict";

let numberOfFilms;

function start() {
    numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?", '');

    while (numberOfFilms == "" || numberOfFilms == null || isNaN(numberOfFilms)) {
        numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?", '');
    }
}

start();

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    private: false
};



function rememberMyFilms() {
    for (let i = 0; i < 2; i++) {
        const a = prompt('Один из последних просмотренных фильмов?' , ''),
              b = prompt('На сколько его оцените?', '');
    
        if (a != null && b != null && a != '' && b != "" && a.length < 50) {
            personalMovieDB.movies[a] = b;
            console.log('done');
        } else {
            console.log("error");
            i--;
        }   
    }
}

/*rememberMyFilms();*/



function detectMyPersonalLevel() {
    if (personalMovieDB.count < 10) {
        console.log("weak");
    } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
        console.log("not bad");
    } else if (personalMovieDB.count >= 30) {
        console.log("tough guy");
    } else  {
        console.log("no way!!!");
    }
}

/*detectMyPersonalLevel();*/

function  showMyDB(hidden) {
    if(!hidden) {
        console.log(personalMovieDB);
    }
}

showMyDB(personalMovieDB.private);

function writeYourGenres() {
    for (let i = 1; i <= 3; i++) {
        personalMovieDB.genres[i - 1] = prompt(`Your favorite genre number ${i}`);
    }
}

writeYourGenres();

/*let num = 20;

function showFirstMessage(text) {
    console.log('hello world');
    let num = 30;
    console.log(num);
}
console.log(num);
showFirstMessage();

function calc(a, b) {
    return (a + b / 2);
}

console.log(calc(4, 8));
console.log(calc(6, 22));
console.log(calc(9, 4));
console.log(calc(2, 54));

function ret() {
    let num = 50;
    return num;
}

const anotherNum = ret();
console.log(anotherNum);


const logger = function() {
console.log("hello");
};

logger();

const calc = (a, b) => {
    console.log('1');
    return a + b;
};*/

/*const str = "test jDFGRgyDFfguFfb";*/
/*const arr = [1, 1, 2, 5, 5, 6, 7, 9];*/

/*console.log(str.length);*/
/*console.log(arr.length);*/

/*console.log(str.toUpperCase());
console.log(str.toLowerCase());

const fruit = "Some fruit";

console.log(fruit.indexOf("fruit"));

const logg = "all animals are equal";

console.log(logg.slice(0, 12));

console.log(logg.substring (12, 15));

console.log(logg.substr(16, 6));

const num = 15.45;
console.log(Math.round(num));

const test = "12.2px";
console.log(parseInt(test));
console.log(parseFloat(test));*/