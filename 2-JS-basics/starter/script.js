//console.log("Hello worldabc");

//1. DATA TYPE
/*var firstName = "Phan";
console.log(firstName);
var lastName = "Duong";
var age= 18;
var fullAge =true;
var job;
console.log(lastName);
console.log(age);
console.log(job);
job = "Student";
console.log(job);

var $3year = 3;
console.log($3year) 


//2.Type Coercion

var firstName = 'Duong';
var Age  = 18;
var isMarried = false
console.log(firstName + ' ' + Age);
console.log(firstName + ' is a ' + Age + 'year Old' + job+'. Is he married? '+ isMarried)

// Variable mutation
Age = 'Twenty eight'
job = "Driver";
console.log(firstName + ' is a ' + Age + 'year Old' + job+'. Is he married? '+ isMarried)

var lastName1 = prompt('What is his last name? ');
console.log(lastName1);*/

//Operator
//var age = 19
//var ageew = 20
//var b = age>ageew;
//console.log(typeof age);
//console.log(b);


//OPERATOR PRECEDENCE

/*var now = 2019;
var year =2000;
var fullAge = 19;
var isFullage = now - year >= fullAge;
console.log(isFullage);

var x,y;
x = y = (3+5)*4-6;
console.log(x , y);*/

//CODING CHALLENGE1
//var markMass,johnMark,markHeight,johnHeight;
//markMass = prompt("nhap can nang cua Mark");
//markHeight = prompt("nhap chieu cao cua Mark");
//johnMass = prompt("nhap can nang cua John");
//johnHeight = prompt("nhap chieu cao cua John");
//
//var markBMI = markMass/(markHeight**2);
//var johnBMI = johnMass/(johnHeight**2);
//var isMarkbiggerJohn = markBMI>johnBMI;
//console.log(markBMI);
//console.log(johnBMI);
//console.log(isMarkbiggerJohn);


//IFELSE
//
//var firstName = "Phan";
//var civilStatus = "single";
//
//if(civilStatus === "married")
//{
//    console.log(firstName + " is married");
//}
//else
//{
//    console.log(firstName + " will hopefully marry soon");
//}

//THE TERNANY OPERATOR

//var firstName = "John";
//var age = 16;
//age>=18 ? console.log(firstName + " drink beer.") : console.log(firstName + "drink juice");
//
//var drink = age >=18 ? "beer" : "juice";
//console.log(drink);

//SWITCH STATEMENTS
//var firstName = "Duong";
//var job = "teacher";
//switch(job){
//    case "teacher": case "instructor":
//        console.log(firstName + " teaches kids how to code");
//        break;
//    case "driver":
//        console.log(firstName + " drives a n uber in USA");
//        break;
//    case "designer":
//        console.log(firstName + " designs a beautiful website");
//        break;
//    default:
//        console.log(firstName + " is unemployee");
//}

//TRUTHY AND FALSY VALUES AND EQUALITY OPERATORS
//
//var height = '';
//
//if (height || height === 0){
//    console.log("Variable is defined");
//}
//else{
//    console.log("Variable has NOT been defined");
//}

//23=='23' but 23!==='23'

//CODING CHALLENGE 2
/*
var John1 = 89,John2 = 120, John3 = 103, Mike1 = 116, Mike2 = 94, Mike3 = 123;
var averageJohn = (John1 + John2 + John3) / 3;
var averageMike = (Mike1 + Mike2 + Mike3) / 3;
averageJohn > averageMike ? console.log("John win Mike") : console.log("Mike win John");

var averageMary = (97+134+105)/3;
console.log(averageJohn, averageMike, averageMary);
if(averageJohn > averageMike){
    if(averageMary>averageJohn)
        console.log("Mary win");
    else
        console.log("John win");
}
else{
     if(averageMary>averageMike)
        console.log("Mary win");
    else
        console.log("Mike win");
}*/


//FUNCTION
//function declaration
//function calculateAge(birthYear){
//    return 2019 - birthYear;
//}
//
//console.log(calculateAge(2000))
//


//FUNCTION STATEMENTS AND EXPRESSION

//function expression
/*
var whatDoYouDo = function(job, firstName){
    switch(job){
        case "teacher":
            return firstName + " teaches kid how to code";
        case "driver":
            return firstName + " drives Uber in USA";
        case "designer":
            return firstName + " creates a beautiful website";
        default:
            return firstName + " does sth else";
    }
}

console.log(whatDoYouDo("teacher","duong"));
console.log(whatDoYouDo("driver","tan"));
console.log(whatDoYouDo("designer","baobe"));
*/


//ARRAY
//initialize new array
/*
var names = ['duong', 'tan', 'bao be', 'vi bui'];
var years = new Array(1990,1969,2001,2000);

console.log(names.length);

//muate array data
names[1] = 'new tan';
names[names.length] = 'huy hai';
console.log(names);
*/


//different data type

/*var duong = ['phan thai duong', 'student', 2000, 19,181200200]
duong.push(false);
duong.unshift('mr');//add to begin of array
duong.pop();
duong.shift();//delete first element in array
console.log(duong);

console.log(duong.indexOf('student'))
*/

