//LECTURE: LET AND CONST

//ES5 
/*var name5  = 'Duong Phan';
var age5 = 23;
name5 = 'Duong Nguyen';
console.log(name5);

//ES6
const name6 = 'Duong Phan';//immutable
let age6 = 23;//muatable
name6 = 'Duong Nguyen';
consle.log(name6);*/

//ES5 
//function scoped
/*function driversLicence5(passedTest){
    if(passedTest){
        //console.log(firstName);
        var firstName = 'John';
        var yearOfBirth = 1990;
    }

    console.log(firstName + ', born in ' +yearOfBirth +', is now offically allowed to drive a car.')
}

driversLicence5(true);


//ES6
//block-scoped
function driversLicence6(passedTest){
    //so declare outside of block
    //console.log(firstName);
    let firstName;
    const yearOfBirth = 1990;
    if(passedTest){
        firstName = 'John';

    }
    console.log(firstName + ', born in ' +yearOfBirth +', is now offically allowed to drive a car.')
}

driversLicence6(true);

let i = 23;
for (let i = 0; i < 5; i++){
    console.log(i);
}
console.log(i);*/

//1 2 3 4 23

//if toggle let with var : 1 2 3 4 5

///////////////////////////////////////
//LECTURE: BLOCKS AND IIFEs

//ES6
/*{
    const a = 1;
    let b = 2;
    var c = 3;
}
console.log(c);//function scoped so have no error
console.log(a + b);// error

//ES5
(function(){
    var c = 3;
})();

console.log(c);*/


///////////////////////////////////////
//LECTURE: STRING

/*let firstName = 'John';
let lastName = 'Smith';
const yearOfBirth = 1990;
function calcAge(year){
    return 2019 - year;
}

//ES5
console.log('This is '+firstName + ' ' +lastName+ '. He was born in ' + yearOfBirth + '. Today, he is '+ calcAge(yearOfBirth) + ' years old.');

//ES6 (template liternal)

console.log(`This is ${firstName} ${lastName}. He was born in ${yearOfBirth}. Today, he is ${calcAge(yearOfBirth)} years old.`)

const n = `${firstName} ${lastName}`;
console.log(n.startsWith('J'));
console.log(n.endsWith('Sm'));
console.log(n.includes(' '));//
console.log(`${firstName} `.repeat(5));*/


///////////////////////////////////////
//LECTURE: ARROW FUNCTION

/*const years =[1990, 1965, 1982, 1937];

//ES5
var ages5 = years.map(function(el){
    return 2016 - el;
});

console.log(ages5);

//ES6
let ages6 = years.map(el => 2016 - el);
console.log(ages6);

ages6 = years.map((el,index) => `Age element index ${index} is ${2016 - el}`);
console.log(ages6);


age6 = years.map((el,index) =>{
    const now = new Date().getFullYear();
    const age = now - el;
    return `Age element index ${index} is ${age}`;
});
console.log(ages6);*/

/////////////////////////////////
//LECTURE: ARROW FUNCTION 2

//ES5
/*
var box5 = {
    color: 'green',
    position: 1,
    clickMe: function(){
        var self = this; document.querySelector('.green').addEventListener('click',function(){
            var str = 'This is number ' + self.position + ' and it is ' + self.color;
            alert(str);
        })
    }
}

box5.clickMe();

//ES6
const box6 = {
    color: 'green',
    position: 1,
    clickMe: function(){
        document.querySelector('.green').addEventListener('click',() => {
            var str = 'This is number ' + this.position + ' and it is ' + this.color;
            alert(str);
        });
    }
}

box6.clickMe();
*/

////ES6
/*this.color = 'blue';
const box66 = {
    color: 'green',
    position: 1,
    clickMe: () => {
        document.querySelector('.green').addEventListener('click',() => {
            var str = 'This is number ' + this.position + ' and it is ' + this.color;
            alert(str);
        });
    }
}

box66.clickMe();*/

/*function Person(name){
    this.name = name;
}
//ES5
Person.prototype.myFriends5 = function(friends){
    //var self = this;
    var arr = friends.map(function(el){
       return this.name + ' is friends with '+ el; 
    }.bind(this));

    console.log(arr);

}

var friends = ['Bob', 'Jane', 'Mark'];
new Person('John').myFriends5(friends);


//ES6
Person.prototype.myFriends6 = function(friends){
    //var self = this;
    var arr = friends.map((el) => {
       return `${this.name} is friends with ${el}`; 
    });

    console.log(arr);

}

new Person('Mike').myFriends6(friends);*/

/////////////////////////////////
//LECTURE: DESTRUCTURING

//ES5

/*var john = ['john' , 26];
var name = john[0];
var age = john[1];

//ES6
const [name6 ,year] = ['John',26];
console.log(name6 , year);

const obj = {
    firstName: 'John',
    lastName: 'Smith',
}

const {firstName, lastName } = obj;
console.log(firstName, lastName);


const {firstName: a, lastName: b } = obj;
console.log(a, b);*/

