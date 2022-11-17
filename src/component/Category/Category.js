import { useState, useEffect } from "react"
import React from 'react'
import CategoryDisplay from "./CategoryDisplay";
import axios from "axios";

const Category = (props) => {
    console.log(props)
    const[catData,setCatData] =useState()

    useEffect(() => {
        axios.get(`https://fakestoreapi.com/products${props.location.pathname}`).then((response) => {
          setCatData(response.data);
        });
      }, []);


  return (
    <div>
      <center>
      <h2> {props.match.params.topic} Category Display </h2>
        <CategoryDisplay catList={catData} />
      </center>
    </div>
  )
}

export default Category