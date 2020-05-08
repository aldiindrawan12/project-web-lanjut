import React, { Component } from 'react'
import '../assets/css/home.css'
import anak from '../assets/gambar/anak.jpg'
import pria from '../assets/gambar/pria.jpg'
import wanita from '../assets/gambar/wanita.jpg'

class Home extends Component{
    render(){
        return(
        <>
        <div className="container-home">
            <div className="tipe">
                <a href='/product/pria'>
                    <img src={pria} alt="Pria"></img>
                    <h1>Pria</h1>
                </a>
            </div>
            <div className="tipe">
                <a href='/product/Wanita'>
                    <img src={wanita} alt="Wanita"></img>
                    <h1>Wanita</h1>
                </a>
            </div>
            <div className="tipe">
                <a href='/product/Anak-Anak'>
                    <img src={anak} alt="Anak-Anak"></img>
                    <h1>Anak-Anak</h1>
                </a>
            </div>
        </div>
        </>
        );
    }
}

export default Home;