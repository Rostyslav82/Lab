//Задача 1
function calculate(){
    var num1 = document.getElementById("num1").value;
    var num2 = document.getElementById("num2").value;
    var error = /^([0-1000])/;
    num1 = parseInt(num1);
    num2 = parseInt(num2);
    if (num1 > num2){
        alert ("Більше число: " + num1);
    } else if (num1 < num2) {
        alert ("Більше число: " + num2);
    } else if (num1 == "" || num1 == "") {
        alert("Ви нічого не ввели.");
    } else if (num1 == num2) {
        alert("Числа рівні");
    } else if (error.test(num1) == false || error.test(num2) == false) {
        alert ("Введіть цифри будь ласка!");
    }
}
//Задача 2
function apartment (){
    var num = document.getElementById("apartment").value;
    var num = parseInt(num);
        if (num >= 1 && num <= 20){
            alert("Перший підїзд");
        } else if (num >= 21 && num <= 48){
            alert("Другий підїзд");
        } else if (num >= 49 && num <= 90){
            alert("Третій підїзд");
        } else {
            alert("Інформація відсутня. Спобуйте ще раз!");
        }
}
//Задача 3
function identification (){
    var login = document.getElementById("login").value;
    var pass = document.getElementById("password").value;
    if (login == "ivan" || pass == "334455"){
        alert ("Добро пожаловать");
    } else if (login == "alex" || pass == "777"){
        alert ("Добро пожаловать");
    } else if (login == "petr" || pass =="b5678"){
        alert ("Добро пожаловать");
    } else {
        alert ("Вход воспрещен");
    }
}
//Задача 4
function dateOfBirth () {
    var date = document.getElementById("date").value;
    var year = 2018 - date;
    var dateBirth = /^([0-9]{4})/;
    if (dateBirth.test(date) == false){
        alert ("Введіть тільки цифри, згідно формату");
    } else if (year > 16){
        alert ("Добро пожаловать!");
    } else {
        alert ("Вход воспрещен!");
    }
}
//Задача 5
function experience (){
    var exp = document.getElementById("experience").value;
    exp = parseInt(exp);
    if (exp < 0){
        alert ("Помилка! Повторіть введення.");
    } else if (exp >= 20){
        alert ("Надбавка за стаж - 25%");
    } else if (exp >=0 && exp < 3) {
        alert ("Надбавка за стаж - 0%");
    } else if (exp >=3 && exp < 10) {
        alert("Надбавка за стаж - 10%");
    } else if (exp >=10 && exp < 20) {
        alert("Надбавка за стаж - 20%");
    }
}
//Задача 6
