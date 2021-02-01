import React from 'react';
import Products from './components/Products'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import {DataProvider} from './components/DataProvider'
import Details from './components/Details'
import Cart from './components/Cart'
import FooterContainer from "./containers/Footer"
import Navbar from "./containers/header/Navbar"
import ImageSlider from "./containers/hero/Slider"
import { SliderData } from './containers/hero/SliderData'


function App() {
  return (
    <DataProvider>
      <div className="App">
        <Router>
           <Navbar/>
          <section>
            <Routes>
            <Route  exact="/" element={  <ImageSlider slides={SliderData} /> } />
              <Route path="products" element={ <Products /> } />
              <Route path="products/:id" element={ <Details /> } />
              <Route path="cart" element={ <Cart /> } />
            </Routes>
          </section>
          <FooterContainer/>
        </Router>
      </div>
    </DataProvider>
  );
}

export default App;
