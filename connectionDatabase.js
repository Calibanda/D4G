//import the express module
var express = require('express');

//import body-parser
var bodyParser = require('body-parser');
const { response } = require('express');

var path = require("path");

//store the express in a variable 
var app = express();

var cors = require('cors')

app.use(cors({
    origin: '*'
}));

const MongoClient = require('mongodb').MongoClient;
const uri = "mongodb+srv://AINADMIN:AINADMIN@icv-in-practice.fer4c.mongodb.net/accesInterfacesNumeriques?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true,  useUnifiedTopology: true});

client.connect(function (err) {
          
    if (err) {
        console.log ("Didn't achieve connection...");
    }

    else {
        console.log ("Connected successfully !");
    }

    /// Back-end: Node.js + Mongoose (MongoDB)
    app.post('/api/search/:zipcode', (req, res) => {
        // console.log("A")
        var query = {
            "Code postal" : req.params.zipcode
            };

        var coll_donnees_communes = client.db("accesInterfacesNumeriques").collection("donneesCommunes");
        coll_donnees_communes.find(query).toArray(function(err, result){
            if (err) {
                throw err;
            }
            // console.log(result);
            return res.send(200, result);
        })
    });
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
