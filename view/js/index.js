"use strick";

window.onload = Log();

function Log(){
    fetch('http://jsonplaceholder.typicode.com/users')
    .then(function (response) {
        return response.json()
    }).then(function(data){
        console.log(data)
    })
}