//CODING CHALLENGE 3

/*
var calculateTips = function(money)
{
    if(money<50)
        return money*0.2;
    else if(money>=50&&money<200)
        return money*0.15;
    else
        return money*0.1;
}

var bills = [124, 48, 268];
var tips  = new Array(0,0,0);
tips[0] = calculateTips(bills[0]);
tips[1] = calculateTips(bills[1]);
tips[2] = calculateTips(bills[2]);
var finalPaid = new Array();
finalPaid.push(bills[0]);
finalPaid.push(bills[1]);
finalPaid.push(bills[2]);
finalPaid[0]+=tips[0];
finalPaid[1]+=tips[1];
finalPaid[2]+=tips[2];

console.log(tips);
console.log(finalPaid);
*/

//OBJECTS AND PROPERTIES
/*
var duong = {
    lastName: 'duong',
    firstName: 'phan',
    age : 19,
    birthYear : 2000,
    family: ['me Phuong', 'bo Phuong', 'c Nhung', 'c Huong'],
    job: 'student',
    isMarried: false
};
console.log(duong);
console.log(duong.age);
console.log(duong['birthYear']);

duong.job = 'driver';
duong['isMarried']=true;
duong['favorite color']='blue';
console.log(duong);
*/

//OBJECTS AND METHODS

/*
var duong = {
    lastName: 'duong',
    firstName: 'phan',
    birthYear : 2000,
    family: ['me Phuong', 'bo Phuong', 'c Nhung', 'c Huong'],
    job: 'student',
    isMarried: false,
    calcAge: function(){
        this.age = 2019-this.birthYear;
    }
};
duong.calcAge();
console.log(duong.age);
*/

//CODING CHALLENGER 4

/*var mark = {
    fullname : "mark jackson",
    mass : 110,
    height : 1.95,
    calcBMI : function(){
        this.BMI = this.mass / this.height**2;
    }
}
var john = {
    fullname : "john phan",
    mass : 78,
    height : 1.69,
    calcBMI : function(){
        this.BMI = this.mass / this.height**2;
    }
}
mark.calcBMI();
john.calcBMI();
console.log(mark);
console.log(john);
if(mark.BMI>john.BMI)
    console.log(mark.fullname + " is higher BMI than " + john.fullname);
else if(mark.BMI<john.BMI)
    console.log(john.fullname + " is higher BMI than "+ mark.fullname);
else
    console.log("that is draw");*/


//LOOPS AND ITERATION

/*for (var i = 0;i < 10; i++)
    {
        console.log(i);
    }*/
/*
var names = ['duong', 'tan', 'bao be', 'vi bui'];

for(var i = 0;i<names.length;i++)
    console.log(names[i]);
var  i = 0 ;
while(i<names.length)
{
    console.log(names[i]);
    i++;
}
*/
/*
var duong = ['phan thai duong', 'student', 2000, 19,181200200]

for(var i = 0;i<duong.length;i++)
    {
        if(typeof duong[i]!=='string')
            continue;
        console.log(duong[i]);
    }*/


var john = {
    bills : [124, 48, 268, 180, 42],
    tips : [],
    finalPaid: [],
    calcTips : function()
    {
        for( var i = 0;i<this.bills.length;i++)
        {
            if(this.bills[i]<50)
                this.tips.push(0.2*this.bills[i]);
            else if(this.bills[i]>=50 && this.bills[i]<200)
                this.tips.push(0.15*this.bills[i]);
            else
                this.tips.push(0.1*this.bills[i]);
        }
    },
    calcFinalPaid : function()
    {
        var i = 0;
        while(i<this.bills.length)
        {
           this.finalPaid.push(this.bills[i]+this.tips[i]);
            i++;
        }
    }
}
john.calcTips();
john.calcFinalPaid();
console.log(john);


var mark = {
    bills : [77, 375, 110, 45],
    tips : [],
    finalPaid: [],
    calcTips : function()
    {
        for( var i = 0;i<this.bills.length;i++)
        {
            if(this.bills[i]<100)
                this.tips.push(0.2*this.bills[i]);
            else if(this.bills[i]>=100 && this.bills[i]<300)
                this.tips.push(0.1*this.bills[i]);
            else
                this.tips.push(0.25*this.bills[i]);
        }
    },
    calcFinalPaid : function()
    {
        var i = 0;
        while(i<this.bills.length)
        {
           this.finalPaid.push(this.bills[i]+this.tips[i]);
            i++;
        }
    }
}
mark.calcTips();
mark.calcFinalPaid();
console.log(mark);

var averageTips = function(array)
{
    var sum = 0;
    for(var i =0;i<array.length;i++)
        sum+=array[i];
    return sum/array.length;
}
var aveJohn = averageTips(john.tips);
var aveMark = averageTips(mark.tips);
console.log(aveJohn);
console.log(aveMark);
if(john>mark)
    console.log("john tips nhieu hon mark");
else
    console.log("mark tips nhieu hon john");




















