function submitForm(zipcode) {
    if (zipcode==""){
        zipcode = document.getElementById("CodePostal").value;
    }
    alert(zipcode);

var NewOrOld =1;

    oldSearch.forEach(element => {
        if(zipcode == element)
        {
            NewOrOld = 0;
        }
    });

    if (NewOrOld==1) {
        oldSearch.push(zipcode);
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
                    console.log(res);
                    var obj = {zipcode: res};
                    storedata.push(obj);
                    console.log(storedata[0].zipcode);
                    generate_data(res);

                }
            });
        oldSearch = zipcode;
    }else{
        //generate data de la recherche data

    }


}
