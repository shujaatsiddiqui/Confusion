import logo from './logo.svg';
import './App.css';
import { Navbar, NavbarBrand } from 'reactstrap';
import Menu from './components/MenuComponent';
import { DISHES } from './shared/dishes';
import React, { useState } from 'react';

//test added
function App() {

  const [dishes,setDishes] = useState(DISHES);
  console.log(dishes);
  return (
  <div className="App">
    <Navbar dark color="primary">
      <div className="container">
        <NavbarBrand href="/">Ristorante Con Fusion</NavbarBrand>
      </div>
    </Navbar>
    <Menu dishes = {dishes} />
    <Menu dishes = {dishes} />
  </div>
  
  );
}

export default App;
