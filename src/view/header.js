import React from 'react';
import '../assets/css//App.css';
import { Route,Link, BrowserRouter as Router} from 'react-router-dom';
import Home from './home';
import Footer from './footer';
import Keranjang from './keranjang';

function App() {
  return (
      <>
    <div class="header white-black" id="home">
        <div class="header-container">
            <div class="header-logo">
                <a href="<?php echo base_url() ?>">CLOTHING STORE</a>
            </div>
            <div class="header-nav">
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
        <Route exact path="/keranjang" component={Keranjang} />
    </Router>
    </div>
    <Footer />
    </>
  );
}

export default App;
