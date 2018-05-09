var foto1 = document.getElementById("pic-1").style.display;
var foto2 = document.getElementById("pic-2").style.display;
var foto3 = document.getElementById("pic-3").style.display;
var foto4 = document.getElementById("pic-4").style.display;
var myArr = [foto1,foto2,foto3,foto4];
function func5 (){
    for (var i=0; i < myArr.length; i++){
        if (myArr[i] === "block"){
            myArr[i] = "";
            myArr[i+1] = "block";
            console.log(myArr);
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
            break;
        }
        if (myArr[0] === "block"){
            break;
        }
    }
}
console.log(foto1);
console.log(foto2);
console.log(foto3);
console.log(foto4);