/*function calcAgeRetirement(year){
    const age = new Date().getFullYear() -year;
    return [age, 65 -age];
}

const [age, retirement] = calcAgeRetirement(1990);
console.log(age,retirement);*/


/////////////////////////////////
//LECTURE: ARRAY

/*const boxes = document.querySelectorAll('.box');*/

//ES5
/*var boxesArr5 = Array.prototype.slice.call(boxes);//convert Nodelist -> array

boxesArr5.forEach(function(cur){
    cur.style.backgroundColor = 'dodgerblue';
});*/

//E6

/*const boxesArr6 = Array.from(boxes);//convert Nodelist -> array in ES6
boxesArr6.forEach((cur)=>{//cannot use break or continue : forEach and map
    cur.style.backgroundColor = 'dodgerblue';
});*/

//ES5

/*for(var i = 0;i<boxesArr5.length;i++){
    if(boxesArr5[i].className === 'box blue'){
        continue;
    }else{
        boxesArr5[i].textContent = "I changed to blue";
    }
}*/

//ES6
/*for (const cur of boxesArr6){
    if(cur.className.includes('blue')){
        continue;
    }else{
        cur.textContent = "I changed to blue!!!";
    }
}*/
//ES5
/*
var ages = [12, 17, 8, 21, 14, 11];

var full = ages.map(function(cur){
    return cur>=18;
})
console.log(full);
console.log(full.indexOf(true));
console.log(ages[full.indexOf(true)])

//ES6
console.log(ages.findIndex(cur => cur>=18));
console.log(ages.find(cur => cur>= 18));
*/

/////////////////////////////////////
// LECTURE: SPREAD OPERATOR

/*
function addFourAges (a, b, c, d){
    return a + b + c + d;
}
var ages = [18, 30, 12, 21];
//ES5
/*var sum1 = addFourAges(18, 30, 12, 21);
console.log(sum1);

sum2 = addFourAges.apply(null, ages);
console.log(sum2);*/

//ES6
/*
const sum3  = addFourAges(...ages);
console.log(sum3);
console.log(...ages);

const familySmith = ['John', 'Jane', 'Mark'];
const familyMiller = ['Mary', 'Bob', 'Ann'];
const bigFamily = [...familySmith, 'Lily', ...familyMiller];
console.log(bigFamily);

const h = document.querySelector('h1');
const boxes = document.querySelectorAll('.box');
const all = [h,...boxes];
console.log(all);

all.forEach(cur => cur.style.color = 'purple');

*/

/////////////////////////////////////
// LECTURE: REST PARAMATERS

//ES5   

/*function isFullAge5() {
    //console.log(arguments);
    var agrsArr = Array.prototype.slice.call(arguments);

    agrsArr.forEach(function(cur){
        console.log((2016-cur) >= 18); 
    });
}

isFullAge5(1990, 1999, 1965);*/

//ES6

/*function isFullAge6(limit,...years){
    years.forEach(cur => console.log((2019-cur)>=limit));
}

isFullAge6(21,1990, 1999, 1965);*/


/////////////////////////////////////
//LECTUREl DEFAULT PARAMATERS
//ES5

/*
function SmithPerson(firstName,yearOfBirth,lastName,nationality){
    if(lastName===undefined){
        lastName = 'Smith';
    }
    if(nationality===undefined){
        nationality = 'american';
    }
    this.fileName = firstName;
    this.lastName = lastName;
    this.yearOfBirth = yearOfBirth;
    this.nationality = nationality;
}

var john = new SmithPerson('John',1990)
console.log(john);
var emily = new SmithPerson('Emily',2000,'Smith','Spain')
console.log(emily)
*/

//ES6

/*function SmithPerson(firstName,yearOfBirth,lastName = 'Smith',nationality = 'american'){
    this.fileName = firstName;
    this.lastName = lastName;
    this.yearOfBirth = yearOfBirth;
    this.nationality = nationality;
}


var john = new SmithPerson('John',1990)
console.log(john);
var emily = new SmithPerson('Emily',2000,'daiz','spain')
console.log(emily)*/

/////////////////////////////////////
//LECTURE: MAP

/*const question = new Map();

question.set('question', 'What is the offcial name of lasest major JS verson?');
question.set(1,'ES5');
question.set(2,'ES6');
question.set(3,'ES7');
question.set(4,'ES2015');
question.set('correct',4);
question.set(true,'Correct answer');
question.set(false,'Wrong answer');

console.log(question.get('question'));
console.log(question.size);

if(question.has(3)){
    console.log('Answer 4 is here');
}

console.log(question.keys());

question.forEach((value,key) => console.log(`This is ${key} and it is set to ${value}`))

for(let [key, value] of question.entries()){
    if(typeof(key)==='number'){
        console.log(`Answer ${key}: ${value}`)
    }
}

const ans = parseInt(prompt("What is your choice"))

console.log(question.get(ans===question.get('correct')))*/

/////////////////////////////////////
//LECTURE: CLASSES

//ES5

