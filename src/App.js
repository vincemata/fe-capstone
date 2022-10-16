import React from 'react'
import './App.css';
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom';
import Home from './components/Home';
import Header from './components/Header';
import Products from './components/Products';
import AboutUs from './components/AboutUs';
import Footer from './components/Footer';
import Shoe1 from './components/products/Shoe1';
import Shoe2 from './components/products/Shoe2';
import Shoe3 from './components/products/Shoe3';
import Cap1 from './components/products/Cap1';
import Cap2 from './components/products/Cap2';
import Cap3 from './components/products/Cap3';
import Slipper1 from './components/products/Slipper1';
import Slipper2 from './components/products/Slipper2';
import Slipper3 from './components/products/Slipper3';

export default function App() {
  return (
    <>
    <div id="wrappper">
      <Router>
          <Header/>
          <Routes>
              <Route exact path='/' element={< Home />}></Route>
              <Route exact path='/Products' element={< Products />}></Route>  
              <Route exact path='/AboutUs' element={< AboutUs />}></Route>
              <Route exact path='/products/squidshark' element={< Shoe1 />}></Route>
              <Route exact path='/products/norimaki' element={< Shoe2 />}></Route>
              <Route exact path='/products/truffle' element={< Shoe3 />}></Route>
              <Route exact path='/products/baseball' element={< Cap1 />}></Route>
              <Route exact path='/products/streetstyle' element={< Cap2 />}></Route>
              <Route exact path='/products/fugubell' element={< Cap3 />}></Route>
              <Route exact path='/products/delta' element={< Slipper1 />}></Route>
              <Route exact path='/products/fishfry' element={< Slipper2 />}></Route>
              <Route exact path='/products/tsinelas' element={< Slipper3 />}></Route>
          </Routes>
          <Footer/>
      </Router>
    </div>
    </>
  )
}
  

