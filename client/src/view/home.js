import React, { Component } from 'react'
import '../assets/css/home.css'
import anak from '../assets/gambar/anak.jpg'
import pria from '../assets/gambar/pria.jpg'
import wanita from '../assets/gambar/wanita.jpg'
// import Header from './header.jsx';

import {
    Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button, Jumbotron
  } from 'reactstrap';



  class Home extends Component{
    render(){
        return(
        <>
        {/* <Header/>
        <Jumbotron/> */}
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