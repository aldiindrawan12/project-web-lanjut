//server yang melakukan koneksi dengan mangodb
const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const { MongoClient } = require("mongodb");
const formidable = require("formidable");
const mv = require("mv");

const url = "mongodb://127.0.0.1:27017";
const client = new MongoClient(url);

//set penggunaan body parser
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:true}))

async function run() {
    try {
        MongoClient.connect(url, { useUnifiedTopology: true })
        .then(client => {
            console.log('Connected to Database')
            const db = client.db('clothing-store')
            const quotesCollection = db.collection('barang')
            const doc = db.collection("stok").find().toArray();
            app.post('/quotes', (req, res) => {
                quotesCollection.insertOne(req.body)
                .then(result => {
                    res.redirect("/")
                })
                .catch(error => console.error(error))
            })

            //akses link root akan menampilkan json data dari database
            app.get("/api/barang/",(req,res)=>{
                db.collection('barang').find().toArray()
                    .then(results => {
                    res.json(results)
                    console.log(results)
                    })
                    .catch(error => console.error(error))
            })
            
            //ambil data dengan berdasarkan name
            app.get("/api/barang/:kategori",(req,res)=>{
                db.collection("barang").find({"kategori":req.params.kategori}).toArray()
                .then(results => {
                    res.json(results)
                })
                .catch(error => console.error(error))
            })

            //tambah data barang
            app.post('/tambah',function(req,res){
                //ambil data gambar
                var form  = new formidable.IncomingForm();
                form.parse(req,function(err,fields,files){
                    var oldpath = files.gambar.path;
                    var newpath = __dirname + "/client/src/assets/gambar/" + files.gambar.name;
                    var data = {
                        "nama":fields.nama,
                        "kategori":fields.kategori,
                        "harga":fields.harga,
                        "deskripsi":fields.deskripsi,
                        "ukuran":fields.ukuran,
                        "rating":5,
                        "stok":fields.stok,
                        "gambar":files.gambar.name
                    }
                    db.collection("barang").insertOne(data)
                    .then(result => {
                    })
                    .catch(error => console.error(error))

                    console.log(data)
                    
                    mv(oldpath, newpath, function (err) {
                        if (err) { throw err; }
                        console.log('file uploaded successfully');
                        return res.redirect("/")
                      });
                })
            })

            app.post('/rating',function(req,res){
                console.log()
            })

        })
    } catch (err) {
        console.log("eror");
    }
}

run().catch(console.dir)
app.listen(3300, function() {
  console.log('listening on 3300')
})
  