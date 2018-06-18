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
var regPass = /^([а-яА-Яa-zA-Z0-9_\-\!\@\+]{6})/;
//Validation the entered data by the user.
function validate() {
    var name = document.getElementById("name").value;
    var mail = document.getElementById("mail").value;
    var pass = document.getElementById("password").value;
    var repPass = document.getElementById("repPassword").value;

    if (name.length < 0 || regName.test(name) == false){
        document.getElementById("name").className = "error";
        document.getElementById("errorName").innerHTML = "Bad name. Please try again.";
        return false;
    }
    document.getElementById("name").className = "";
    document.getElementById("errorName").innerHTML = "";
    if(pass.length < 0 || regPass.test(pass) == false){
        document.getElementById("password").className = "error";
        document.getElementById("errorPass").innerHTML = "Bad pass. Please try again.";
        return false;
    }
    document.getElementById("password").className = "";
    document.getElementById("errorPass").innerHTML = "";
    if(regPass.length < 0 || pass !== repPass){
        document.getElementById("repPassword").className = "error";
        document.getElementById("errorPass").innerHTML = "Bad re-pass. Please try again.";
        return false;
    }
    document.getElementById("repPassword").className = "";
    document.getElementById("errorPass").innerHTML = "";
   if(mail.length < 0 || regMail.test(mail) == false){
       document.getElementById("mail").className = "error";
       document.getElementById("errorMail").innerHTML = "Bad e-mail. Please try again.";
       return false;
   }
    document.getElementById("mail").className = "";
    document.getElementById("errorMail").innerHTML = "";
    if (true) {
        alert(" ВІТАЄМО " + name + " ! Ви успішно зареєструвались. ");
        setData();
        document.getElementById("name").value = "";
        document.getElementById("mail").value = "";
        document.getElementById("password").value = "";
        document.getElementById("repPassword").value = "";
        document.getElementById("name").className = "";
        document.getElementById("mail").className = "";
        document.getElementById("password").className = "";
        document.getElementById("repPassword").className = "";
        document.getElementById("errorName").innerHTML = "";
        document.getElementById("errorMail").innerHTML = "";
        document.getElementById("errorPass").innerHTML = "";
        closeFormWin();

    }
}
//Put entered user data in localStorage.
function setData (){
    console.log ("Відправка даних на сервер...");
    var name = document.getElementById("name").value;
    var mail = document.getElementById("mail").value;
    var pass = document.getElementById("password").value;
    var data = {userName: name, userMail: mail, userPass: pass};

    var stringData = JSON.stringify(data);
    localStorage.setItem("data", stringData);
}
//Create <p> teg and put text with localStorage.
function getData() {
    var parsedData = JSON.parse(localStorage.getItem("data"));
    var inputValueName = parsedData.userName;
    var inputValueMail = parsedData.userMail;
    var inputValuePass = parsedData.userPass;
    document.getElementById("userTextMain").innerHTML = "USER INFORMATION:";
    document.getElementById("userDataText").innerHTML = "NAME:  " + inputValueName;
    document.getElementById("MailDataText").innerHTML = "E-MAIL:  " + inputValueMail;
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
        getData();
        document.getElementById("userNameNav").innerHTML = "<img class=\"userIcon\" src=\"img\\user-icon3.png\"><a id=\"userDataButtonNav\"class=\"butData\"style=\"display: none\">"+"Welcome  " + user + "  !   " + "</a>";
        document.getElementById("logButtonNav").style.display = "none";
        document.getElementById("regButtonNav").style.display = "none";
        document.getElementById("logOutButtonNav").style.display = "block";
        document.getElementById("userDataButtonNav").style.display = "block";
        document.getElementById("mailEnter").value = "";
        document.getElementById("passwordEnter").value = "";
        document.getElementById("passwordEnter").className = "";
        document.getElementById("errorMailEnter").innerHTML = "";

        if (true){
            closeFormWin();
        }
    } else {
        if (mail.length > 2){
            document.getElementById("mailEnter").className = "";
        } else if (pass ==""){
            document.getElementById("passwordEnter").className = "error";
        }
    }
}
//Log out user.
function logOutWin() {
    document.getElementById("userNameNav").innerHTML = "";
    document.getElementById("container").style.display = "";
    document.getElementById("logButtonNav").style.display = "block";
    document.getElementById("regButtonNav").style.display = "block";
    document.getElementById("logOutButtonNav").style.display = "none";
    document.getElementById("userDataText").innerHTML = "";
    document.getElementById("MailDataText").innerHTML = "";
    document.getElementById("userTextMain").innerHTML = "";
    document.getElementById("userDataButtonNav").style.display = "none";
}
//Close modal windows - X
function closeFormWin() {
    modalReg.style.top = "-100%";
    modalEnter.style.top = "-100%";
    overflow.remove();
}
//Function for modal windows - data user
window.onload = function(){
    document.querySelector('#userNameNav').onmouseover = menuShow;
    document.querySelector('#userNameNav').onmouseout = menuHide;
    document.onmouseout = function (event) {
        console.log(event);
    }

    function menuShow(){
        document.querySelector('#menu').style.left = '0';
    }
    function menuHide(){
        document.querySelector('#menu').style.left = '-230px';
    }
};
function fw() {
        document.getElementById('main').style.display = "none";
        document.getElementById('fw').style.display = "block";
        document.getElementById('about').style.display = "none";
}
function main() {
        document.getElementById('main').style.display = "block";
        document.getElementById('fw').style.display = "none";
        document.getElementById('about').style.display = "none";
}
function about() {
        document.getElementById('main').style.display = "none";
        document.getElementById('fw').style.display = "none";
        document.getElementById('about').style.display = "block";
}
function changeLog() {
    //closeFormWin();
    openWinEnter();
}