"use strick";

var myInit ={ method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            },
            mode: 'cors',
            cache: 'default' };


let myRequest = new Request("./cities.json", myInit);

fetch(myRequest)
    .then(function(resp) {
        resp.json();
    })
    .then(function(data){
        console.log(data.department_code); 
    });