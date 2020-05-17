import React from 'react'
function Login(){
    const [username,setUsername] = React.useState('')
    const [password,setPassword] = React.useState('')
    const onChangeUsername = event => {
        localStorage.setItem("username",event.target.value);
        setUsername(event.target.value);
    }
    const onChangePassword = event => {
        localStorage.setItem("password",event.target.value);
        setPassword(event.target.value);
    }

    return(
        <div style={{maxWidth:"700px",margin:'4%'}}>
            <div style={{textAlign:"center",marginBottom:"2rem",margin:"auto"}}>
                <h2> Login</h2>
            </div>
            <form action="/login" method="POST">
                <label>Username</label><br/>
                <input type="text" name="username" value={username} onChange={onChangeUsername}/>
                <br/><br/>
                <label>Password</label><br/>
                <input type="password" name="password" value={password} onChange={onChangePassword}></input>
                <br/><br/>
                <button>login</button>
            </form>
            <a href="/adduser">Buat Akun</a>
        </div>
    )
}
export default Login