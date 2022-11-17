import React from 'react'
import { BrowserRouter, Route } from 'react-router-dom'
import Header from './Header'
import Home from './component/Home/Home'
import Footer from './Footer'
import Category from './component/Category/Category'
import Product from './component/Products/Product'
import ProductPage from './component/ProductPage.js/ProductPage'

const Routing = () => {
  return (
    <BrowserRouter>
        <Header/>
        <Route exact path="/" component={Home} />
        <Route path="/category/:topic" component={Category} />
        <Route exact path="/product" component={ProductPage} />
        <Route path="/product/:id" component={Product} />
        
        <Footer/>
    </BrowserRouter>
  )
}

export default Routing