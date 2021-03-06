import React, { Component } from 'react'

class Edit extends Component{
    constructor(){
        super();
        this.state ={
            barang : []
        }
    }
    componentDidMount(){
        const {params} = this.props.match;
        fetch('/api/edit/'+params.nama)
        .then(res => res.json())
        .then(barang => this.setState({barang},() => console.log(params.nama,barang)));
    }
    render(){
        const {params} = this.props.match;
        return(
            <div style={{maxWidth:"700px",margin:'4%'}}>
                <div style={{textAlign:"center",marginBottom:"2rem"}}>
                    <h2>Edit Data Product</h2>
                </div>
                {this.state.barang.map(barang => 
                <form action={"/edit/"+params.nama}method="POST" encType="multipart/form-data">
                    <label>Foto Product</label><br/>
                    <input type="file" name="gambar"></input>
                    <br/><br/> 
                    <label>Nama Product</label><br/>
                    <input type="text" name="nama" defaultValue={barang.nama}></input>
                    <br/><br/>
                    <label>Harga Product (IDR)</label><br/>
                    <input type="number" name="harga" defaultValue={barang.harga}></input>
                    <br/><br/>
                    <label>Deskripsi Product</label><br/>
                    <textarea type="text" name="deskripsi" defaultValue={barang.deskripsi}></textarea>
                    <br/><br/>
                    <label>Stok  Product</label><br/>
                    <input type="number" name="stok" defaultValue={barang.stok}></input>
                    <br/><br/>
                    <label>Ukuran Product</label><br/>
                    <input type="text" name="ukuran" defaultValue={barang.ukuran}></input>
                    <input type="text" name="kategori" defaultValue={barang.kategori} hidden></input>
                    <input type="text" name="rating" defaultValue={barang.rating} hidden></input>
                    <input type="text" name="userrating" defaultValue={barang.userrating} hidden></input>
                    <br/><br/>
                    <button>Simpan</button>
                </form>
                 )}
            </div>
        )
    }
}
export default Edit