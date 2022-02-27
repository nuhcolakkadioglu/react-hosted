
import './App.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Products from './components/Products';
import Product from './components/Product';
import Cart from './components/Cart';

function App() {
  return (
    <React.Fragment>
      <Navbar />

      <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/products" component={Products} />
      <Route exact path="/cart" component={Cart} />
      <Route exact path="/product/:id" component={Product} />
      
      </Switch>
    </React.Fragment>


  );
}

export default App;
