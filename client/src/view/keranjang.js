import React, { Component} from 'react'
import '../assets/css/keranjang.css'

class Keranjang extends Component{
    constructor(){
        super();
        this.state ={
            barang : []
        };
    }
    componentDidMount(){
        fetch('/api/keranjang/'+localStorage.getItem("username"))
        .then(res => res.json())
        .then(barang => this.setState({barang},() => console.log(barang)));
    }
    
    render(){
        var total_seluruh = 0;
        return(
            <div className="container-keranjang">
                   {this.state.barang.map(barang => 
                        <div key = {barang._id} className="item-keranjang">
                            <table border="10">
                                    <tr>
                                        <td style={{width:"20%"}}>{barang.nama}</td>
                                        <td style={{width:"20%"}}><img style={{width:"15%",height:"15%"}} src={require('../assets/gambar/'+barang.gambar)} alt="gambar barang"></img></td>
                                        <td style={{width:"15%"}}>{barang.harga}</td>
                                        <td style={{width:"15%"}}>
                                            <form action={"/update/"+barang.user+"/"+barang.nama} method="POST">
                                                <input type="number" min="1" name="jumlah" placeholder={barang.jumlah}></input>
                                                <input name="harga" value={barang.harga} hidden></input>
                                                <button>Update</button>
                                            </form>    
                                        </td>
                                        <td style={{width:'10%'}}>
                                            <form action={"/updaterating/"+barang.nama} method="POST">
                                                <input type="number" min="1" name="rating" max="5"></input>
                                                <button>Tambah</button>
                                            </form>    
                                        </td>
                                        <td style={{width:"15%"}}>{barang.total}</td>
                                        <td style={{width:"5%"}}>
                                            <form action={"/hapus/"+barang.user+"/"+barang.nama} method="POST">
                                                <button>Hapus</button>
                                            </form>
                                        </td>
                                    </tr>
                            </table>
                        </div>
                    )}       
                    {this.state.barang.map((barang) => {
                        total_seluruh = total_seluruh + barang.total;
                    }
                    )}
                    <div className="total">
                        <h1>Total : Rp.{total_seluruh}</h1>
                        <button>CheckOut</button>
                    </div>
                    <div style={{clear:"both"}}></div>
            </div>
        );
    }
}

export default Keranjang;