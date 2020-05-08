import React from 'react';
import '../assets/css/product.css';
import logo from '../assets/gambar/logo.svg'

class Product extends React.Component{
    constructor(){
        super();
        this.state ={
            barang : []
        }
    }

    componentDidMount(){
        fetch("/api/barang")
        .then(res => res.json())
        .then(barang => this.setState({barang},() => console.log("data barang diambil",barang)));
    }

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
                       {this.state.barang.map(barang => 
                            <div key = {barang.id} className="item">
                                <img className="image" src={logo} alt="gambar barang"/>
                                <h3>{barang.name}</h3>
                            </div>
                        )}       
                </div>
            </div>
        );
    }
}

export default Product;
