var pass;
var  cf_pass  
     function change()
     {
         //Récupération des valeurs de MDP
     pass = document.getElementById('pass').value;
     cf_pass = document.getElementById('pass_2').value;
     //Comparaison des MDP avec vérification si ils sont égaux
	  if (pass != cf_pass) {
     document.getElementById('affiche').innerHTML = "Les Mots de passe ne correspondent pas";
     document.getElementById('btn_signin').disabled= true;
	 }else{
        document.getElementById('affiche').innerHTML = "Correct";
        document.getElementById('btn_signin').disabled= false;
     }

   }