/*
var Person5 = function(name, yearOfBirth, job){
    this.name = name;
    this.yearOfBirth = yearOfBirth;
    this.job = job;
}

Person5.prototype.calculateAge = function(){
    var age = new Date().getFullYear() - this.yearOfBirth;
    console.log(age);
}

var john5 = new Person5('john', 1990, 'teacher');
john5.calculateAge();
*/

//ES6
/*
class Person6{
    constructor (name, yearOfBirth, job){
        this.name = name;
        this.yearOfBirth = yearOfBirth;
        this.job = job;
    }
    calculateAge(){
        var age = new Date().getFullYear() - this.yearOfBirth;
        console.log(age);
    }
    static greeting(){
        console.log('Hey there');
    }
}

var john6 = new Person6('john', 1990, 'teacher');
john6.calculateAge();
Person6.greeting();
*/
/////////////////////////////////////
//LECTURE: CLASSES WITH SUBCLASS (INHERITANCE)

//ES5
/*var Person5 = function(name, yearOfBirth, job){
    this.name = name;
    this.yearOfBirth = yearOfBirth;
    this.job = job;
}

Person5.prototype.calculateAge = function(){
    var age = new Date().getFullYear() - this.yearOfBirth;
    console.log(age);
}

var Athlete5 = function(name , yearOfBirth,job,olymicGames,metals){
    Person5.call(this,name,yearOfBirth,job);
    this.olymicGames = olymicGames;
    this.metals = metals;
}

Athlete5.prototype = Object.create(Person5.prototype);

Athlete5.prototype.wonMetal = function(){
    this.metals++;
    console.log(this.metals);
}

var johnAthlete5 = new Athlete5('John',1950,'swimmer',3,10);

johnAthlete5.calculateAge();
johnAthlete5.wonMetal();*/

//ES6

/*class Person6{
    constructor (name, yearOfBirth, job){
        this.name = name;
        this.yearOfBirth = yearOfBirth;
        this.job = job;
    }
    calculateAge(){
        var age = new Date().getFullYear() - this.yearOfBirth;
        console.log(age);
    }
}

class Athlete6 extends Person6{
    constructor (name,yearOfBirth,job,olympicGames,metals){
        super(name, yearOfBirth, job);
        this.olympicGames = this.olympicGames;
        this.metals = metals;
    }
    wonMetal(){
        this.metals++;
        console.log(this.metals);

    }
}

const johnAthlete6 = new Athlete6('john',1990,'swimmer',3,10);

johnAthlete6.wonMetal();
johnAthlete6.calculateAge();*/

class Town{
    constructor (name, buildYear){
        this.name = name;
        this.buildYear = buildYear;
    }
    calcParkAverageAge(...Parks){

    }
    parksHaveMore1000(){

    }
    totalandAverageLengthOfTownStreets(){

    }
}

class Park extends Town{
    constructor(name, buildYear,parkArea,numberOfTree){
        super(name, buildYear);
        this.parkArea = parkArea;
        this.numberOfTree = numberOfTree;
    }
    treeDesity(){
        const desity = this.numberOfTree/this.parkArea;
        console.log(`${this.name} has a tree desity of ${desity} trees per square km` )
    }
}

class Street extends Town{
    constructor(name, buildYear,length,size = 3){
        super(name, buildYear);
        this.length = length;
        this.size = size
    }
    classifyStreet(size){
        const classifyS = new Map();
        classifyS.set(1,'tiny');
        classifyS.set(2,'small');
        classifyS.set(3,'normal');
        classifyS.set(4,'big');
        classifyS.set(5,'huge');
        return classifyS.get(size);
    }
}

const allParks = [new Park('Green Park', 1987, 0.2, 215),
                  new Park('National Park', 1894, 2.9, 3541),
                  new Park('Oak Park', 1953, 0.4, 949)];

const allStreets = [new Street('Ocean Avenue', 1999, 1.1, 4),
                    new Street('Evergreen Street', 2008, 2.7, 2),
                    new Street('4th Street', 2015, 0.8),
                    new Street('Sunset Boulevard', 1982, 2.5, 5)];

function average(arr){
    let sum = 0;
    arr.forEach(cur=>{
        sum += cur;
    })
    return [sum,sum/arr.length];
}

function reportPark(p){
    console.log("----PARKS REPORT----");

    let ages = p.map(el => new Date().getFullYear() - el.buildYear);
    let [total,avgAges] = average(ages)
    console.log(`Our ${p.length} parks have an an average age of ${avgAges} years.`);

    p.forEach(el => `${el.name} has a tree desity of ${el.treeDesity()} trees per square km.`)

    p.forEach(el => {
        if(el.numberOfTree>=1000)
            console.log(`${el.name} has more than 1000 trees.`);
    });
}

function reportStreet(s){
    console.log('----STREETS REPORT-----');
    
    lengths = s.map(el => el.length);
    let [total,avgLength] = average(lengths);
    console.log(`Our ${s.length} streets have a total length of ${total} km , with an average of ${avgLength} km. `);
    
    s.forEach(el => console.log(`${el.name}, build in ${el.buildYear}, is a ${el.classifyStreet(el.size)} street.`))
    
}
reportPark(allParks);
reportStreet(allStreets);









