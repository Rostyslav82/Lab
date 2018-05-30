//Registration Window.
var modal = document.querySelector('.modal');
var overflow = document.createElement('div');
function openWin() {
    overflow.className = "overflow";
    document.body.appendChild(overflow);
    var height = modal.offsetHeight;
    modal.style.marginTop = - height / 2 + "px";
    modal.style.top = "50%";
}

if (!Element.prototype.remove) {
    Element.prototype.remove = function remove() {
        if (this.parentNode) {
            this.parentNode.removeChild(this);
        }
    };
}
overflow.onclick = function () {
    modal.style.top = "-100%";
    overflow.remove();
}
//Validation rules.
var regMail = /^([a-zA-Z0-9_\.-]+)@([a-z0-9_\.-]+)\.([a-z\.]{2,6})$/;
var regName = /^([а-яА-Яa-zA-Z0-9_\-])/;
var regSname = /^([а-яА-Яa-zA-Z0-9_\-])/;
//Validation the entered data by the user.
function validate(){
    var fail = false;
    var name = document.getElementById("name").value;
    var surname = document.getElementById("s-name").value;
    var mail = document.getElementById("mail").value;

    if(regName.test(name) == false) {
        fail = "Перевірте правильність введених даних в полі: Ваше ім'я";
    }else if (regSname.test(surname) == false){
        fail = "Перевірте правильність введених даних в полі: Ваша фамілія";
    }else if (regMail.test(mail) == false){
        fail = "Перевірте правильність введених даних в полі: Ваш e-mail";
    }
    if(fail) {
        alert(fail);
        return false;
    } else {
        alert ("ВІТАЄМО " + name + " ! Ви успішно зареєструвались.");
        setData ();
        document.getElementById("name").value = " ";
        document.getElementById("s-name").value = " ";
        document.getElementById("mail").value = " ";
    }
}
//Put entered user data in localStorage.
function setData (){
    console.log ("Відправка даних на сервер");
    var name = document.getElementById("name").value;
    var surname = document.getElementById("s-name").value;
    var mail = document.getElementById("mail").value;
    var data = {userName: name, userSurname: surname, userMail: mail};
    var stringData = JSON.stringify(data);
    localStorage.setItem("data", stringData);
}
//Create <p> teg and put text with localStorage.
function getData() {
    var parsedData = JSON.parse(localStorage.getItem("data"));
    var hr = document.createElement('hr');

    var pName = document.createElement('p');
    var inputValueName = parsedData.userName;
    var textName = document.createTextNode(inputValueName);
    pName.appendChild(textName);
    document.getElementById('list').appendChild(pName);

    var pSurname = document.createElement('p');
    var inputValueSurname = parsedData.userSurname;
    var textSurname = document.createTextNode(inputValueSurname);
    pSurname.appendChild(textSurname);
    document.getElementById('list').appendChild(pSurname);

    var pMail = document.createElement('p');
    var inputValueMail = parsedData.userMail;
    var textMail = document.createTextNode(inputValueMail);
    pMail.appendChild(textMail);
    document.getElementById('list').appendChild(pMail).appendChild(hr);
}

