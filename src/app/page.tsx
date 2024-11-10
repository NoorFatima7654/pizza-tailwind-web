import React from 'react'
import Header from "../app/components/Header";
import Footer from "../app/components/Footer";
import Card from "../app/components/Card";
import Carousel from "../app/components/Carousel";
import Banner from "../app/components/Banner";
import ProductList from "../app/components/ProductList";
import Progressor from "../app/components/Progressor";
import Testimonals from "../app/components/Testimonals";
import Offer from "../app/components/Offer";
import Pizza from "../app/components/Pizza";
import Menuitems from '../app/components/Menuitems';
import Reservation from "../app/components/Reservation";


export default function App() {
  return (
 
        
<div className='text-white bg-gradient-to-r from-black to bg-slate-700 min-h-screen'>
    <Header/>
    <Carousel/>
    <Progressor/>
    <Pizza/>
    <Banner/>
    <ProductList/> 
    <Menuitems/>
    <Offer/>
    <Reservation/>
    <Card/>
    <Testimonals/>
   <Footer/>
    </div>
  
  

  )
}


