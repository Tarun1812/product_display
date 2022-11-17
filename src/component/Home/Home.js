import React, { useState,useEffect }from 'react'
import './home.css'
import HomeDisplay from './HomeDisplay';
import QuickSearch from './QuickSearch/QuickSearch'


const Home = () => {

    const[limitResults, setLimitResults] = useState();

    useEffect(() => {
        fetch("https://fakestoreapi.com/products?limit=6")
        .then((res) => res.json())
        .then((json)=> setLimitResults(json))
    },[])
  return (
    <div>
    
       <center>
        <QuickSearch/>
        <HomeDisplay limitData={limitResults} />
       </center>
      
    </div>
  )
}

export default Home