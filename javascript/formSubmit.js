    var regMail = /^([a-z0-9_\.-]+)@([a-z0-9_\.-]+)\.([a-z\.]{2,6})$/;
    var regName = /^([a-zA-Z])/;
    var regTell = /^([0-9]{3}-[0-9]{3}-[0-9]{4})/;


function validate(form){
    var fail = false;
    var name = form.name.value;
    var mail = form.mail.value;
    var tell =  form.tell.value;
        if(regName.test(name) == false) {
            fail = "Ви ввели не правильне імя";
        }else if (regMail.test(mail) == false){
            fail = "Ви ввели email не правильно";
        }else if (regTell.test(tell) == false){
            fail = "Ви не ввели телефон";
        }
        if(fail) {
            alert(fail);
        }
}