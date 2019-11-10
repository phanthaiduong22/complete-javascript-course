///////////////////////////////////////
// Lecture: Hoisting
/*calculateAge(1999);


function calculateAge(year){
    console.log(2019-year);
}

var calcYearRetirement = function(year)
{
    console.log(65-(2019-year));
}


calcYearRetirement(2000) 

console.log(age);

var age = 23;

console.log(age);

function foo()
{
    console.log(age);
    var age = 65;

}
foo();*/


///////////////////////////////////////
// Lecture: Scoping


// First scoping example

/*
var a = 'Hello!';
first();

function first() {
    var b = 'Hi!';
    second();

    function second() {
        var c = 'Hey!';
        console.log(a + b + c);
    }
}
*/



// Example to show the differece between execution stack and scope chain

/*
var a = 'Hello!';
first();

function first() {
    var b = 'Hi!';
    second();

    function second() {
        var c = 'Hey!';
        third()
    }
}

function third() {
    var d = 'John';
    console.log(a + b + c + d);
}
*/



///////////////////////////////////////
// Lecture: The this keyword


//console.log(this);

/*function calculateAge(year){
    console.log(2019-year);
    console.log(this);
}

calculateAge(2000)*/

var duong = {
    name: 'duong',
    yearofBirth: function(){
        console.log(this);
    }
}

duong.yearofBirth();