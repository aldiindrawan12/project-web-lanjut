import React, { Component } from 'react'
import '../assets/css/home.css'
import anak from '../assets/gambar/anak.jpg'
import pria from '../assets/gambar/pria.jpg'
import wanita from '../assets/gambar/wanita.jpg'

import truck from '../assets/gambar/delivery-truck.png'
import box from '../assets/gambar/box.png'
import wallet from '../assets/gambar/wallet.png'

import {
    CardTitle, CardGroup,
    CardSubtitle
  } from 'reactstrap'


import {
    Card, CardImg, CardText, CardBody,Button,Container,Jumbotron,
  } from 'reactstrap';



  class Home extends Component{
    render(){
        return(
        <>

            <div className="jumbo">
                <Jumbotron fluid>
                <Container>
                    <h1>Clothing Store</h1>
                    <p>
                    Temukan barang favoritemu disini yang tentunya kami memiliki koleksi lengkapnya
                    </p>
                </Container>
                </Jumbotron>
                </div>


            <div className="fitur">

            <CardGroup>
                <Card>
                    <CardImg top width="100%" src={truck} alt="Card image cap" />
                    <CardBody>
                    <CardTitle className="merk">Free Delivery</CardTitle>
                    
                    </CardBody>
                </Card>
                <Card>
                    <CardImg top width="100%" src={box} alt="Card image cap" />
                    <CardBody>
                    <CardTitle className="merk">Easy Returns</CardTitle>
                    </CardBody>
                </Card>
                <Card>
                    <CardImg top width="100%" src={wallet} alt="Card image cap" />
                    <CardBody>
                    <CardTitle className="merk">No Additional Fees</CardTitle>
                    </CardBody>
                </Card>
                </CardGroup>


            </div>


            <div className="present">
                <h1>Our Products</h1>
            </div>



            
        <div className="container-home">

            <div className="tipe">
            <Card>
            <CardImg  src={pria} alt="Card image cap" />
            <CardBody>
                <div className="tipe-judul">Men Apparels</div>
                <CardText>Temukan koleksi terbaru dari brand brand International</CardText>             
                <Button color="primary" a href='/product/pria'>Yuk Cari</Button>
            </CardBody>
            </Card>
            </div>
                   
            <div className="tipe">
                <Card>
                <CardImg  src={wanita} alt="Card image cap" />
                <CardBody>
                <div className="tipe-judul">Woman Apparels</div>
                    <CardText>Dapatkan diskon menarik dari koleksi katalog kami</CardText>             
                    <Button color="primary" a href='/product/wanita'>Yuk Cari</Button>
                </CardBody>
                </Card>    
            </div>
            <div className="tipe">
                <Card>
                <CardImg  src={anak} alt="Card image cap" />
                <CardBody>
                <div className="tipe-judul">Kids Apparels</div>
                    <CardText>Segala Jenis Fashion Anak Tersedia di Sini</CardText>             
                    <Button color="primary" a href='/product/anak-anak'>Yuk Cari</Button>
                </CardBody>
                </Card> 
                </div>
        </div>
  
        </>
                
        );
    }
}

export default Home;