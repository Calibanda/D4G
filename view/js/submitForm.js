function submitForm(zipcode) {
    if (zipcode==""){
        zipcode = document.getElementById("CodePostal").value;
    }

var NewOrOld =1;

storedata.forEach(element => {
        if(zipcode == Object.keys(element)[0])
        {
            NewOrOld = 0;
        }
    });

    if (NewOrOld==1) {
        oldsearch.push(zipcode);
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
        oldsearch = zipcode;
    }else{
        //generate data de la recherche data
        storedata.forEach(element => {
            if(zipcode == Object.keys(element)[0])
            {
                generate_data(element.zipcode)
            }
        });
        

    }


}
