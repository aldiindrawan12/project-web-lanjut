import React, { Component } from 'react'
import '../assets/css/detail.css'

class Detail extends Component{
    constructor(){
        super();
        this.state ={
            barang : []
        }
    }

    componentDidMount(){
        const {params} = this.props.match;
        fetch('/api/barang/'+params.kategori+"/"+params.nama)
        .then(res => res.json())
        .then(barang => this.setState({barang},() => console.log(params.nama,barang)));
    }

    render(){
        const {params} = this.props.match;
        return(
            <>
            <div className="container-detail">
                {this.state.barang.map(barang => 
                    <div key = {barang._id} className="item-detail">
                        <img className="image" src={require('../assets/gambar/'+barang.gambar)} alt="gambar barang"/>
                        <h4 className="nama">{barang.nama}</h4>
                        <h5 className="harga">Rp.{barang.harga}</h5>   
                        <div className="deskripsi">
                            <h3>Deskripsi</h3>     
                            <div style={{clear:"both"}}></div>
                            <text>{barang.deskripsi}</text>
                            <div style={{clear:"both"}}></div>
                        </div>
                        <a className="beli" href="/">Beli</a>
                    </div>
                )}   
            </div>
            </>
        )
    }
}

export default Detail;