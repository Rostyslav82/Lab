//LAB1
/*var cows = prompt("How many cows do you have?, 5");
var horses = prompt("How many horses do you have?, 3");
var operator = prompt("Enter an operator");
console.log(typeof operator);
console.log(typeof parseInt(operator));
console.log(typeof parseInt(horses));
console.log(typeof parseInt(cows));
alert(eval(cows + operator + horses));
*/
//LAB2
/*
var numb =+prompt('Enter the number');
console.log(typeof numb);
if(numb >= 0 && numb <= 59){
    alert('FX');
}else if (numb >= 60 && numb <= 64){
    alert('E');
}else if (numb >=65 && numb <= 74){
    alert('D');
}else if (numb >=75 && numb <= 84){
    alert('C');
} else if (numb >=85 && numb <= 94){
    alert('B');
} else if(numb >=95 && numb <= 100){
    alert('A');
}
*/
//LAB3
/*
var car = prompt('Enter the number', "Renault");
switch (car){
    case "Renault":
        alert("Let's ride on Renault!");
        break;
    case "Lada":
        alert("Let's ride on Lada!");
        break;
    case "Opel":
        alert("Let's ride on Opel!");
        break;
    case "Volvo":
        alert("Let's ride on Volvo!");
        break;
    default:
        alert("Sorry!");
        break;
}
*/
//LAB4
/*
var Math = prompt('Math', 65);
var Science = prompt('Science', 65);
var History = prompt('History', 65);
var Chemistry = prompt('Chemistry',65);
var Literature = prompt('Literature',65);
*/
//LAB5
var car = {};
var allCars = [];
var cName = document.getElementById("fName");
var model = document.getElementById("mName");
var engine = document.getElementById("engine");

function submitResult(){
    car.name = cName.value;
    car.model = model.value;
    car.engine = engine.value;
    console.log(car);
    allCars.push(car);
    console.log(allCars);
    cName.value = "";
    model.value = "";
    engine.value ="";
}

