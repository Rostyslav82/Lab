//Registration Window.
var modalReg = document.querySelector('.modalReg');
var modalEnter = document.querySelector('.modalEnter');
var overflow = document.createElement('div');
function openWin() {
    overflow.className = "overflow";
    document.body.appendChild(overflow);
    var height = modalReg.offsetHeight;
    modalReg.style.marginTop = - height / 2 + "px";
    modalReg.style.top = "50%";
    closeWin();
}
//Close modal windows.
function closeWin() {
    if (!Element.prototype.remove) {
        Element.prototype.remove = function remove() {
            if (this.parentNode) {
                this.parentNode.removeChild(this);
            }
        };
    }
    overflow.onclick = function () {
        modalReg.style.top = "-100%";
        modalEnter.style.top = "-100%";
        overflow.remove();
    };
}
//Enter users.
function openWinEnter() {
    overflow.className = "overflow";
    document.body.appendChild(overflow);
    var height = modalEnter.offsetHeight;
    modalEnter.style.marginTop = - height / 2 + "px";
    modalEnter.style.top = "50%";
    closeWin();
}
//Validation rules.
var regMail = /^([a-zA-Z0-9_\.-]+)@([a-z0-9_\.-]+)\.([a-z\.]{2,6})$/;
var regName = /^([а-яА-Яa-zA-Z0-9_\-]{4})/;
var regSname = /^([а-яА-Яa-zA-Z0-9_\-])/;
var regPass = /^([а-яА-Яa-zA-Z0-9_\-\!\@\+]{6})/;
//Validation the entered data by the user.
function validate(){
    var fail = false;
    var name = document.getElementById("name").value;
    var surname = document.getElementById("s-name").value;
    var mail = document.getElementById("mail").value;
    var pass = document.getElementById("password").value;
    var repPass = document.getElementById("repPassword").value;


    if(regName.test(name) == false || name.length < 2){
        document.getElementById("name").className = "error";
        document.getElementById("errorName").innerHTML = "Bad name. Please try again.";
    }else if (regSname.test(surname) == false){
        document.getElementById("errorSurName").innerHTML = "Bad surname. Please try again.";
        document.getElementById("s-name").className = "error";
    }else if (regMail.test(mail) == false){
        document.getElementById("errorMail").innerHTML = "Bad e-mail. Please try again.";
        document.getElementById("mail").className = "error";
    }else if (regPass.test(pass) == false) {
        fail = "Перевірте правильність введених даних в полі: пароль";
        document.getElementById("password").className = "error";
    }else if (regPass.test(repPass) == false) {
        fail = "Перевірте правильність введених даних в полі: пароль повтор";
        document.getElementById("repPassword").className = "error";
        if (pass !== repPass){
            document.getElementById("repPassword").className = "error";
            fail = "Введений пароль не співпадає";
        }
    }
    if(fail) {
        alert(fail);
    } else {
        alert ("ВІТАЄМО " + name + " ! Ви успішно зареєструвались.");
        setData ();
        document.getElementById("name").value ="";
        document.getElementById("s-name").value = "";
        document.getElementById("mail").value = "";
        document.getElementById("password").value = "";
        document.getElementById("repPassword").value = "";
    }

}
//Put entered user data in localStorage.
function setData (){
    console.log ("Відправка даних на сервер");
    var name = document.getElementById("name").value;
    var surname = document.getElementById("s-name").value;
    var mail = document.getElementById("mail").value;
    var pass = document.getElementById("password").value;
    var data = {userName: name, userSurname: surname, userMail: mail, userPass: pass};
    var stringData = JSON.stringify(data);
    localStorage.setItem("data", stringData);
}
//Create <p> teg and put text with localStorage.
function getData() {
    var parsedData = JSON.parse(localStorage.getItem("data"));
    var inputValueName = parsedData.userName;
    var inputValueSurname = parsedData.userSurname;
    var inputValueMail = parsedData.userMail;
    var inputValuePass = parsedData.userPass;
    document.getElementById("userDataText").innerHTML = "USER NAME:  " + inputValueName;
    document.getElementById("SurnameDataText").innerHTML = "SURNAME USER:  " + inputValueSurname;
    document.getElementById("MailDataText").innerHTML = "E-MAIL USER:  " + inputValueMail;
    document.getElementById("PassDataText").innerHTML = "PASSWORD USER:  " + inputValuePass;
}
//Validation for registered users.
function validationEnter() {
    var mail = document.getElementById("mailEnter").value;
    var pass = document.getElementById("passwordEnter").value;
    var user = JSON.parse(localStorage.getItem("data")).userName;
if (mail =="" || pass =="") {
    document.getElementById("mailEnter").className = "error";
    document.getElementById("passwordEnter").className = "error";
    document.getElementById("errorMailEnter").innerHTML = "Bad mail or pass. Please try again.";
} else if (mail.length > 2){
    document.getElementById("mailEnter").className = "";
    document.getElementById("passwordEnter").className = "error";
    document.getElementById("errorMailEnter").innerHTML = "Bad pass. Please try again.";
}
    if (mail == JSON.parse(localStorage.getItem("data")).userMail && pass == JSON.parse(localStorage.getItem("data")).userPass) {
        document.getElementById("userNameNav").innerHTML = "Welcome  " + user + "  !";
        document.getElementById("logButtonNav").style.display = "none";
        document.getElementById("regButtonNav").style.display = "none";
        document.getElementById("logOutButtonNav").style.display = "block";
        document.getElementById("mailEnter").value = "";
        document.getElementById("passwordEnter").value = "";
        document.getElementById("passwordEnter").className = "";
        document.getElementById("errorMailEnter").innerHTML = "";
    } else {
        if (mail.length > 2){
            document.getElementById("mailEnter").className = "";
        } else if (pass ==""){
            document.getElementById("passwordEnter").className = "error";
        }
    }
    closeWin();
}
//Log out user.
function logOutWin() {
    document.getElementById("userNameNav").innerHTML = "";
    document.getElementById("logButtonNav").style.display = "block";
    document.getElementById("regButtonNav").style.display = "block";
    document.getElementById("logOutButtonNav").style.display = "none";
}
