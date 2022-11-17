import React from 'react'
import { Link } from 'react-router-dom'
import './home.css'

const HomeDisplay = (props) => {

    // console.log(props)
    const renderLimit =({limitData}) => {
        // console.log(limitData)
        if(limitData){
           return limitData.map((ele)=>{
                return(
                    <div className="card" key={ele.id}>
                        <img src={ele.image} className="card-img-top" alt="Fissure in Sandstone" width="180" height="170" />
                        <div className="card-body">
                            <h5 className="card-title">{ele.title}</h5>
                            <p className="card-text">Rs.{ele.price}</p>
                            <Link to={`/product/${ele.id}`} className="btn btn-primary">View Details</Link>
                        </div>
                    </div>
                )
            })
        }
       
    }
  return (
    <div className='container'>
        {renderLimit(props)}
            
       </div>
  )
}

export default HomeDisplay