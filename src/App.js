import { useState } from "react";
import $, { event } from "jquery";
import "./App.css";

function App() {
  
  const [result, setResult] = useState("");

  const handleDelete = (e) => {
    e.preventDefault();
    const form = $(e.target);
    $.ajax({
      type: "POST",
      url: form.attr("action"),
      data: form.serialize(),
      success(data) {
        setResult(data);
      },
    });
  };

  const handleAdd = (e) => {
    e.preventDefault();
    const form = $(e.target);
    $.ajax({
      type: "POST",
      url: form.attr("action"),
      data: form.serialize(),
      success(data) {
        setResult(data);
      },
    });
  };


  return (
    <div className="App">
      <form
        action="http://localhost:8000/server.php"
        method="post"
        onSubmit={(event) => {this.handleDelete(event); this.handleAdd(event)}}
      >
        <h2 htmlFor="name">Product List </h2>
        <div className="btn-container">
          <button className="Add">ADD</button>
          <button className="Delete">MASS DELETE</button>
        </div>
        
      </form>
      <h1>{result}</h1>
    </div>
  );
}

export default App;
