

var myInit ={
     method: 'GET',
     mode: 'cors',
}

fetch('http://vps-2377b176.vps.ovh.net:8888/departements_cities.json',myInit)
    .then(function (response) {
        return response.json()
    }).then(function (data) {
        console.log(data);        
    })

window.onload = function(){
   generate_data();
};

function generate_data(){
    var div_tableau = document.getElementById("communes");
    var tbl = document.createElement("table");
    var firstLine = document.createElement("tr");
    
    var col1 = document.createElement("th");
    var cellText = document.createTextNode("");
    col1.appendChild(cellText);
    firstLine.appendChild(col1);

    var col6 = document.createElement("th");
    var cellText = document.createTextNode("score global");
    col6.appendChild(cellText);
    firstLine.appendChild(col6);

    var col2 = document.createElement("th");
    var cellText = document.createTextNode("Accès aux interfaces numérique");
    col2.appendChild(cellText);
    firstLine.appendChild(col2);

    var col3 = document.createElement("th");
    var cellText = document.createTextNode("Accès a l'information");
    col3.appendChild(cellText);
    firstLine.appendChild(col3);

    var col4 = document.createElement("th");
    var cellText = document.createTextNode("Compétences administrative");
    col4.appendChild(cellText);
    firstLine.appendChild(col4);
    
    var col5 = document.createElement("th");
    var cellText = document.createTextNode("compétences numérique / scolaire");
    col5.appendChild(cellText);
    firstLine.appendChild(col5);



    tbl.appendChild(firstLine);
    res.forEach(element => {
        var Line = document.createElement("tr");
        var col1 = document.createElement("td");
        var cellText = document.createTextNode(element["Nom Com"]);
        col1.appendChild(cellText);
        Line.appendChild(col1);
        var col1 = document.createElement("td");
        var cellText = document.createTextNode(element["SCORE GLOBAL epci 1"]);
        col1.appendChild(cellText);
        Line.appendChild(col1);
        var col1 = document.createElement("td");
        var cellText = document.createTextNode(element["ACCÈS AUX INTERFACES NUMERIQUES epci 1"]);
        col1.appendChild(cellText);
        Line.appendChild(col1);
        var col1 = document.createElement("td");
        var cellText = document.createTextNode(element["ACCES A L'INFORMATION epci 1"]);
        col1.appendChild(cellText);
        Line.appendChild(col1);
        var col1 = document.createElement("td");
        var cellText = document.createTextNode(element["COMPETENCES ADMINISTATIVES epci 1"]);
        col1.appendChild(cellText);
        Line.appendChild(col1);
        var col1 = document.createElement("td");
        var cellText = document.createTextNode(element["COMPÉTENCES NUMÉRIQUES / SCOLAIRES epci 1"]);
        col1.appendChild(cellText);
        Line.appendChild(col1);
        tbl.appendChild(Line);

        var Line = document.createElement("tr");
        var col1 = document.createElement("td");
        var cellText = document.createTextNode(element["Libdep"]);
        col1.appendChild(cellText);
        Line.appendChild(col1);
        var col1 = document.createElement("td");
        var cellText = document.createTextNode(element["SCORE GLOBAL departement 1"]);
        col1.appendChild(cellText);
        Line.appendChild(col1);
        var col1 = document.createElement("td");
        var cellText = document.createTextNode(element["ACCÈS AUX INTERFACES NUMERIQUES departement 1"]);
        col1.appendChild(cellText);
        Line.appendChild(col1);
        var col1 = document.createElement("td");
        var cellText = document.createTextNode(element["ACCES A L'INFORMATION departement 1"]);
        col1.appendChild(cellText);
        Line.appendChild(col1);
        var col1 = document.createElement("td");
        var cellText = document.createTextNode(element["COMPETENCES ADMINISTATIVES departement 1"]);
        col1.appendChild(cellText);
        Line.appendChild(col1);
        var col1 = document.createElement("td");
        var cellText = document.createTextNode(element["COMPÉTENCES NUMÉRIQUES / SCOLAIRES departement 1"]);
        col1.appendChild(cellText);
        Line.appendChild(col1);
        tbl.appendChild(Line);

        var Line = document.createElement("tr");
        var col1 = document.createElement("td");
        var cellText = document.createTextNode(element["Libreg"]);
        col1.appendChild(cellText);
        Line.appendChild(col1);
        var col1 = document.createElement("td");
        var cellText = document.createTextNode(element["SCORE GLOBAL region *"]);
        col1.appendChild(cellText);
        Line.appendChild(col1);
        var col1 = document.createElement("td");
        var cellText = document.createTextNode(element["ACCÈS AUX INTERFACES NUMERIQUES region 1"]);
        col1.appendChild(cellText);
        Line.appendChild(col1);
        var col1 = document.createElement("td");
        var cellText = document.createTextNode(element["ACCES A L'INFORMATION region 1"]);
        col1.appendChild(cellText);
        Line.appendChild(col1);
        var col1 = document.createElement("td");
        var cellText = document.createTextNode(element["COMPETENCES ADMINISTATIVES region 1"]);
        col1.appendChild(cellText);
        Line.appendChild(col1);
        var col1 = document.createElement("td");
        var cellText = document.createTextNode(element["COMPÉTENCES NUMÉRIQUES / SCOLAIRES region 1"]);
        col1.appendChild(cellText);
        Line.appendChild(col1);
        tbl.appendChild(Line);
    });
    div_tableau.appendChild(tbl);
    tbl.setAttribute("border", "2");




}



