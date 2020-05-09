import React from 'react'

function Upload(){
    return(
        
        <div style={{maxWidth:"700px",margin:'4%'}}>
            <div style={{textAlign:"center",marginBottom:"2rem"}}>
                <h2>Upload Product</h2>
            </div>
            <form action="/tambah/" method="POST" encType="multipart/form-data">
                <label>Foto Product</label><br/>
                <input type="file" name="gambar"></input>
                <br/><br/>
                <label>Nama Product</label><br/>
                <input type="text" name="nama"></input>
                <br/><br/>
                <label>Harga Product (IDR)</label><br/>
                <input type="number" name="harga"></input>
                <br/><br/>
                <label>Deskripsi Product</label><br/>
                <textarea type="text" name="deskripsi"></textarea>
                <br/><br/>
                <label>Stok  Product</label><br/>
                <input type="number" name="stok"></input>
                <br/><br/>
                <label>Ukuran Product</label><br/>
                <input type="text" name="ukuran"></input>
                <br/><br/>
                <label>Kategori Product</label><br/>
                <input type="text" name="kategori"></input>
                <br/><br/>
                <button>Simpan</button>
            </form>
        </div>
    )
}
export default Upload