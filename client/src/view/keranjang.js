import React, { Component } from 'react'
import '../assets/css/keranjang.css'

class Keranjang extends Component{
    constructor(){
        super();
        this.state ={
            barang : []
        }
    }
    componentDidMount(){
        fetch('/api/keranjang/'+localStorage.getItem("username"))
        .then(res => res.json())
        .then(barang => this.setState({barang},() => console.log(barang)));
    }

    render(){
        return(
            <div className="container-keranjang">
                   {this.state.barang.map(barang => 
                        <div key = {barang._id} className="item">
                            <h4>{barang.user}</h4>
                            <h4>{barang.nama}</h4>
                            <h4>{barang.jumlah}</h4>
                        </div>
                    )}       
            </div>
        );
    }
}

export default Keranjang;