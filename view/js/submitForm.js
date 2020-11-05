function submitForm(zipcode) {

    /*var zipcode = false

    if ($("#CodePostal").val()) {
        zipcode = $("#CodePostal").val();
    }
    else if ($("#city option:selected").text()) {
        zipcode = $("#city option:selected").text();
    }*/

    // console.log("zipcode: " + zipcode)

    if (zipcode) {

        $.ajax({
            url: '/api/search/' + zipcode,
            type: 'POST',
            data: { zipcode: zipcode }
        }).done(function (res) {
            if (res.err) {
                // console.log('error...ajax');

            } else {
                // console.log('res from ajax call is\n', res);
                // window.location.reload();

                //TODO: Generate results from the "res" variable
                generate_data(res);

            }
        });
    }

}
