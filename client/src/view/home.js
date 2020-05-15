import React, { Component } from 'react'
import '../assets/css/home.css'
import kids from '../assets/gambar/kids.jpg'
import pria from '../assets/gambar/pria.jpg'
import wanita from '../assets/gambar/wanita.jpg'
// import Header from './header.jsx';

import {
  Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button
} from 'reactstrap';


class Home extends Component{
    render(){
        return(
        <>
       

        <div className="container-home">
            <div className="tipe">
            <Card>
            <CardImg top height="100%" src={pria} alt="Card image cap" />
            <CardBody>
                <div CardTitle>Men Apparels</div>
                <CardText>Temukan koleksi terbaru dari brand brand International</CardText>             
                <Button color="primary" a href='/product/pria'>Yuk Cari</Button>
            </CardBody>
            </Card>
        </div>
            
        <div className="tipe">
            <Card>
            <CardImg top height="100%" src={wanita} alt="Card image cap" />
            <CardBody>
                <CardTitle>Woman Apparels</CardTitle>
                <CardText>Temukan koleksi terbaru dari brand brand International</CardText>             
                 <Button color="primary" a href='/product/wanita'>Yuk Cari</Button>
            </CardBody>
            </Card>    
        </div>

        <div className="tipe">
            <Card>
            <CardImg top height="100%" src={kids} alt="Card image cap" />
            <CardBody>
                <CardTitle>Kids Apparels</CardTitle>
                <CardText>Temukan koleksi terbaru dari brand brand International</CardText>             
                 <Button color="primary" a href='//product/anak-anak'>Yuk Cari</Button>
            </CardBody>
            </Card>  
        </div>
         
        </div>
        
        
        </>
        );
        
    }
}
export default Home;