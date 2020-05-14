//server yang melakukan koneksi dengan mangodb
const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const { MongoClient } = require("mongodb");
const formidable = require("formidable");
const mv = require("mv");
const url = "mongodb+srv://aldi12:Sayang12-11-98@cluster0-iupzw.mongodb.net/test?retryWrites=true&w=majority";//"mongodb://127.0.0.1:27017";
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

            //ambil data dengan berdasarkan kategori
            app.get("/api/barang/:kategori",(req,res)=>{
                db.collection("barang").find({"kategori":req.params.kategori}).toArray()
                .then(results => {
                    res.json(results)
                })
                .catch(error => console.error(error))
            })

            //ambil data keranjang user
            app.get("/api/keranjang/:user",(req,res)=>{
                    db.collection("keranjang").find({"user":req.params.user}).toArray()
                    .then(results => {
                            res.json(results)
                    })
                    .catch(error => console.error(error))
            })

            //ambil data detail
            app.get("/api/barang/:kategori/:nama",(req,res)=>{
                db.collection("barang").find({"kategori":req.params.kategori,"nama":req.params.nama}).toArray()
                .then(results => {
                    res.json(results)
                })
                .catch(error => console.error(error))
            })

            //tambah data keranjang
            app.post('/addkeranjang',function(req,res){
                if(req.body.username === ""){
                    res.redirect('/login')
                }else{
                    var data = {
                        "user":req.body.username,
                        "nama":req.body.nama,
                        "jumlah":1
                    }
                    db.collection("keranjang").find().toArray().
                    then(results =>{
                    //cek apakah barang sudah ada di keranjang
                    n = 0
                    for(var i=0;i<results.length;i++){
                        if(results[i]["user"] == req.body.username && results[i]["nama"]==req.body.nama){
                            n = results[i]["jumlah"]+1        
                        }    
                    }
                    if(n>0){
                        db.collection("keranjang").update({"user":req.body.username,"nama":req.body.nama},{$set:{"jumlah":n}})
                        res.redirect("/keranjang")
                    }else{    
                        db.collection("keranjang").insertOne(data)
                        .then(result => {
                            res.redirect('/keranjang')
                        }) 
                        .catch(error => console.error(error))
                    }
                    })
                }
            });
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

            //mengolah rating product
            app.post('/rating',function(req,res){
                console.log()
            })

            //buat akun user
            app.post("/adduser",function(req,res){
                db.collection("user").find().toArray().
                then(results =>{
                    var n = 0
                    for(var i=0;i<results.length;i++){
                        if(results[i]["username"] == req.body.username){
                            n = n+1;
                        }    
                    }
                    if(n>0){
                        res.send('<script>alert("Username sudah ada");window.location.href ="/adduser"</script>')
                    }else{
                        db.collection("user").insertOne(req.body)
                        .then (results => {
                            res.redirect("/")
                        })
                    }
                })  
            });

            //verifikasi login
            app.post("/login",function(req,res){
                db.collection("user").find({"username":req.body.username}).toArray()
                .then(results =>{
                    if(results.length === 0){
                        res.send('<script>alert("Username salah");window.location.href ="/login"</script>')
                    }else{
                        if(results[0]["password"] === req.body.password){
                            res.redirect("/")
                        }else{
                            res.send('<script>alert("Password salah");window.location.href ="/login"</script>')
                        }
                    }
                })
            });



        })
    } catch (err) {
        console.log("eror");
    }
}

run().catch(console.dir)
app.listen(3300, function() {
  console.log('listening on 3300')
})
  