"use strick";

window.onload = Log();

function Log() {
    fetch('http://jsonplaceholder.typicode.com/users')
        .then(function (response) {
            return response.json()
        }).then(function (data) {
            console.log(data)
        })
}

$('#query-btn').on('click', function (event) {
    event.preventDefault();
    const zipcode = "13420";
    $.ajax({
        url: '/api/search/' + zipcode,
        method: 'SEARCH',
        data: { zipcode: zipcode }
    }).done(function (res) {
        if (res.err) {
            console.log('error...ajax');

        } else {
            console.log('res from ajax call is\n', res);
            // window.location.reload();
        }
    });
});