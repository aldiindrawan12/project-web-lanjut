import React from 'react';
import ReactDOM from 'react-dom';
import './assets/css/index.css';
import App from './view/header';
import * as serviceWorker from './serviceWorker';
import 'bootstrap/dist/css/bootstrap.min.css';

ReactDOM.render(
	//deklarasi route
  <App />
  ,
  document.getElementById('root')
);

serviceWorker.unregister();

/*
<Route exact path="/blog" component={Blog} />
<Route path="/blog/:id" component={BacaItem} />
<Route exact path="/profile" component={Propil} />*/