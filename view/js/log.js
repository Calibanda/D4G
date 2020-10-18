function Log(){
    const img = document.getElementById('img');
    fetch ('https://api.thecatapi.com/v1/images/search')
    .then (res => res.json())
    .then( data => img.src = data[0].url)
}

/*const Log = async function() {
    let response = await fetch('https://jsonplaceholder.typicode.com/users')
    if (response.ok){
        let data = await response.json()
        console.log(data)
    } else {
        console.error('Retour du serveur :', response.status)
    }
 }
 
 Log()*/