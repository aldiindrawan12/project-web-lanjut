import React, {Component} from 'react'
import '../assets/css/barang.css'

class Barang extends Component{
    constructor(){
        super();
        this.state ={
            barang : []
        };
    }
    componentDidMount(){
        const {params} = this.props.match;
        if(params.kategori == null || params.kategori == ""){
            fetch('/api/barang/')
            .then(res => res.json())
            .then(barang => this.setState({barang},() => console.log(barang)));
        }else{
            fetch('/api/barang/'+params.kategori)
            .then(res => res.json())
            .then(barang => this.setState({barang},() => console.log(barang)));
        }
        console.log("ketegori ",params.kategori)

    }
    
    render(){
        return(
            <>
            <h1 className="barang">Barang Clothing Store</h1>
            <div className="upload">
                <a href="/upload">Tambah Barang</a>
            </div>
            <div className="kategori">
                <h1>Pilih Kategori</h1>
                <a href="/barang/wanita">wanita</a>
                <a href="/barang/pria">pria</a>
                <a href="/barang/anak-anak">anak-anak</a>
            </div>
            <div className="container-keranjang">
                   {this.state.barang.map(barang => 
                        <div key = {barang._id} className="item-keranjang">
                            <table border="10">
                                    <tr>
                                        <td style={{width:"20%"}}>{barang.nama}</td>
                                        <td style={{width:"20%"}}><img style={{width:"15%",height:"15%"}} src={require('../assets/gambar/'+barang.gambar)} alt="gambar barang"></img></td>
                                        <td style={{width:"15%"}}>{barang.harga}</td>
                                        <td style={{width:"15%"}}>{barang.stok}</td>
                                        <td style={{width:"15%"}}>{barang.total}</td>
                                        <td style={{width:"10%"}}>
                                            <form action={"/hapus/"+barang.nama} method="POST" style={{float:"left"}}>
                                                <button>Hapus</button>
                                            </form>
                                            <form action={"/edit/"+barang.nama}>
                                                <button>Edit</button>
                                            </form>
                                        </td>
                                    </tr>
                            </table>
                        </div>
                    )}       
            </div>
            </>
        );
    }
}

export default Barang;