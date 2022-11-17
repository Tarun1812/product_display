import React from 'react'
import './productPage.css'

const ProductPageDisplay = (props) => {

    const renderListData = ({listData}) => {
        if(listData){
            return listData.map((item) => {
                return(
                    <div className='listcontainer' key={item.id}>
                        <table >
                        <thead>
                            <tr>
                                <th>Title</th>
                                <th>Category</th>
                                <th>Image</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td><b>{item.title}</b></td>
                                <td>{item.category}</td>
                                <td><img src={item.image} alt={item.title} width="100" /></td>
                            </tr>
                        </tbody>

                    </table>
                    </div>
                )
            })
        }
    }
   return (
    <div>
        {renderListData(props)}
    </div>
  )
}

export default ProductPageDisplay