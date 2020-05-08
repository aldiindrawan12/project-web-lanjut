const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const { MongoClient } = require("mongodb");

const url = "mongodb://127.0.0.1:27017";
const client = new MongoClient(url);

//set penggunaan body parser
app.use(bodyParser.urlencoded({extended:true}))

async function run() {
    try {
        MongoClient.connect(url, { useUnifiedTopology: true })
        .then(client => {
            console.log('Connected to Database')
            const db = client.db('test')
            const quotesCollection = db.collection('stok')
            const doc = db.collection("stok").find().toArray();
            app.post('/quotes', (req, res) => {
                quotesCollection.insertOne(req.body)
                .then(result => {
                    res.redirect("/")
                })
                .catch(error => console.error(error))
            })

            //akses link tambah data
            app.get("/tambah",(req,res)=>{
                //res.send(req.params.nim)
                res.sendFile(__dirname+"/index.html")
            })

            //akses link root akan menampilkan json data dari database
            app.get("/",(req,res)=>{
                db.collection('stok').find().toArray()
                    .then(results => {
                    res.json(results)
                    console.log(results)
                    })
                    .catch(error => console.error(error))
            })
            
            //ambil data dengan berdasarkan name
            app.get("/:nama",(req,res)=>{
                db.collection("stok").find({"name":req.params.nama}).toArray()
                .then(results => {
                    res.json(results)
                })
                .catch(error => console.error(error))
            })

            app.post("/delete",(req,res)=>{
                db.collection("stok").deleteOne({"name":req.body.name})
                .then(results => {
                    res.redirect("/")
                    console.log(req.body.name)
                })
                .catch(error => console.error(error))
            })


        })
    } catch (err) {
        console.log("eror");
    }
}

run().catch(console.dir)
/*app.listen(3300, function() {
  console.log('listening on 3300')
})*/
  