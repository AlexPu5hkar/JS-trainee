const numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?", '');

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

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

console.log(personalMovieDB);

if (personalMovieDB.count < 10) {
    console.log("weak");
} else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
    console.log("not bad");
} else if (personalMovieDB.count >= 30) {
    console.log("tough guy");
} else  {
    console.log("no way!!!")};

    

/*if(4 == 9) {
    console.log('ok!');
} else {
    console.log('are you mad?');
}*/

/*const num = 50;

if (num < 40) {
    console.log('error');
} else if (num > 100) {
    console.log('too much');
} else {
    console.log('ok!');
}

(num === 51) ? console.log('oK!!') : console.log('error');*/


/*const num = 50

switch (num) {
    case 49: console.log("false");
        break;
    case 149: console.log("false");
        break;
    case 50: console.log("Yup!!");
        break;
    default:
        console.log("not this time");
        break;
}*/
/*let num = 50;

while (num <= 55) {
    console.log(num);
    num++;
}*/

/*do {
    console.log(num);
    num++;
}
while (num < 55);*/

/*for (let i = 1; i < 18; i++) {
    if (i === 5) {
        break;
        continue;
    
    }
    console.log(i);
}*/