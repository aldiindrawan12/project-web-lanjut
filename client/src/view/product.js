import React from 'react';
import '../assets/css/product.css';
import logo from '../assets/gambar/logo.svg'

class Product extends React.Component{
    render(){
        const {params} = this.props.match;
        return (
            <div className="container">
                <div className="judul">
                    <h1>Pakaian {params.nama}</h1>
                </div>
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
}

export default Product;
