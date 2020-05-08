import React from 'react';
import '../assets/css//App.css';
import { Route, BrowserRouter as Router} from 'react-router-dom';
import Footer from './footer';
import Home from './home';
import Product from './product'
import Keranjang from './keranjang';

function App() {
  return (
      <>
    <div className="header white-black" id="home">
        <div className="header-container">
            <div className="header-logo">
                <a href="<?php echo base_url() ?>">CLOTHING STORE</a>
            </div>
            <div className="header-nav">
                <ul>
                    <li><a href="/">HOME</a></li>
                    <li><a href="/keranjang">KERANJANG</a></li>
                    <li><a href="/">ABOUT</a></li>
                    <li><a href="/">LOGOUT</a></li>
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
    </Router>
    </div>
    <Footer />
    </>
  );
}

export default App;
