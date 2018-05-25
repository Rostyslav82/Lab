function allProperties(){
    var allProp = window;
    var all = Object.keys(allProp);
    console.log(all);
    for (var i in all){
        document.write(all[i]+ "<br>");
    }
}
function openWindow() {
    window.open("http://dou.ua");
}
function reduceWindow(){
    var currentWindow = window.open("https://dou.ua","_blank");
    currentWindow.resizeTo(1000,1000);
}

