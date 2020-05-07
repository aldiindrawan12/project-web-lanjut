import React from 'react';
import '../assets/css/home.css';
import logo from '../assets/gambar/logo.svg'

function Home() {
  return (
    <div className="container">
        <div className="search">
            <input type="text" name="cari" id="cari" placeholder="cari barang"></input>
        </div>
        <div className="container-product">
            <div className="item">
                <img className="image" src={logo}/>
                <h3>nama barang</h3>
            </div>
            <div className="item">
                <img className="image" src={logo}/>
                <h3>nama barang</h3>
            </div>
            <div className="item">
                <img className="image" src={logo}/>
                <h3>nama barang</h3>
            </div>
            <div className="item">
                <img className="image" src={logo}/>
                <h3>nama barang</h3>
            </div>
            <div className="item">
                <img className="image" src={logo}/>
                <h3>nama barang</h3>
            </div>
            <div className="item">
                <img className="image" src={logo}/>
                <h3>nama barang</h3>
            </div>
            <div className="item">
                <img className="image" src={logo}/>
                <h3>nama barang</h3>
            </div>
        </div>
    </div>
  );
}

export default Home;
