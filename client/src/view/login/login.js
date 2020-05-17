import React, { Component } from 'react'
class Login extends Component{
    constructor(){
        super();
        this.state ={
            barang : [],
            username : "",
            password : ""
        }
        this.usernameChange = this.usernameChange.bind(this);
        this.passwordChange = this.passwordChange.bind(this);
        localStorage.clear();
    }

    usernameChange(e) {
        this.setState({username: e.target.value});
        localStorage.setItem("username",e.target.value);
       }

    passwordChange(e) {
        this.setState({password: e.target.value});
        localStorage.setItem("password",e.target.value);
       }

    render(){
        return(
            <div style={{maxWidth:"700px",margin:'4%'}}>
                <div style={{textAlign:"center",marginBottom:"2rem",margin:"auto"}}>
                    <h2> Login</h2>
                </div>
                <form action="/login" method="POST">
                    <label>Username</label><br/>
                    <input type="text" name="username" value={this.state.username} onChange={this.usernameChange}/>
                    <br/><br/>
                    <label>Password</label><br/>
                    <input type="password" name="password" value={this.state.password} onChange={this.passwordChange}></input>
                    <br/><br/>
                    <button>login</button>
                </form>
                <a href="/adduser">Buat Akun</a>
            </div>
        )   
    }
}
export default Login