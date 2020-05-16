//server yang melakukan koneksi dengan mangodb
const express = require("express");
const bodyParser = require("body-parser");
const jwt = require('jsonwebtoken');
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
                        "jumlah":1,
                        "harga":req.body.harga,
                        "total":req.body.total,
                        "gambar":req.body.gambar
                    }
                    db.collection("keranjang").find().toArray().
                    then(results =>{
                    //cek apakah barang sudah ada di keranjang
                    n = 0
                    for(var i=0;i<results.length;i++){
                        if(results[i]["user"] == req.body.username && results[i]["nama"]==req.body.nama){
                            n = results[i]["jumlah"]+1
                            db.collection("keranjang").update({"user":req.body.username,"nama":req.body.nama},{$set:{"total":results[i]["harga"]*n}})        
                        }    
                    }
                    if(n>0){
                        db.collection("keranjang").update({"user":req.body.username,"nama":req.body.nama},{$set:{"jumlah":parseInt(n)}})
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

            //hapus keranjang
            app.post('/hapus/:user/:nama',(req,res)=>{
                db.collection("keranjang").remove({"user":req.params.user,"nama":req.params.nama})
                .then(results=>{
                    res.redirect("/keranjang")
                })
                .catch(error=>console.error(error))
            })
            
            //update keranjang
            app.post("/update/:user/:nama",(req,res)=>{
                db.collection("keranjang").find({"user":req.params.user,"nama":req.params.nama}).toArray().
                    then(results =>{
                        db.collection("keranjang")
                        .update({"user":req.params.user,"nama":req.params.nama}
                        ,{$set:{"jumlah":req.body.jumlah,"total":req.body.jumlah*req.body.harga}})
                        .then(results => {res.redirect("/keranjang")})        
                    })
            })

            //update rating
            app.post("/updaterating/:nama",(req,res)=>{
                db.collection("barang").find({"nama":req.params.nama}).toArray().
                    then(results =>{
                        db.collection("barang")
                        .update({"nama":req.params.nama}
                        ,{$set:{"userrating":results[0]["userrating"]+1,
                        "rating":(results[0]["userrating"]*results[0]["rating"]+parseInt(req.body.rating))/(results[0]["userrating"]+1)}})
                        .then(results => {
                            res.redirect("/keranjang")
                        })        
                    })
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
                        "gambar":files.gambar.name,
                        "userrating":1
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
                              
                              app.post('/view/login', verifyToken, (req, res) => {  
                                jwt.verify(req.token, 'secretkey', (err, authData) => {
                                  if(err) {
                                    res.sendStatus(403);
                                  } else {
                                      res.redirect("/")
                                  }
                                });
                              });
                              
                              app.post('/view/login', (req, res) => {
                                const user = {
                                  username: req.body.username,
                                  password:req.body.password
                                }
                              
                                jwt.sign({user}, 'secretkey', { expiresIn: '30s' }, (err, token) => {
                                  res.json({
                                    token
                                  });
                                });
                              });
                              
                              function verifyToken(req, res, next) {
                                const bearerHeader = req.headers['authorization'];
                                if(typeof bearerHeader !== 'undefined') {
                                  const bearer = bearerHeader.split(' ');
                                  const bearerToken = bearer[1];
                                  req.token = bearerToken;
                                  next();
                                } else {
                                  res.sendStatus(403);
                                }
                              
                              }
                            //jwt
                          
                            // function verifyToken(req, res, next) {
                            //     const token = req.header('auth-token');

                            //     if(!token){
                            //         return res.status(401).json({msg: 'Tidak ada token!'});
                            //     }

                            //     try{
                            //         const decoded = jwt.verify(token, config.get('jwtSecret'));
                            //         req.user = decoded.user;
                                 
                            //     }catch(err){
                            //         res.status(401).json({msg: 'Token tidak valid'});
                            //     }
                            // };

                    // app.post('/view/login', (req, res) => {
                    //     // Mock user
                    //     // const user = {
                    //     //   id: 1, 
                    //     //   username;
                    //     //   email: 'brad@gmail.com'
                    //     // }
                      
                    //     jwt.sign( 'secretkey', { expiresIn: '30s' }, (err, token) => {
                    //       res.json({
                    //         token
                    //       });
                    //     });
                    //   });

                    //   app.post('/api/posts', verifyToken, (req, res) => {  
                    //     jwt.verify(req.token, 'secretkey', (err, authData) => {
                    //       if(err) {
                    //         res.sendStatus(403);
                    //       } else {
                    //         res.json({
                            
                    //           authData
                    //         });
                    //       }
                    //     });
                    //   });

                    //   function verifyToken(req, res, next) {
                  
                    //     const bearerHeader = req.headers['authorization'];
                    
                    //     if(typeof bearerHeader !== 'undefined') {
                  
                    //       const bearer = bearerHeader.split(' ');
                    
                    //       const bearerToken = bearer[1];
                   
                    //       req.token = bearerToken;
                    
                    //       next();
                    //     } else {
                  
                    //       res.sendStatus(403);
                    //     }
                      
                    //   }
                            // res.redirect("/")
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
  