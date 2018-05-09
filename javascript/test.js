/*var foto1 = document.getElementById("pic-1").style.display;
var foto2 = document.getElementById("pic-2").style.display;
var foto3 = document.getElementById("pic-3").style.display;
var foto4 = document.getElementById("pic-4").style.display;
var myArr = [foto1,foto2,foto3,foto4];
console.log(myArr1);
function func5 (){
    for (var i=0; i < myArr.length; i++){
        if (myArr[i] === "block"){
            myArr[i] = "";
            myArr[i+1] = "block";
            console.log(myArr);
            document.getElementById("pic-1").style.display = myArr[0];
            document.getElementById("pic-2").style.display = myArr[1];
            document.getElementById("pic-3").style.display = myArr[2];
            document.getElementById("pic-4").style.display = myArr[3];
            event1();
            break;
        }
        if (myArr[3] === "block"){
            break;
        }
    }
}
function func6 (){
    for (var i=0; i < myArr.length; i++){
        if (myArr[i] === "block"){
            myArr[i] = "";
            myArr[i-1] = "block";
            console.log(myArr);
            document.getElementById("pic-1").style.display = myArr[0];
            document.getElementById("pic-2").style.display = myArr[1];
            document.getElementById("pic-3").style.display = myArr[2];
            document.getElementById("pic-4").style.display = myArr[3];
            event1();
            break;
        }
        if (myArr[0] === "block"){
            break;
        }
    }
}
function event1 (){
    if (myArr[0] === "block"){
        document.getElementById("butPic-1").style.background = "red";
        document.getElementById("butPic-2").style.background = "";
        document.getElementById("butPic-3").style.background = "";
        document.getElementById("butPic-4").style.background = "";
    } else if (myArr[1] === "block"){
        document.getElementById("butPic-1").style.background = "";
        document.getElementById("butPic-2").style.background = "red";
        document.getElementById("butPic-3").style.background = "";
        document.getElementById("butPic-4").style.background = "";
    } else if (myArr[2] === "block"){
        document.getElementById("butPic-1").style.background = "";
        document.getElementById("butPic-2").style.background = "";
        document.getElementById("butPic-3").style.background = "red";
        document.getElementById("butPic-4").style.background = "";
    } else if (myArr[3] === "block"){
        document.getElementById("butPic-1").style.background = "";
        document.getElementById("butPic-2").style.background = "";
        document.getElementById("butPic-3").style.background = "";
        document.getElementById("butPic-4").style.background = "red";
    }
}
*/

