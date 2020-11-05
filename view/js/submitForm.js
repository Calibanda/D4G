function submitForm(zipcode) {
    if (zipcode==""){
        zipcode = document.getElementById("CodePostal").value;
    }
    alert(zipcode);
var NewOrOld =0;

    oldSearch.forEach(element => {
        if(zipcode != element)
        {
            oldSearch.push(zipcode);
            NewOrOld = 1;
        }else{
        NewOrOld = 0;
        }
    });

    if (NewOrOld==1) {
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
        oldSearch = zipcode;
    }else{
        //generate data de la recherche data
    }


}
