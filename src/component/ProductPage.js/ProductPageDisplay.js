import React from "react";
import "./productPage.css";
import { Link } from "react-router-dom";

const ProductPageDisplay = (props) => {
  // console.log(props.listData.title)
  const renderListData = ({ listData }) => {
    if (listData) {
      return listData.map((item) => {
        return (
          <div className="listcontainer" key={item.id}>
            <tr>
                <td>{item.title}</td>
                <td>{item.category}</td>
                <td><img src={item.image} alt={item.title} width="100" /></td>
                <td><Link to={`/product/${item.id}`} className="btn btn-info">View</Link></td>
            </tr>
          </div>
        );
      });
    }
  };
  return <div>
    <tr>
        <th>Title</th>
        <th>Category</th>
        <th>Image</th>
        <th>View Details</th>
    </tr>
    {renderListData(props)}
    </div>;
};

export default ProductPageDisplay;
