import React from 'react'
import { Link } from 'react-router-dom'

const QuickSearchDisplay = (props) => {
    // console.log(props.categories)
const renderCat = ({categories}) => {
    if(categories){
        return categories.map((item, index) => {
            return(
                <Link to={`category/${item}`} className="btn btn-primary " key={index}>{item}</Link>
            )
        })
    }
}

  return (
    <div>
        {renderCat(props)}
    </div>
  )
}

export default QuickSearchDisplay