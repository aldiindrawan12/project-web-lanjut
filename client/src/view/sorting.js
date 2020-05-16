import React from 'react';
import '../assets/css/product.css';
class Product extends React.Component{
    constructor(){
        super();
        this.state ={
            barang : [],
            value:""
        }
        this.cariChange = this.cariChange.bind(this);
    }

    cariChange(e) {
        this.setState({value: e.target.value});
       }

    componentDidMount(){
        const {params} = this.props.match;
        fetch('/urut/'+params.berdasarkan+"/"+params.nama)
        .then(res => res.json())
        .then(barang => this.setState({barang},() => console.log(params.nama,barang)));
    }

    render(){
        const {params} = this.props.match;
        return (
            <div className="container">
                <div className="search">
                    <form action={"/cari/"+params.nama+"/"+this.state.value}>
                        <input type="text" name="cari" id="cari" value={this.state.value} onChange={this.cariChange} placeholder="cari barang"></input>
                        <button>Cari</button>
                    </form>
                </div>
                <div style={{clear:"both"}}></div>
                <div className="urut">
                    <h1>Urut Berdasarkan</h1>
                    <a href={"/urut/nama/"+params.nama}>Nama</a>
                    <a href={"/urut/harga/"+params.nama}>Harga</a>
                    <a href={"/urut/rating/"+params.nama}>Rating</a>
                </div>
                <div className="container-product">
                       {this.state.barang.map(barang => 
                            <div key = {barang._id} className="item">
                                <img className="image" src={require('../assets/gambar/'+barang.gambar)} alt="gambar barang"/>
                                <h4 className="nama">{barang.nama}</h4>
                                <h5 className="harga">Rp.{barang.harga}</h5>  
                                <h5 className="rating">rating   : {barang.rating}</h5>      
                                <a className="detail" href={'/detail/'+barang.kategori+"/"+barang.nama}>Detail</a>
                                <form action="/addkeranjang" method="POST">
                                    <input name="username" value={localStorage.getItem("username")} hidden></input>
                                    <input name="nama" value={barang.nama} hidden></input>
                                    <input name="gambar" value={barang.gambar} hidden></input>
                                    <input name="harga" value={barang.harga} hidden></input>
                                    <input name="total" value={barang.harga} hidden></input>
                                    <button className="beli">Beli</button>
                                </form>
                                
                            </div>
                        )}       
                </div>
            </div>
        );
    }
}

export default Product;
