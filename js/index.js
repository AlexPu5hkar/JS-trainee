"useStrict";

const personalMovieDB = {
    count: 0,
    movies: {},
    actors: {},
    genres: [],
    private: false,
    start: function() {
        personalMovieDB.count = +prompt("Сколько фильмов вы уже посмотрели?", '');
    
        while (personalMovieDB.count == "" || personalMovieDB.count == null || isNaN(personalMovieDB.count)) {
            personalMovieDB.count = +prompt("Сколько фильмов вы уже посмотрели?", '');
        }
    },
    rememberMyFilms: function() {
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
    },
    detectMyPersonalLevel: function() {
        if (personalMovieDB.count < 10) {
            console.log("weak");
        } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
            console.log("not bad");
        } else if (personalMovieDB.count >= 30) {
            console.log("tough guy");
        } else  {
            console.log("no way!!!");
        }
    },
    showMyDB: function(hidden) {
        if(!hidden) {
            console.log(personalMovieDB);
        }
    },
    toggleVisibleMyDB: function() {
        if (personalMovieDB.private) {
            personalMovieDB.private = false;
        } else {
            personalMovieDB.private = true;
        }
    },
    writeYourGenres: function() {
        for (let i = 1; i <= 3; i++) {
            let genre = prompt(`Your favorite genre number ${i}`);

            if (genre === '' || genre == null) {
                console.log('Wrong answer or didnt ansver');
                i--;
            } else {
                personalMovieDB.genres[i - 1] = genre;
            }

        } 


        personalMovieDB.genres.forEach((item, i) => {
            console.log(`Favorite Genre ${i + 1} - is ${item}`);
            
        });
    } 
};

const btn = document.querySelector('button');

let i = 0;
const deleteEl = (e) => {
   console.log(e.target);
   i++;
   if (i == 1) {
    btn.removeEventListener('click', deleteEl);
   }
};

btn.addEventListener('click', deleteEl);



/*btn.addEventListener('click', (e) => {
    console.log(e.target);
    e.target.remove();
});*/

/*const btn = document.querySelector('button')

btn.onclick = function() {
    alert('click');
};*/



/*
//to string
console.log(typeof(String(null)));
console.log(String(null));
console.log(typeof(String(65)));

console.log(typeof(5 + ''));
console.log(typeof(null + ''));

const num = 5;

console.log("https://vk.com/catalog/" + num);

const fontSize = 25 + "px";

//to number
console.log(typeof(Number('5')));
console.log(typeof(+ "65"));
console.log(typeof(parseInt("54px", 10)));

let answ = +prompt("hi", "");

//to boolean

 0, '', null, undefined, Nan;

 let switcher = null;

 if (switcher) {
    console.log('working...');
 }

switcher = 1;
if (switcher) {
    console.log('working...');
}

console.log(typeof(Boolean('65')));
console.log(typeof(!!'651'));*/


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

/*function first() {
    setTimeout(function() {
        console.log(1)
    }, 500);
}    

function second() {
    console.log(2);
}

first();
second();

function learnJS(lang, callback) {
    console.log(`I am learning: ${lang}`);
    callback();
}

function done() {
    console.log('I finashed this lesson');
}

learnJS('JavaScript', done);*/


/*const options = {
    name: 'test',
    width: 1024,
    height: 1024,
    colors: {
        border: 'black',
        bg: 'red'
    },
    makeTest: function() {
        console.log("Test");
    }
};

options.makeTest();

const {border, bg} = options.colors;
console.log(border);*/

/*console.log(Object.keys(options).length);*/

/*console.log(options.width);

delete options.name;

console.log(options);*/
/*let counter = 0;
for (let key in options) {
    if (typeof(options [key]) === 'object') {
        for (let i in options[key]) {
            console.log(`Свойство ${i} имеет значение ${options[key] [i]}`);
        }
    } else {
        console.log(`Свойство ${key} имеет значение ${options[key]}`);
        
    }
    counter++;
}
console.log(counter);*/

/*const arr = [12, 55, 84, 95, 26, 37];

arr.sort(compareNum);

function compareNum(a, b) {
    return a - b;
}*/
/*arr.forEach(function(item, i, arr) {
    console.log(`${i}: ${item} Inside the massive ${arr}`);
});*/

/*arr[99] = 0;
console.log(arr.length);
console.log(arr);*/
/*arr.pop();*/
/*arr.push(21);*/

/*console.log(arr);*/

/*for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
}*/

/*for (let value of arr) {
    console.log(value);
}*/

/*let a = 5;
    b = a;

b = b + 5; 

console.log(a);
console.log(b);

const obj = {
    a : 5,
    b : 1
};

const copy = obj;

copy.a = 10;

console.log(copy);
console.log(obj);*/

/*function copy(mainObj) {
    let objCopy = {};

    let key;
    for (key in mainObj) {
        objCopy[key] = mainObj [key];
    }

    return objCopy;
}

const numbers = {
   a: 2,
   b: 5,
   c: {
        x: 7,
        y: 4
   } 
};

const newNumbers = copy(numbers);

newNumbers.a = 10;*/

/*console.log(newNumbers);
console.log(numbers);*/

/*const add = {
    d: 17,
    e: 20
};

const clone = Object.assign({}, add);

clone.d =20;*/

/*console.log(add);
console.log(clone);*/

/*const oldArray = ['a', 'b', 'c'];
const newArray = oldArray.slice();

newArray[2] = 'jhdbjhdjhd';
console.log(newArray);
console.log(oldArray);

const video = ['youTube', 'vimeo', 'rutube'],
      blogs = ['wordpress', 'livejounal', 'blogger'],
      internet = [ ...video, 'fb', ...blogs, 'instagram'];
      
console.log(internet);

function log(a, b, c) {    
    console.log(a);
    console.log(b);
    console.log(c);
}
const num = [5, 6, 4];

log(...num);

const array = ['a', 'b'];

const newArray = [...array];


const q = { 
    one: 45,
    two: 75
};

const newObj = {...q};*/


/*let str = 'some';
let strObj = new String(str);

console.dir([1, 2, 3]);

const soldier = {
    health: 400,
    armor: 150,
    sayHello: function() {
        console.log('hello');
    }
};

const john = Object.create(soldier);*/

/*const john = {
    halth: 100
};*/

/*john.__proto__  = soldier;
Object.setPrototypeOf(john, soldier);*/
/*console.log(john.armor);*/
/*john.sayHello();*/