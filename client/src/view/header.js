import React, { Component } from 'react';
import '../assets/css//App.css';
import { Route, BrowserRouter as Router} from 'react-router-dom';
import Footer from './footer';
import Home from './home';
import Product from './product'
import Keranjang from './keranjang';
import Upload from '../view/upload/upload';
import Login from '../view/login/login';
import Adduser from '../view/login/adduser';
import Detail from '../view/detail'
import Barang from '../view/barang'
import Edit from '../view/edit/edit'
import Cari from '../view/cari'
import Sorting from '../view/sorting'

class App extends Component{

    LoginComponent(){
        if (localStorage.getItem("username") === null)
            return <li><a href="/login">LOGIN</a></li>
        return null;
    };
    LogoutComponent(){
        if (localStorage.getItem("username") != null)
            return <li><a href="/" onClick={event => {
                        localStorage.clear();
                    }}>LOGOUT</a></li>
        return null;
    };

    TambahComponent(){
        if (localStorage.getItem("username") != null)
            if(localStorage.getItem("username") === "aldi12")
                return <li><a href="/barang">BARANG</a></li>
        return null;
    };

    Keranjangcomponent(){
        if (localStorage.getItem("username") != null)
            return <li><a href="/keranjang" >KERANJANG</a></li>
        return null;
    }
    render(){
        return (
            <>
            <div className="header white-black" id="home">
                <div className="header-container">
                    <div className="header-logo">
                        <a href="/" >CLOTHING STORE</a>
                    </div>
                    <div className="header-nav">
                        <ul>
                            <li><a href="/">HOME</a></li>
                            {this.Keranjangcomponent()}
                            {this.TambahComponent()}
                            {this.LoginComponent()}
                            {this.LogoutComponent()}
                        </ul>
                    </div>
                </div>
            </div>
            <div>
            <Router>
                <Route exact path="/" component={Home} />
                <Route exact path='/product' component={Product}/>
                <Route path='/product/:nama' component={Product}/>
                <Route exact path="/keranjang" component={Keranjang} />
                <Route exact path="/barang" component={Barang} />
                <Route exact path="/barang/:kategori" component={Barang} />
                <Route exact path="/upload" component={Upload} />
                <Route exact path="/login" component={Login}/>
                <Route exact path="/adduser" component={Adduser}/>
                <Route exact path="/detail/:kategori/:nama" component={Detail}/>
                <Route exact path="/edit/:nama" component={Edit}/>
                <Route exact path="/cari/:nama/:cari" component={Cari}/>
                <Route exact path="/urut/:berdasarkan/:nama" component={Sorting}/>
            </Router>
            </div>
            <Footer />
            </>
        );
    }
}

export default App;
