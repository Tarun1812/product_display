import React from 'react'
import'../Home/home.css'
import { Link } from 'react-router-dom'

const CategoryDisplay = (props) => {
  console.log(props.catList)
 
  const listCategory = ({catList}) => {
if(catList){
  return catList.map((items) =>{
    return(
      <div className="card" key={items.id}>
                        <img src={items.image} className="card-img-top" alt="Fissure in Sandstone" width="180" height="170" />
                        <div className="card-body">
                            <h5 className="card-title">{items.title}</h5>
                            <p className="card-text">Rs.{items.price}</p>
                            <Link to={`/product/${items.id}`} className="btn btn-primary">View Details</Link>
                        </div>
                    </div>
    )
  })
}
      
  }


  return (
    <div className='container'>
      {listCategory(props)}
    </div>
  )
}

export default CategoryDisplay