var res =[
    {
      "Nom Com": "Gémenos",
      "Code Iris": 130420102,
      "Nom Iris": "Est",
      "Calcul 1": "Non",
      "Libcom": "Gémenos",
      "Libdep": "BOUCHES DU RHONE",
      "Libepci": "Métropole d'Aix-Marseille-Provence",
      "Libreg": "PROVENCE ALPES COTE D AZUR",
      "P16 Pop": "2469,547638872",
      "SCORE GLOBAL region 1": "92,557347708",
      "ACCES A L'INFORMATION departement 1": "78,283695579",
      "ACCES A L'INFORMATION epci 1": "77,314642490",
      "ACCES A L'INFORMATION region *": 81,
      "ACCES A L'INFORMATION region 1": "81,765076275",
      "ACCÈS AUX INTERFACES NUMERIQUES departement 1": "131,244146498",
      "ACCÈS AUX INTERFACES NUMERIQUES epci 1": "130,345439525",
      "ACCÈS AUX INTERFACES NUMERIQUES region *": 131,
      "ACCÈS AUX INTERFACES NUMERIQUES region 1": "131,384466083",
      "COMPETENCES ADMINISTATIVES departement 1": "72,743728142",
      "COMPETENCES ADMINISTATIVES epci 1": "71,797748433",
      "COMPETENCES ADMINISTATIVES region *": 79,
      "COMPETENCES ADMINISTATIVES region 1": "79,740870188",
      "COMPÉTENCES NUMÉRIQUES / SCOLAIRES departement 1": "97,554277028",
      "COMPÉTENCES NUMÉRIQUES / SCOLAIRES epci 1": "98,741421868",
      "COMPÉTENCES NUMÉRIQUES / SCOLAIRES region *": 90,
      "COMPÉTENCES NUMÉRIQUES / SCOLAIRES region 1": "90,344298715",
      "GLOBAL ACCES departement 1": "95,937179218",
      "GLOBAL ACCES epci 1": "94,991574835",
      "GLOBAL ACCES region *": 98,
      "GLOBAL ACCES region 1": "98,304872877",
      "GLOBAL COMPETENCES  departement 1": "89,284094066",
      "GLOBAL COMPETENCES epci 1": "89,760197390",
      "GLOBAL COMPETENCES region *": 86,
      "GLOBAL COMPETENCES region 1": "86,809822539",
      "Nombre d'enregistrements": 1,
      "SCORE GLOBAL departement 1": "92,610636642",
      "SCORE GLOBAL epci 1": "92,375886112",
      "SCORE GLOBAL region *": 92
    },
    {
      "Nom Com": "Gémenos",
      "Code Iris": 130420101,
      "Nom Iris": "Ouest-La Plaine",
      "Calcul 1": "Non",
      "Libcom": "Gémenos",
      "Libdep": "BOUCHES DU RHONE",
      "Libepci": "Métropole d'Aix-Marseille-Provence",
      "Libreg": "PROVENCE ALPES COTE D AZUR",
      "P16 Pop": "3982,452361128",
      "SCORE GLOBAL region 1": "93,738319094",
      "ACCES A L'INFORMATION departement 1": "68,117846365",
      "ACCES A L'INFORMATION epci 1": "67,311967587",
      "ACCES A L'INFORMATION region *": 70,
      "ACCES A L'INFORMATION region 1": "70,764704622",
      "ACCÈS AUX INTERFACES NUMERIQUES departement 1": "131,244146498",
      "ACCÈS AUX INTERFACES NUMERIQUES epci 1": "130,345439525",
      "ACCÈS AUX INTERFACES NUMERIQUES region *": 131,
      "ACCÈS AUX INTERFACES NUMERIQUES region 1": "131,384466083",
      "COMPETENCES ADMINISTATIVES departement 1": "76,766069914",
      "COMPETENCES ADMINISTATIVES epci 1": "75,767782552",
      "COMPETENCES ADMINISTATIVES region *": 84,
      "COMPETENCES ADMINISTATIVES region 1": "84,150116748",
      "COMPÉTENCES NUMÉRIQUES / SCOLAIRES departement 1": "111,059359903",
      "COMPÉTENCES NUMÉRIQUES / SCOLAIRES epci 1": "112,415673398",
      "COMPÉTENCES NUMÉRIQUES / SCOLAIRES region *": 102,
      "COMPÉTENCES NUMÉRIQUES / SCOLAIRES region 1": "102,682961244",
      "GLOBAL ACCES departement 1": "89,159946409",
      "GLOBAL ACCES epci 1": "88,323124900",
      "GLOBAL ACCES region *": 90,
      "GLOBAL ACCES region 1": "90,971291776",
      "GLOBAL COMPETENCES  departement 1": "99,628263240",
      "GLOBAL COMPETENCES epci 1": "100,199709783",
      "GLOBAL COMPETENCES region *": 96,
      "GLOBAL COMPETENCES region 1": "96,505346412",
      "Nombre d'enregistrements": 1,
      "SCORE GLOBAL departement 1": "94,394104824",
      "SCORE GLOBAL epci 1": "94,261417341",
      "SCORE GLOBAL region *": 93
    }
]