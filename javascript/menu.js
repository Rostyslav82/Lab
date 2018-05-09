// My Photo
var foto1 = document.getElementById("pic-1").style.display;
var foto2 = document.getElementById("pic-2").style.display;
var foto3 = document.getElementById("pic-3").style.display;
var foto4 = document.getElementById("pic-4").style.display;
// My Bottom
var myFoto1 = document.getElementById("butPic-1");
var myFoto2 = document.getElementById("butPic-2");
var myFoto3 = document.getElementById("butPic-3");
var myFoto4 = document.getElementById("butPic-4");
myFoto1.classList.add("active");
//Functions Carousel menu.
function func1 (){
    if (foto1 !== "none"){
        foto1 = "block";
        foto2 = "";
        foto3 = "";
        foto4 = "";
        myFoto1.classList.add("active");
        myFoto2.classList.remove("active");
        myFoto3.classList.remove("active");
        myFoto4.classList.remove("active");
    } else {
        document.getElementById("pic-1").style.display = "";
    }
}
function func2 (){
    if (foto2 !== "none"){
        document.getElementById("pic-1").style.display = "";
        document.getElementById("pic-2").style.display = "block";
        document.getElementById("pic-3").style.display = "";
        document.getElementById("pic-4").style.display = "";
        myFoto1.classList.remove("active");
        myFoto2.classList.add("active");
        myFoto3.classList.remove("active");
        myFoto4.classList.remove("active");
    } else {
        document.getElementById("pic-2").style.display = "";
    }
}
function func3 (){
    if (foto3 !== "none"){
        document.getElementById("pic-1").style.display = "";
        document.getElementById("pic-2").style.display = "";
        document.getElementById("pic-3").style.display = "block";
        document.getElementById("pic-4").style.display = "";
        myFoto1.classList.remove("active");
        myFoto2.classList.remove("active");
        myFoto3.classList.add("active");
        myFoto4.classList.remove("active");
    } else {
        document.getElementById("pic-3").style.display = "";
    }
}
function func4 (){
    if (foto4 !== "none"){
        document.getElementById("pic-1").style.display = "";
        document.getElementById("pic-2").style.display = "";
        document.getElementById("pic-3").style.display = "";
        document.getElementById("pic-4").style.display = "block";
        myFoto1.classList.remove("active");
        myFoto2.classList.remove("active");
        myFoto3.classList.remove("active");
        myFoto4.classList.add("active");
    } else {
        document.getElementById("pic-4").style.display = "";
    }
}
//left & Right menu


