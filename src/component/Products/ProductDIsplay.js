import React from 'react'

const ProductDIsplay = ({prodData}) => {
    // console.log(props)
    // const NoDataFound = props;
   
  return (
    <div className='prodcontainer'>
    <img src={prodData.image} alt={prodData.title}  />
    <h2>{prodData.title}</h2><br/>
    <p><b>Description: </b>{prodData.description}</p><br/>
    <p><b>Category:</b> {prodData.category}</p><br/>
</div> 
  )
}

export default ProductDIsplay