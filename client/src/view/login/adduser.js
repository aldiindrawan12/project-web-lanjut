import React from "react";

function AddUser(){
    return (
        <div style={{maxWidth:"700px",margin:'4%'}}>
            <div style={{textAlign:"center",marginBottom:"2rem",margin:"auto"}}>
                <h2>Buat Akun</h2>
            </div>
            <form action="/adduser" method="POST">
                <label>Username</label><br/>
                <input type="text" name="username"/>
                <br/><br/>
                <label>Password</label><br/>
                <input type="text" name="password"></input>
                <br/><br/>
                <button>Tambah</button>
            </form>
        </div>
    )
}

export default AddUser;