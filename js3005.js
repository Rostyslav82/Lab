var xhr = new XMLHttpRequest();
var page = 1;
getUsers(page);
function nextPage() {
    page = page + 1;
    getUsers(page);
}
function prevPage() {
    page = page - 1;
    getUsers(page);
}
function getUsers(page){
    xhr.open("GET","https://reqres.in/api/users?page=" + page, true);
    xhr.send();
}
xhr.onload = function () {
    var response = JSON.parse(xhr.response);
    console.log(response);
    var users = response.data;
    $(".userContainer").empty();
    for (var i = 0; i < users.length; i++){
        $(".userContainer").append("<div class='user'><img src='"+users[i].avatar+"'><p>" +
            users[i].first_name + "</p><p>" + users[i].last_name + "<p></p>" + users[i].id+ "</p></div>");
    }
    if (page === 1){
       $("#previours").hide();
    } else{
        $("#previours").show();
    }
    if (page >=response.total_pages){
        $("#next").hide();
    } else{
        $("#next").show();
    }
};
// function checkUser() {
//     xhr.open("GET", "https://reqres.in/api/users/23", true);
//     xhr.send();
//     xhr.onload = function () {
//         if (xhr.status = 404) {
//             console.log("ERROR");
//         }
//     };
// }