//FUNCTION CONSTRUCTOR

/*var john = {
    name: 'John',
    yearOfBirth: 1990,
    job :'teacher'
};*/
//function constructor write capital first letter
/*var Person = function(name, yearOfBirth, job){
    this.name = name;
    this.yearOfBirth = yearOfBirth;
    this.job = job;
}

Person.prototype.calculateAge =function(){
    console.log(2019-this.yearOfBirth);
}
Person.prototype.lastName = 'Phan';

var john = new Person('John', '1990', 'teacher');
var jane = new Person('Jane','2000','designer');
var duong = new Person('Duong','2000','student');

john.calculateAge();
jane.calculateAge();
duong.calculateAge();

console.log(john.lastName);
console.log(jane.lastName);
console.log(duong.lastName);*/

//OBJECT.CREATE

/*var personProto={
    calculateAge: function(){
        console.log(2019-this.yearOfBirth);
    }
}

var john = Object.create(personProto);
john.name = 'John';
john.yearOfBirth = 1990;
john.job = 'teacher';

console.log(john.calculateAge());

var duong = Object.create(personProto,{
    name: {value: 'Duong'},
    yearOfBirth: {value: '2000'},
    job: {value: 'student'}
});*/

//PRIMITIVES VS OBJECTS

//numbers, bool, string, null, undefined is Primitives
//primitives
/*
var a = 19;
var b = a;
a = 46;
console.log(a, b);

//objects
var obj1 = {
    name: 'John',
    age: 26,
}

var obj2 = obj1;
obj1.age = 30;
console.log(obj1.age);
console.log(obj2.age);
*/

//function
//var age = 28
//var obj = {
//    name: 'Duong',
//    city: 'Vung Tau',
//}
//
//
//function change(a,b){
//    a = 30;
//    b.city = 'San Francisco';
//}
//
//change(age,obj);
//
//console.log(age);
//console.log(obj.city); 

//LECTURE: PASSING FUNCTION AS ARGUMENTS
//HAY

/*var years = [1991, 1959, 1969, 2000, 1989];

function arrayCalc(arr, fn){
    var arrRes = [];
    for(var i = 0; i<arr.length;i++){
        arrRes.push(fn(arr[i]));
    }
    return arrRes;
}

function isFullAge(el){
    return el >= 18
}

function calculateAge(el){
    return 2019 - el;
}

console.log(arrayCalc(years,calculateAge));


var fullAges = arrayCalc(years,isFullAge);
console.log(fullAges)*/


//LECTURE: FUNCTIONS RETURNING FUNCTIONS

/*function interviewQuestion(job){
    if(job==='designer')
    {
        return function(name){
            console.log(name + ", can you explain what UX design is? ");
        }
    }
    else if(job=="teacher")
    {
        return function(name){
            console.log("what subject do you teach ,"+name);
        }
    }
    else
    {
        return function(name){
            console.log("what do you do?" + name);
        }
    }
}

var teacherQuestion  = interviewQuestion("student");

teacherQuestion("Duong");
console.log(interviewQuestion("teacher")("me phuong"))*/

//LECTURE: IIFE (immediately invoked function expression)

/*(function(){
    var score = Math.random() * 10;
    console.log(score>=5);
})();


(function(goodLuck){
    var score = Math.random() * 10;
    console.log(score>=5-goodLuck);
})(5);*/
//for data privacy

//LECTURE: CLOSURES
//inner function can use variable of outer function that have already returned.
/*function retirement(retirementAge){
    var a = ' years left until retirement';
    return function(yearOfBirth){
        var age = 2019 - yearOfBirth;
        console.log((retirementAge - age)+a)
    }
}

retirement(66)(2000);*/

/*
function interviewQuestion(job){
    return function(name){
        if(job==="desinger")
            console.log(name + "can you please explain what UX design is? ", +name);
        else if(job ==="teacher")
            console.log("what subject do you teach? " + name);
        else
            console.log("what do you do? ");
    }

}

interviewQuestion("teacher")("duong");*/

//LECTURE: BIND, CALL AND APPLY

/*
var john = {
    name: 'John',
    age: 26,
    job: 'teacher',
    presentation: function(style, timeOfDay) {
        if (style === 'formal') {
            console.log('Good ' + timeOfDay + ', Ladies and gentlemen! I\'m ' +  this.name + ', I\'m a ' + this.job + ' and I\'m ' + this.age + ' years old.');
        } else if (style === 'friendly') {
            console.log('Hey! What\'s up? I\'m ' +  this.name + ', I\'m a ' + this.job + ' and I\'m ' + this.age + ' years old. Have a nice ' + timeOfDay + '.');
        }
    }
};

var emily = {
    name: 'Emily',
    age: 35,
    job: 'designer'
};

john.presentation('formal', 'morning');

john.presentation.call(emily, 'friendly', 'afternoon');

//john.presentation.apply(emily, ['friendly', 'afternoon']);

var johnFriendly = john.presentation.bind(john, 'friendly');

johnFriendly('morning');
johnFriendly('night');

var emilyFormal = john.presentation.bind(emily, 'formal');
emilyFormal('afternoon');


// Another cool example
var years = [1990, 1965, 1937, 2005, 1998];

function arrayCalc(arr, fn) {
    var arrRes = [];
    for (var i = 0; i < arr.length; i++) {
        arrRes.push(fn(arr[i]));
    }
    return arrRes;
}

function calculateAge(el) {
    return 2016 - el;
}

function isFullAge(limit, el) {
    return el >= limit;
}

var ages = arrayCalc(years, calculateAge);
var fullJapan = arrayCalc(ages, isFullAge.bind(this, 20));
console.log(ages);
console.log(fullJapan);
*/


//GAME
(function(){

    var scoreNow = 0;
    
    var Question = function(question,displayAns,realAns){
        this.question = question;
        this.displayAns = displayAns;
        this.realAns = realAns;
    }
    Question.prototype.displayQuestion = function(){
        console.log(this.question)
        for(var i = 0; i<this.displayAns.length;i++)
            console.log(i + ": " +this.displayAns[i]);
    }

    Question.prototype.checkAns = function(playerAns){
        if(playerAns == this.realAns)
        {
            console.log("Correct Answer!!!");
            scoreNow++;
        }
        else
            console.log("Incorrect Answer -.- ");
    }

    var q1 = new Question('Is JavaScript the coolest programming language in the world?',
                          ['Yes', 'No'],
                          0);

    var q2 = new Question('What is the name of this course\'s teacher?',
                          ['John', 'Micheal', 'Jonas'],
                          2);

    var q3 = new Question('What does best describe coding?',
                          ['Boring', 'Hard', 'Fun', 'Tediuos'],
                          2);

    var questions = [q1,q2,q3];



    function nextQuestion(){
        var q = Math.floor(Math.random() * questions.length);

        questions[q].displayQuestion();
        var x = prompt("Type your answer (just numbers) ");
        if(x != "exit")
        {
            questions[q].checkAns(x);
            console.log("Present Score is: " + scoreNow);
            nextQuestion();
        }
    }
    nextQuestion();
})();


