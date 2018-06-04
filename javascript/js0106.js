// $.ajax({
// //     url: "https://reqres.in/api/unknown",
// //     type: "GET",
// //     success: function (response){
// //          console.log(response);
// //      },
// //     error: function (err) {
// //           alert (err);
// //      }
// // });
// //
// // $.ajax({
// //     url: "https://reqres.in/api/unknown",
// //     type: "POST",
// //     data:{
// //         name: "paul rudd",
// //         movies: ["I Love You Man", "Role Models"]
// //     },
// //     success: function (response){
// //           console.log(response);
// //     },
// //     error: function (err) {
// //         alert (err);
// //     }


var json = [
    { question:"What is your name?", type:"input" },
    { question:"Are you working?", type: "select", answers:["yes","no"] },
    { question:"Will you be on occupation on Saturday?",type:"select",answers:["yes","no","may be"] }
];
// console.log(json);
// for (var i = 0; i < json.length; i++) {
//     $(".userContainer").append("<p>" + json[i].question + "</p>");
//         var answer;
//         if (json[i].type === "input"){
//             answer = "<input type='text'/>";
//             $(".userContainer").append(answer);
//         } else {
//             var options = json[i].answers;
//             for (var j = 0; j < options.length; j++){
//                 if (json[j].type === "select"){
//                     var answers = "<select><options value =" + json[j].answers + "></option></select>";
//                     $(".userContainer").append(answers);
//                 }
//             }
//         }

console.log(json);
var answer;
for(var i = 0; i<json.length; i++) {
    switch (json[i].type) {
         case "input":
             answer = "<input/>";
             break;
         case "select":
             answer = "<select id='" + i + "'></select>";
             break;
     }
     $(".userContainer").append("<div><p>" + json[i].question + "</p>" + answer +
         "</div>");
     if (json[i].type !== "input") {
         var options = json[i].answers;
        for (var j = 0; j < options.length; j++) {
             var curId = document.getElementById(i);
            console.log(curId);
             $(curId).append("<option>" + options[j] + "</option>");
         }
     }
}