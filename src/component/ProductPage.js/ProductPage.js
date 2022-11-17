import React, {useState, useEffect} from 'react'
import ProductPageDisplay from './ProductPageDisplay'

const ProductPage = () => {
    const[listView,setListView] = useState()

    const renderListView = () => {
      fetch('https://fakestoreapi.com/products')
            .then(res=>res.json())
            .then(json=>setListView(json))
    }

    useEffect (() =>{
      renderListView();
    },[])
  return (
    <div>
        <ProductPageDisplay listData={listView} />
    </div>
  )
}

export default ProductPage