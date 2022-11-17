import React, { useState, useEffect } from "react";
// import { Link } from "react-router-dom";
import QuickSearchDisplay from "./QuickSearchDisplay";

const QuickSearch = () => {
  const [category, setCategory] = useState();

  const renderCategory = () => {
    // calling api using fetch method
    fetch("https://fakestoreapi.com/products/categories")
      .then((res) => res.json())
      // .then((json) => console.log(">>quicksearch",json))
      .then((json) => setCategory(json));
  };

//   const renderCat = () => {
//     console.log(">>map", category);
//     category.map((item, index) => {
//       return <Link className="btn btn-primary">{item}</Link>;
//     });
//   };

  useEffect(() => {
    renderCategory();
  }, []);

  return (
    <div>
      {/* {renderCat} */}
      <QuickSearchDisplay categories={category} />
    </div>
  );
};
export default QuickSearch;
