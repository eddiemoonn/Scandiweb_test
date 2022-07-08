import { useState } from "react";
import $, { event } from "jquery";
import "./App.css";
import Products from "./experimental/mockData"

function App() {
  
  const [result, setResult] = useState("");

  const handleDelete = (e) => {
    
  };

  const handleAdd = (e) => {
    
  };


  return (
    <div className="App">
   <div className="header-container">
    <h2 htmlFor="name">Product List </h2>
      <div className="btn-container">
        <button className="Add">ADD</button>
        <button className="Delete">MASS DELETE</button>
      </div>
   </div>
      <section className="products-section">
        <div className="products-container">
        {Products.map(product => {
          return (
            <div className="product-item" key={product.producId}>
              <input type = "checkbox"/>
              <h3>{product.productName}</h3>
              <p>{product.price}</p>
            </div>
                 ) 
        })}
        </div>
      </section>

      <section className="footer-section">
      <div className="footer-container">
        <h4 htmlFor="footer">Scandiweb Test Assignment</h4>
        </div>
      </section>
    </div>
  );
}

export default App;

