import React, { useEffect, useState } from 'react';
import './product.css'
import ProductDIsplay from './ProductDIsplay';

const Product = (props) => {
// console.log(">> product",props)
// const Id = `${props.match.params.id}`;
    const[prod,setProd] = useState({})
    // console.log(">> product",prod);
     async function productApi () {
        await fetch(`https://fakestoreapi.com/products/${props.match.params.id}`)
            .then(res=>res.json())
            // .then(json=>setProd(json))
            .then(json=>setProd(json))
            .catch((err) => {
              console.log(err)
          })
    }
    useEffect(() => {
        productApi();
    },[`${props.match.params.id}`])

    // const renderProdData = ({prod}) => {
    //     if(prod){
    //         return  <div className='prodcontainer'>
    //         <img src={prod.image} alt={prod.title} />
    //         <h2>{prod.title}</h2>
            
    //     </div> 
    //     } 
    // }

  return (
    <div className="container">
             <h4 style={{color:"red"}}>Product displayed Id = {props.match.params.id}</h4>
             <ProductDIsplay prodData={prod} />
    </div>
    
  )
}

export default Product