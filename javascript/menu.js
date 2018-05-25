// My Photo
var foto1 = document.getElementById("pic-1").style.display;
var foto2 = document.getElementById("pic-2").style.display;
var foto3 = document.getElementById("pic-3").style.display;
var foto4 = document.getElementById("pic-4").style.display;
var myArr = [foto1,foto2,foto3,foto4];
// My Bottom
var myFoto1 = document.getElementById("butPic-1");
var myFoto2 = document.getElementById("butPic-2");
var myFoto3 = document.getElementById("butPic-3");
var myFoto4 = document.getElementById("butPic-4");
document.getElementById("butPic-1").style.background = "#50C1E9";
//Functions Carousel menu.
//one photo.
function func1 (){
    if (foto1 !== "none"){
        document.getElementById("pic-1").style.display = "block";
        document.getElementById("pic-2").style.display = "";
        document.getElementById("pic-3").style.display = "";
        document.getElementById("pic-4").style.display = "";
        document.getElementById("butPic-1").style.background = "#50C1E9";
        document.getElementById("butPic-2").style.background = "";
        document.getElementById("butPic-3").style.background = "";
        document.getElementById("butPic-4").style.background = "";
    }
}
//two photo.
function func2 (){
    if (foto2 !== "none"){
        document.getElementById("pic-1").style.display = "";
        document.getElementById("pic-2").style.display = "block";
        document.getElementById("pic-3").style.display = "";
        document.getElementById("pic-4").style.display = "";
        document.getElementById("butPic-1").style.background = "";
        document.getElementById("butPic-2").style.background = "#50C1E9";
        document.getElementById("butPic-3").style.background = "";
        document.getElementById("butPic-4").style.background = "";
    }
}
//three photo.
function func3 (){
    if (foto3 !== "none"){
        document.getElementById("pic-1").style.display = "";
        document.getElementById("pic-2").style.display = "";
        document.getElementById("pic-3").style.display = "block";
        document.getElementById("pic-4").style.display = "";
        document.getElementById("butPic-1").style.background = "";
        document.getElementById("butPic-2").style.background = "";
        document.getElementById("butPic-3").style.background = "#50C1E9";
        document.getElementById("butPic-4").style.background = "";
    }
}
//fore photo.
function func4 (){
    if (foto4 !== "none"){
        document.getElementById("pic-1").style.display = "";
        document.getElementById("pic-2").style.display = "";
        document.getElementById("pic-3").style.display = "";
        document.getElementById("pic-4").style.display = "block";
        document.getElementById("butPic-1").style.background = "";
        document.getElementById("butPic-2").style.background = "";
        document.getElementById("butPic-3").style.background = "";
        document.getElementById("butPic-4").style.background = "#50C1E9";
    }
}
//Functions bottom click.
function event1 (){
    if (myArr[0] === "block"){
        document.getElementById("butPic-1").style.background = "#50C1E9";
        document.getElementById("butPic-2").style.background = "";
        document.getElementById("butPic-3").style.background = "";
        document.getElementById("butPic-4").style.background = "";
    } else if (myArr[1] === "block"){
        document.getElementById("butPic-1").style.background = "";
        document.getElementById("butPic-2").style.background = "#50C1E9";
        document.getElementById("butPic-3").style.background = "";
        document.getElementById("butPic-4").style.background = "";
    } else if (myArr[2] === "block"){
        document.getElementById("butPic-1").style.background = "";
        document.getElementById("butPic-2").style.background = "";
        document.getElementById("butPic-3").style.background = "#50C1E9";
        document.getElementById("butPic-4").style.background = "";
    } else if (myArr[3] === "block"){
        document.getElementById("butPic-1").style.background = "";
        document.getElementById("butPic-2").style.background = "";
        document.getElementById("butPic-3").style.background = "";
        document.getElementById("butPic-4").style.background = "#50C1E9";
    }
}
//Functions right click.
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
//Functions left click.
function func6 (){
    for (var i=0; i < myArr.length; i++){
        if (myArr[0] === "block"){
            break;
        }
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
    }
}
//background-image: url
//event
//Interval
const myVar = setInterval(func5 ,2500);
myVar();

