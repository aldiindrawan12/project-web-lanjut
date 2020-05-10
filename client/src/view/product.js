import React from 'react';
import '../assets/css/product.css';
import Star from 'beauty-stars';
class Product extends React.Component{
    constructor(){
        super();
        this.state ={
            barang : []
        }
    }

    componentDidMount(){
        const {params} = this.props.match;
        fetch('/api/barang/'+params.nama)
        .then(res => res.json())
        .then(barang => this.setState({barang},() => console.log(params.nama,barang)));
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
                            <div key = {barang._id} className="item">
                                <img className="image" src={require('../assets/gambar/'+barang.gambar)} alt="gambar barang"/>
                                <h4 className="nama">{barang.nama}</h4>
                                <h5 className="harga">Rp.{barang.harga}</h5>        
                                <div className="rating">
                                    <Star 
                                        size="100%"
                                        value={this.state.value}
                                        onChange={value => this.setState({ value },console.log(value))}
                                    />
                                </div>
                                <a className="detail" href="/">Detail</a>
                                <a className="beli" href="/">Beli</a>
                            </div>
                        )}       
                </div>
            </div>
        );
    }
}

export default Product;
