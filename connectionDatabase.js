//import the express module
var express = require('express');

//import body-parser
var bodyParser = require('body-parser');
const { response } = require('express');

var path = require("path");

//store the express in a variable 
var app = express();

const MongoClient = require('mongodb').MongoClient;
const uri = "mongodb+srv://AINADMIN:AINADMIN@icv-in-practice.fer4c.mongodb.net/<dbname>?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true,  useUnifiedTopology: true});

client.connect(function (err) {
          
    if (err) {
        console.log ("Didn't achieve connection...");
    }

    else {
        console.log ("Connected successfully !");
    }

    //route the GET request to the specified path, "/user". 
    //This sends the user information to the path  
    app.post('/user', function(req, res){
        var response = {
            Foyer : req.body.foyer
            };
        
        var coll_logements = client.db("accesInterfacesNumeriques").collection("donneesCommunes");
        coll_logements.findOne(response, function(err, result){
            if (err) {
                throw err;
            }

            if (result) {
                res.end("/a");
            }
            else {
                res.end("Non trouvé");
            }
            console.log(result);
        });
    });

    /*app.post('/connexiondb', function(req, res){

        var response = {
            identifiant : req.body.identifiant,
            };
        
        var coll_logements = client.db("Logements").collection("utilisateurs");
        coll_logements.findOne(response, function(err, result){
            if (err) {
                throw err;
            }

            if (result) {
                if (result.password == req.body.mdp) {
                    res.sendFile(__dirname + "/view/affichage.html");
                }
                else {
                    res.end("Mauvais mdp");
                }
                
            }
            else {
                res.end("Mauvais identifiant");
            }
            console.log(result);
        });
    });*/
});

//configure body-parser for express
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

//Access to the files (css and html) in 'view' folder
app.use (express.static (path.join (__dirname, 'view')));

//allow express to access our html (index.html) file
app.get('/', function(req, res) {
        res.sendFile(__dirname + "/view/index.html");
    });

//This piece of code creates the server  
//and listens to the request at port 8888
//we are also generating a message once the 
//server is created
var server = app.listen(8888, function(){
    var host = server.address().address;
    var port = server.address().port;
    console.log("Example app listening at http://%s:%s", host, port);
});
