import React, { Component } from 'react'

class Login extends Component{
    constructor(){
        super();
        this.state ={
            barang : [],
            username:"",
            password:""
        }
        this.usernameChange = this.usernameChange.bind(this);
        this.upasswordChange = this.passwordChange.bind(this);
        localStorage.clear();
    }

    usernameChange(event){
        this.setState({username:event.currentTarget.value})
        localStorage.setItem("username",event.target.value);
    }

    passwordChange(event){
        this.setState({password:event.currentTarget.value})
        localStorage.setItem("password",event.target.value);
    }

    render(){
    return(
        <div style={{maxWidth:"700px",margin:'4%'}}>
            <h1>usernmae : {localStorage.getItem("username")}</h1>
            <button onClick={() => window.location.reload(false)}>Click to reload!</button>
            <div style={{textAlign:"center",marginBottom:"2rem",margin:"auto"}}>
                <h2>Login</h2>
            </div>
            <form action="/login" method="POST">
                <label>Username</label><br/>
                <input type="text" name="username" value={this.state.username} onChange={this.usernameChange}/>
                <br/><br/>
                <label>Password</label><br/>
                <input type="text" name="password" value={this.state.password} onChange={this.passwordChange}></input>
                <br/><br/>
                <button>login</button>
            </form>
            <a href="/adduser">Buat Akun</a>
        </div>
    )
    }
}
export default Login